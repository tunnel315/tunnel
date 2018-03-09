// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.

const pathArr = require('../config/path_config.js');
const CommonConfig = require('../config/common_config');//配置参数文件

module.exports = {//构建本地服务
	contentBase          : pathArr.distPath, //本地服务所加载的页面的目录
	port                 : CommonConfig.port,
	historyApiFallback   : true ,//不跳转
	hot                  : true ,
	proxy                : {
		'/' : {
			target : CommonConfig.target,
		},
	}
}