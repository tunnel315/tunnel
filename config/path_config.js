// Copyright (c) 2018 by your Jack.lu , All Rights Reserved. 

const path = require('path');

const moduleExports = {};


moduleExports.RootPath = path.resolve(__dirname, '../');//项目根目录

moduleExports.srcPath = path.resolve(moduleExports.RootPath, './src');//项目源代码目录

moduleExports.entryPath = path.resolve(moduleExports.srcPath, './layouts');//项目入口html

moduleExports.distPath = path.resolve(moduleExports.RootPath, './dist');//项目打包输出目录

moduleExports.scssPath = path.resolve(moduleExports.srcPath, './style/scss');//scss位置

moduleExports.cssPath = path.resolve(moduleExports.srcPath, './style/css');//css位置

moduleExports.componentsPath = path.resolve(moduleExports.srcPath, './components');//组件位置

moduleExports.routersPath = path.resolve(moduleExports.srcPath, './routers');//routers

moduleExports.containersPath = path.resolve(moduleExports.srcPath, './containers');//containers位置

moduleExports.apiPath = path.resolve(moduleExports.srcPath, './api');//api位置

moduleExports.jsPath = path.resolve(moduleExports.srcPath, './assets/js');//js第三方库或不常用代码存放

moduleExports.imagesPath = path.resolve(moduleExports.srcPath, './assets/images');//图片位置

moduleExports.mockPath = path.resolve(moduleExports.srcPath, './assets/mock');//模拟数据位置

moduleExports.staticPath = path.resolve(moduleExports.RootPath, './static/**/*');//静态资源原路径

module.exports = moduleExports;