import { asyncRouterMap, constantRouterMap } from 'routers/dmp/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {//根据路由中设置的权限和角色进行匹配
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * author : jack.lu
 * time   : 2018/1/30
 */

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */

function filterAsyncRouter(asyncRouterMap, roles) {//返回有权限的路由
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {//如果还有子节点，递归调用
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}


const permission = {//权限控制数据模块
  state : {
    routers : constantRouterMap,
    addRouters : []
  },
  mutations : {
    SET_ROUTERS : (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions : {
    generateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data;
        let accessedRouters;
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap;//如果权限是admin，则加入所有的路由，如果不是则根据权限去对应
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  },
  getters : {
    permission_routers : state => state.routers,
    addRouters         : state => state.addRouters
  }
}

export default permission
