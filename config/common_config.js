
module.exports = {//基本配置
	port	        : "8000",
	env           : 'development',
	openUrl       : "http://localhost:8000/dmp.html",
	nodeUrl       : "http://localhost:8000",
	targetUrl     : "http://172.17.6.43:9093/sp/attendance",//调试时，后台地址，处理跨域
	log4js        : {
		"appenders": [
			{
				"type": "console"
			},
			{
				"type": "dateFile",
				"filename": "logs/booklist.log",
				"pattern": "-yyyy-MM-dd",
				"alwaysIncludePattern": true
			}
		]
	}
}
