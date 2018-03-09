// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.

module.exports = {
	entry     : require('./webpack-config/entry.config.js'),

	output    : require('./webpack-config/output.config.js'),

	devtool   : require('./webpack-config/devtool.config.js'),

	//devServer : require('./webpack-config/devServer.config.js'),
	
	module    : require('./webpack-config/module.config.js'),

	plugins   : require('./webpack-config/plugins.config.js'),

	resolve   : require('./webpack-config/resolve.config.js')
}