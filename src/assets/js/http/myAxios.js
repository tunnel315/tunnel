/**
 * author : jack.lu
 * time   : 2018/1/18
 */


import axios from 'axios'
import { Message, MessageBox, Loading } from 'element-ui'

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

axios.interceptors.request.use(config => {// http请求拦截器
    //通用处理
    const defaultParams = {};//公共参数
    if(config.method === 'get' || config.method === 'delete'){
        config.params = filter_null(Object.assign({}, config.params, defaultParams));
    }else{
        config.data = filter_null(Object.assign({}, config.data, defaultParams));
    }
    return config
},error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {// http响应拦截器
    if(!response.data.returnSuccess){
        if(response.data.returnErrCode =''){//特殊错误码的处理

        }else{//显示对应的错误信息
            Message.error(response.data.returnErrMsg);
        }
    }
    return response.data;
},error => {
    return Promise.reject(error)
})

export default axios;