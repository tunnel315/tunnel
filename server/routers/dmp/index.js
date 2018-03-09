/**
 * author : jack.lu
 * time   : 2018/1/19
 */

const router = require('koa-router')(),
	  nRequest = require('../../public/request.js'),
	  config = require('../../../config/common_config.js');


let apis = {
	userAuth          : '/attendanceManage/attendancePage',
	importLeaveRecord : '/attendanceManage/importLeaveRecord'
}

router.get('/', async (ctx,next) => {
	console.log(ctx.request.body);
	
	let uri = config.targetUrl + apis.importLeaveRecord;
	let result = await nRequest.jsonTransfer(uri,'POST',{},{});
    ctx.body = result;
});
router.post('/getIndex1', async (ctx,next) => {
	ctx.body = {a:'getIndex1'}
});
router.get('/getIndex2', async (ctx,next) => {
	ctx.body = {a:'getIndex2'}
});
router.get('/getIndex3', async (ctx,next) => {
	ctx.body = {a:'getIndex3'}
});
router.get('/getIndex4', async (ctx,next) => {
	ctx.body = {a:'getIndex4'}
});
router.get('/getIndex5', async (ctx,next) => {
	ctx.body = {a:'getIndex5'}
});

module.exports = router;
