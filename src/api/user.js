/**
 * author : jack.lu
 * time   : 2018/1/18
 */

import superAgent from '../assets/js/http/superAgentPro';
import axios from '../assets/js/http/myAxios.js';

export function login (param) {//登录
	
    return axios.post('/mock/login',param)
}

export function getUserInfo (param) {//获取用户信息
    return axios.get('/mock/getUserInfoTest',param)
}

export function logout () {//退出登录
    return axios.post('/mock/logout',{})
}
