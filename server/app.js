'use strict';

const
    path = require('path'),
    os = require('os'),
    Koa = require('koa'),
    mount = require('koa-mount'), //路由模块
    staticServer = require('koa-static'), //静态资源管理
    bodyParser = require('koa-bodyparser'),
    logger = require('./public/logger'),//日志模块
    multer = require('koa-multer'),//文件上传模块
    allRouter = require('./routers/allRoute.js');//路由中转站

let app =new Koa();

if (process.env.NODE_ENV == 'development') {//开发环境下webpack配置
	let webpack = require('webpack');
	let compile = webpack(require('../webpack.config.js'));
	let koaWM = require('koa-webpack-middleware');
	app.use(koaWM.devMiddleware(compile, {
        noInfo: false,
        quiet: false,
        watchOptions: {
            aggregateTimeout: 300
        },
        hot: true,
        stats: {
            colors: true
        }
    })).use(koaWM.hotMiddleware(compile));
}

// app.use(async logger.useLog());

app.use(bodyParser());//参数解析
app.use(staticServer(path.join(__dirname, './../dist')));//静态资源

app.use(async (ctx,next) => {
    logger.info(ctx.url)
    try{
       await next();
       ctx.body = ctx.body;//做通用情况处理
    }catch(err){
        logger.info(err)
        if(!err.returnErrCode){
            ctx.body = {
                returnSuccess: false,
                returnErrCode: 'node.system.001',
                returnErrMsg: 'node服务连接异常'
            };
        }else{
            ctx.body = err;
        }
    }
})


app.use(allRouter.routes(),allRouter.allowedMethods());


app.use(async ctx => {
    ctx.body = {
        returnSuccess: false,
        returnErrCode: 'node.system.002',
        returnErrMsg: '未找到请求路径'
    }
    logger.error(ctx.url + ' the path not found : 404')
});

module.exports = app;
