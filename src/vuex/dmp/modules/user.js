/**
 * author : jack.lu
 * time   : 2018/1/23
 */

import {login,getUserInfo,logout} from 'api/user';
import { getToken, setToken, removeToken } from 'js/utils/cookie-utils.js';


export default {
    state : {
        token  : '',//用户token
        code   : '',//用户状态码
        avatar : '',//用户头像
        roles  : [],//用户角色
        name   : '',//用户名
    },
    mutations : {
        SET_CODE: (state, code) => {//设置用户的状态码
            state.code = code
        },
        SET_TOKEN: (state, token) => {//设置用户登录token
            setToken(token)
            state.token = token
        },
        SET_AVATAR: (state, avatar) => {//设置用户头像
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {//设置用户角色列表
            state.roles = roles      
        },
        SET_NAME: (state, name) => {//设置用户名
            state.name = name
        },
    },
    actions : {
        login ({commit},loginInfo) {//登录
            const loginName = loginInfo.username.trim();           
            return new Promise((resolve,reject) => {
                login({
                    username : loginName,
                    possword : loginInfo.possword
                })
                .then((res) => {
                    commit('SET_TOKEN', res.data.token)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },
        getUserInfo ({commit,state}) {//获取用户信息
            return new Promise((resolve,reject) => {
                getUserInfo({
                    token : state.token
                })
                .then(res => {
                    commit('SET_ROLES', res.data.roles)
                    commit('SET_NAME', res.data.name)
                    commit('SET_AVATAR', res.data.avatar)
                    resolve(res);
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        logout({ commit, state }) {//退出登录
          return new Promise((resolve, reject) => {
            logout({
                token : state.token
            })
            .then((data) => {
              commit('SET_TOKEN', '')
              commit('SET_ROLES', [])
              resolve()
            })
            .catch(error => {
              reject(error)
            })
          })
        },
        fedLogout({commit}){//前端操作退出,未告诉后台，
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', '');
                commit('SET_ROLES', [])
                removeToken();
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    },
    getters : {
        avatar : state => state.avatar,
        roles  : state => state.roles,
    }
  }
  