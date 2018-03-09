'use strict';

const http =require('http'),
	  app = require('./server/app'),
	  config = require('./config/common_config.js'),
	  server = http.createServer(app.callback());

		

server.listen(config.port, ()=>{
    console.info(`服务监听 : http://localhost:${config.port}/`);
});
