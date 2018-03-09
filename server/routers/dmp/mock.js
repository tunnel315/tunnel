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
	ctx.body = {a:'mock'}
});
router.get('/mockPagination', async (ctx,next) => {
	let list = [
		{id:1,name:'小王',sex:'男',age:'18'},
		{id:1,name:'小王',sex:'男',age:'18'},
		{id:1,name:'小王',sex:'男',age:'18'},
		{id:1,name:'小王',sex:'男',age:'18'}
	];
	resBody.list = list;
	ctx.body = resBody;
});
router.post('/login', async (ctx,next) => {
	let resText = resBody;
		resText.data.token = '123456789';
	ctx.body = resText;
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
	ctx.body = resText
});
router.get('/getUserInfoTest', async (ctx,next) => {
	let resText = resBody;
		resText.data = {
			roles  : ['test'],
			name   : '管理员',
			avatar : 'head',
		}
	ctx.body = resText
});

module.exports = router;
