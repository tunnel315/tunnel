// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	rules : [
		{
            test: /\.vue$/, 
            loader: 'vue-loader',
            exclude: /node_modules/    
        },
		{
			test: /\.js$/,
		    exclude : /node_modules/,
		    loader : 'babel-loader',
		    query : {
		    	presets : [
		          	["es2015", 'stage-0']
		        ],
		        plugins: [
		        	'transform-runtime'
		        ]
		    }
		},
		{
			test:/\.svg$/,
			loader: 'svg-sprite-loader',
			include: [resolve('src/assets/icons')],
			options: {
				symbolId: 'icon-[name]'
			}
		},
		{
	      	//将小于8192byte的图片转成base64码
	      	test: /\.(png|jpe?g|gif)(\?.*)?$/,
			loader : 'url-loader?limit=8192&name=images/[hash].[ext]',
			exclude : [resolve('src/assets/icons')]
	    },
	    {
	      	test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
			loader : 'url-loader?name=fonts/[name].[ext]',
			exclude : [resolve('src/assets/icons')]
	    },
	    {
	      	test: /.(css|scss)$/,
	      	use : ExtractTextPlugin.extract({
	        	fallback : ["style-loader"],
	        	use : [
	          		"css-loader",
					"sass-loader"
	        	],
	        	publicPath : "/"
	      	})
	    }
	]
}