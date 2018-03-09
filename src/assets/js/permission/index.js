/**
 * author : jack.lu
 * time   : 2018/1/31
 */

import router from 'routers/dmp/router';
import store from '../../../vuex/dmp/index';
import {Message} from 'element-ui';
import NProgress from 'nprogress';
import {getToken} from 'js/utils/cookie-utils';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

function hasPermission(roles, permissionRoles) {//权限判断
    if (roles.indexOf('admin') >= 0) return true;
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect'];//没有重定向的白名单

router.beforeEach((to, from, next) => {
    NProgress.start(); //开始进度条
    if(getToken()){//如果有token
        if(to.path == '/login'){//如果为登录页面
            next({path : '/'});//有token情况下，直接登录到主页
            NProgress.done();//结束
        }else{
            if(store.getters.roles.length ===0){
                store.dispatch('getUserInfo')
                .then(res => {//获取用户信息
                    const roles = res.data.roles;
                    store.dispatch('generateRoutes', {roles}).then(() => {//根据roles权限生成可访问的路由表
                        router.addRoutes(store.getters.addRouters);//动态添加可访问的路由表
                        next({...to, replace : true});//确保addRoutes已完成
                    })
                })
                .catch((error) => {
                    console.log(error);
                    store.dispatch('fedLogout')
                    .then(() => {
                        Message.error('验证失败，请重新登录')
                        next({ path: '/login' })
                    })
                })
            }else{//动态改变权限
                if (hasPermission(store.getters.roles, to.meta.roles)) {
                    next()//
                } else {
                    next({ path: '/401', replace: true, query: { noGoBack: true }})
                }
            }
        }
    }else{
        if(whiteList.indexOf(to.path) !== -1){//在白名单中，可直接进入
            next()
        }else{//否则重定向到登录页面
            next('/login');
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done();
  })
  
