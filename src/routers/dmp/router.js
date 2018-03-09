// Copyright (c) 2017 by your Jack.lu , All Rights Reserved.

import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_'+process.env.NODE_ENV);

import Index from 'containers/dmp/index/index.vue';



Vue.use(Router)

export const constantRouterMap = [
	{
		path      : '/login',
		name      : 'login',
		component : _import('login/index'),
		hidden    : true
	},
	{
		path      : '',
		name      : 'dashboard',
		redirect: '/dashboard',
		component : Index,
		children  : [
			{
				path      : 'dashboard',
				component : _import('index/dashboard/index'),
				name      : 'dashboard',
				meta      : { title: '首页', icon: 'dashboard', noCache: true }
			}
		]
	},
	{
		path      : '/part1',
		component : Index,
		name      : 'part1',
		redirect  : 'noredirect',
		meta      : {title:'导航1',icon:'documentation'},
		children  : [
			{
				path      : 'con1',
				component : _import('index/part1/con1/index'),
				name      : 'con1',
				meta      : {title:'二级导航1',icon:'documentation',noCache:true},
			},
			{
				path      : 'con2',
				component : _import('index/part1/con2/index'),
				name      : 'con2',
				meta      : {title:'二级导航2',icon:'documentation',noCache:true},
			},
			{
				path      : 'con3',
				component : _import('index/part1/con3/index'),
				name      : 'con3',
				meta      : {title:'二级导航3',icon:'documentation',noCache:true},
			}
			
		]
	}
]

export default new Router({
	routes : [
		...constantRouterMap
	]
});

export const asyncRouterMap = [
	{
		path      : '/part2',
		component : Index,
		redirect: 'noredirect',
		meta      : {title:'导航2',icon:'icon',noCache:true},
		children  : [
			{
				path      : 'con1',
				component : _import('index/part2/con1/index'),
				name      : 'part2',
				meta      : {title:'导航2',icon:'icon',noCache:true}
			},
		]
	},
	{
		path      : '/part3',
		component : Index,
		redirect: '/part3/index',
		meta: { roles: ['test'] },
		children  : [
			{
				path      : 'index',
				component : _import('index/part3/index'),
				name      : 'part3',
				meta      : {title:'导航3',icon:'icon',noCache:true}
			},
		]
	},
	{
		path      : '/part4',
		component : Index,
		redirect: '/part4/index',
		meta: { roles: ['test'] },
		children  : [
			{
				path      : 'index',
				component : _import('index/part4/index'),
				name      : 'part4',
				meta      : {title:'导航4',icon:'icon',noCache:true}
			},
		]
	},
	{
		path      : '/part5',
		component : Index,
		redirect: '/part5/index',
		meta: { roles: ['admin'] },
		children  : [
			{
				path      : 'index',
				component : _import('index/part5/index'),
				name      : 'part5',
				meta      : {title:'导航5',icon:'icon',noCache:true}
			},
		]
	},
	{
		path      : '/part6',
		component : Index,
		redirect: '/part6/index',
		meta: { roles: ['admin'] },
		children  : [
			{
				path      : 'index',
				component : _import('index/part6/index'),
				name      : 'part6',
				meta      : {title:'导航6',icon:'icon',noCache:true}
			},
		]
	}
]
