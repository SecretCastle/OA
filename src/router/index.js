import Vue from 'vue'
import Router from 'vue-router'


// import Login from '@/components/Login'  // 常规加载
// 懒加载单页面
const Login = resolve => require(['@/components/Login'], resolve);
const Msg = resolve => require(['@/components/msg/Msg'], resolve);
const Mail = resolve => require(['@/components/mail/Mail'], resolve);
const Company = resolve => require(['@/components/mail/Company/Company'], resolve);
const Emp = resolve => require(['@/components/mail/emp/emp'], resolve);
const Apps = resolve => require(['@/components/app/apps'], resolve);
const Own = resolve => require(['@/components/Own/Own'], resolve);
const OwnInfo = resolve => require(['@/components/Own/OwnInfo/OwnInfo'], resolve);
const OwnInfoEdit = resolve => require(['@/components/Own/OwnInfo/OwnInfoEdit'], resolve);

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
		    path: '/msg/Msg',
		    name: 'Msg',
		    component: Msg
		},
		{
		    path: '/mail/Mail',
		    name: 'Mail',
		    component: Mail
		},
		{
		    path: '/mail/Company/:pid',
		    name: 'Company',
		    component: Company
		},
		{
		    path: '/mail/Emp/:empId',
		    name: 'Emp',
		    component: Emp
		},
		{
		    path: '/App/Apps',
		    name: 'Apps',
		    component: Apps
		},
		{
		    path: '/Own/Own',
		    name: 'Own',
		    component: Own
		},
		{
		    path: '/Own/OwnInfo/:empId',
		    name: 'OwnInfo',
		    component: OwnInfo
		},
		{
		    path: '/Own/OwnInfoEdit/:val',
		    name: 'OwnInfoEdit',
		    component: OwnInfoEdit
		}
	]
})
