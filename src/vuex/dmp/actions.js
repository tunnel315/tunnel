/**
 * author : jack.lu
 * time   : 2018/1/23
 */

import { Notification } from 'element-ui';

export default {
  
  commonCallBack ({commit},cb) {//返回200 时候的统一处理
    const data = cb.data;
    if(data.returnSuccess){
        cb.successCallback()
    }else{
        this.dispatch('notifyWarn',data.returnErrMsg);
        cb.errCallBack && cb.errCallBack();
    }
  },
  notifyError ({commit},products) {//错误提示
    Notification({
      title: '失败',
      message: products,
      position: 'bottom-right',
      type : 'error',
    })
  },
  notifyWarn ({commit},products) {//警告提示
    Notification({
      title: '警告',
      message: products,
      position: 'bottom-right',
      type : 'warning',
    })
  },
  notifySuccess ({commit},products) {//成功提示
    Notification({
      title: '成功',
      message: products,
      position: 'bottom-right',
      type : 'success',
    })
  },
  toggleSideBar({ commit }) {//切换侧边导航状态
    commit('TOGGLE_SIDEBAR')
  },
}
