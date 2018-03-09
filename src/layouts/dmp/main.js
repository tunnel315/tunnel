/**
 * author : jack.lu
 * time   : 2018/1/18
 */

import Vue from 'vue';
import router from 'routers/dmp/router';
import App from 'containers/dmp/app.vue';
import store from '../../vuex/dmp/index';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'scss/public/index.scss';//全局css
import '../../assets/icons/index';
import 'js/permission/index';//权限控制文件

import TableVue from 'components/table/index';
import MaskLayerVue from 'components/maskLayer/index';

Vue.use(ElementUi)
Vue.use(TableVue)
Vue.use(MaskLayerVue)



new Vue({
	el :'#dmp',
	router,
	store,
	render : (createElement) => createElement(App)
})
