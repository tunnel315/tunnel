/**
 * author : jack.lu
 * time   : 2018/1/19
 */

const router = require('koa-router')();
const indexRouter = require('./dmp/index');
const mockRouter = require('./dmp/mock');

router.use('/index',indexRouter.routes(),indexRouter.allowedMethods());
router.use('/mock',mockRouter.routes(),mockRouter.allowedMethods());
module.exports = router;
