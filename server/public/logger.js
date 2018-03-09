'use strict';

// const path = require('path');
// const log4js = require('log4js');
// const config = require('../../config/common_config');

// /**
//  * 日志配置
//  */
// exports.configure = function() {
//     log4js.configure(config.log4js);
// }

// exports.logger = function(name) {
//     var dateFileLog = log4js.getLogger(name);
//     dateFileLog.setLevel(log4js.levels.INFO);
//     return dateFileLog;
// }

// exports.useLog = function() {
//     return new Promise((resolve,reject) => {
            //log4js.connectLogger(log4js.getLogger("app"), {level: log4js.levels.INFO});
            //resolve()
//    })
// } 


'use strict';

const
    config = require('../../config/common_config'),
    Log = require('log');
let logger;

if (config.log4j) {
    if (typeof config.log4j === 'boolean') {
        logger = new Log('info');
    } else if (typeof config.log4j === 'object') {
        logger = new Log(config.log4j);
    }
} else {
    logger = console;
}

module.exports = logger;