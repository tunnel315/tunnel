/**
 * author : jack.lu
 * time   : 2018/1/26
 */

import Vue from 'vue';
import SvgIcon from 'components/svgIcons/index.vue';//SVG组件


Vue.component('IconVue',SvgIcon);//注册icon组件
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)