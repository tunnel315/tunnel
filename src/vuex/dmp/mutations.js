/**
 * auther : jack.lu
 * time   : 2018/1/23
 */

import Cookies from 'js-cookie';

export default {
  update_loading (state,payload) {//设置全局的loading状态
    state.status.loading = payload;
  },
  TOGGLE_SIDEBAR: state => {//切换侧边导航状态
    if (state.rootStatus.sidebar.opened) {
      Cookies.set('sidebarStatus', true)
    } else {
      Cookies.set('sidebarStatus', false)
    }
    state.rootStatus.sidebar.opened = !state.rootStatus.sidebar.opened;
    
  },
}
