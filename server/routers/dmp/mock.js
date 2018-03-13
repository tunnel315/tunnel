/**
 * author : jack.lu
 * time   : 2018/1/23
 */

const router = require('koa-router')();

let resBody = {
	returnSuccess : true,
	returnErrMsg  : '',
	returnErrCode : '',
	data          : {}
};


router.get('/', async (ctx,next) => {
	ctx.type = 'application/json; charset=utf-8';
	ctx.body =JSON.stringify({a:'mock'}); 
});
router.get('/mockPagination', async (ctx,next) => {
	let list = [
		{id:1,name:'小王',sex:'男',age:'18'},
		{id:1,name:'小王',sex:'男',age:'18'},
		{id:1,name:'小王',sex:'男',age:'18'},
		{id:1,name:'小王',sex:'男',age:'18'}
	];
	resBody.list = list;
	ctx.type = 'application/json; charset=utf-8';
	ctx.body = JSON.stringify(resBody);
});
router.post('/login', async (ctx,next) => {
	let resText = resBody;
		resText.data.token = '123456789';
	ctx.type = 'application/json; charset=utf-8';
	ctx.body = JSON.stringify(resText);
});
router.post('/logout', async (ctx,next) => {
	ctx.body = resBody
});
router.get('/getUserInfo', async (ctx,next) => {
	let resText = resBody;
		resText.data = {
			roles  : ['admin'],
			name   : '管理员',
			avatar : 'head',
		}
		ctx.type = 'application/json; charset=utf-8';
		console.log(resText)
	ctx.body = JSON.stringify(resText);
});
router.get('/getUserInfoTest', async (ctx,next) => {
	let resText = resBody;
		resText.data = {
			roles  : ['test'],
			name   : '管理员',
			avatar : 'head',
		}
		ctx.type = 'application/json; charset=utf-8';
	ctx.body = JSON.stringify(resText);
});

module.exports = router;
