// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.


const pathArr = require('../config/path_config.js');
module.exports = {
	filename : './js/[name].[chunkhash].js',//出口文件 hash规则生成
	path     : pathArr.distPath,
	chunkFilename: './js/[name].[chunkhash].js'//懒加载输出路径配置
}
