// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.

const path = require('path');

const pathArr = require('../config/path_config.js'); // 入口文件路径

const nameArr = require('../config/name_config.js'); // 入口文件名称

const configEntry = {};

nameArr.forEach((page) => {
	configEntry[page] = [//配置每一个入口文件
		"babel-polyfill",//ES6语法兼容
		path.resolve(pathArr.entryPath,`${page}/main.js`)
	];
	process.env.NODE_ENV === 'develoment' && configEntry[page].unshift(...[
  	
	])
});

module.exports = configEntry;
