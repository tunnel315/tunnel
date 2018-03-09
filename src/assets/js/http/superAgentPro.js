/**
 * author : jack.lu
 * time   : 2018/1/18
 */

const config = require('../../../../config/common_config');
const request = require('superagent');
const root = config.nodeUrl;

function toType(obj){//判断元素类型
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
function filter_null(o) {//过滤空参数
    for (var key in o) {
      if (o[key] == null) {
          delete o[key]
      }
      if (toType(o[key]) == 'string') {
          o[key] = o[key].trim()
          if (o[key].length == 0) {
            delete o[key]
          }
      }
    }
    return o
}

function _api_base(method, url, params) {
    return new Promise((resolve,reject) => {
        var r = request(method, url).type('application/json');
        if (params) {
            params = filter_null(params);
            if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
                if (toType(params) == 'object') {
                    params = JSON.stringify(params);
                }
                r = r.send(params)
            } else if (method == 'GET') {
                r = r.query(params)
            }
        };
        r.set('access_token',sessionStorage.getItem('accessToken'));//设置请求头
        r.end((err, res) => {
          if(!res){
            reject(err);
          };
          if (res.body){
              if(res.body.status && res.body.status!=200){
                console.log(res.body);
                reject(res.body);
              }
              resolve(res.body);//通用处理
          } else if(err){
              reject(err);
          }
        });
    }) 
};

export default {
    get: function(url, params) {
      return _api_base('GET', root + url, params)
    },
    post: function(url, params) {
      return _api_base('POST', root + url, params)
    },
    put: function(url, params) {
      return _api_base('PUT', root + url, params)
    },
    delete: function(url, params) {
      return _api_base('DELETE', root + url, params)
    },
}
