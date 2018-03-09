// Copyright (c) 2018 by your Jack.lu , All Rights Reserved.

const pathArr = require('../config/path_config.js');
module.exports = {
  extensions: ['.jsx' ,'.js' ,'.scss' ,'.less' ,'.css' ,'.png' ,'.jpg'],
  alias: {
      'scss'        : pathArr.scssPath,
      'css'         : pathArr.cssPath,
      'components'  : pathArr.componentsPath,
      'js'          : pathArr.jsPath,
      'images'      : pathArr.imagesPath,
      'mock'        : pathArr.mockPath,
      'containers'  : pathArr.containersPath,
      'routers'     : pathArr.routersPath,
      'api'         : pathArr.apiPath
  }
}