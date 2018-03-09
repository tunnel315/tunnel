// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包html
const ExtractTextPlugin = require('extract-text-webpack-plugin');//抽离css样式
const CopyWebpackPlugin = require('copy-webpack-plugin');//webpack中拷贝文件和文件夹
const CleanPlugin = require("clean-webpack-plugin");//清除文件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动开启浏览器


const pathArr = require('../config/path_config.js'); //路径配置
const nameArr = require('../config/name_config.js'); //文件名称配置
const CommonConfig = require('../config/common_config');//配置参数文件

const env = process.env.NODE_ENV;




const pluginsArr = [//开发环境下的插件
	new ExtractTextPlugin({
	    filename: "css/[name].[chunkhash].css",
	    disable: env === 'development',//热更新必备
	    allChunks: true
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
	    filename:"./js/common.[hash].js",
	    minChunks:2
	}),
	new CopyWebpackPlugin([
		{from : pathArr.staticPath, to : 'static/../'}
	]),
	new webpack.DefinePlugin({//改变环境变量类型
		'process.env':{
		  'NODE_ENV': JSON.stringify('development')
		}
  	}),
	new CleanPlugin([pathArr.distPath]),
	new webpack.HotModuleReplacementPlugin(),
	new OpenBrowserPlugin({url : CommonConfig.openUrl})
];


let productOption = {};
if(env == 'production'){//生产环境添加的选项
	let productPlugin = [//生产环境下的插件
		new webpack.optimize.UglifyJsPlugin({//压缩插件
	      	sourceMap : true,//压缩映射源最小代码
	      	compress  : {
	        	warnings: false//不显示压缩警告
	      	}
	    }),
	    new webpack.DefinePlugin({//改变环境变量类型
	      	'process.env':{
	        	'NODE_ENV': JSON.stringify('production')
	      	}
	    }),
	    new webpack.LoaderOptionsPlugin({
	      	minimize : true
	    })
	];
	pluginsArr.push.apply(pluginsArr,productPlugin);
	productOption= {//添加的index.html的选项
	    hash   : true, // 为静态资源生成hash值
	    xhtml  : true,//是否渲染link为自闭合的标签，true则为自闭合标签
	    minify : {//压缩
	      removeComments : true,//去注释
	      collapseWhitespace : true//去空格
	    }
	}
}



nameArr.forEach((page) => {//多文件则多输出
	let options = {
		chunks   : [page,'vendor'],
		filename : `${page}.html`,
		template : path.resolve(pathArr.entryPath,`${page}/index.html`)
	},
	htmlPlugin = new HtmlWebpackPlugin(
		Object.assign({}, options, productOption)
	);
	pluginsArr.push(htmlPlugin);
});

module.exports = pluginsArr;
