import Vue from 'vue'
import Router from 'vue-router'


// import Login from '@/components/Login'  // 常规加载
// 懒加载单页面
const Login = resolve => require(['@/components/Login'], resolve);
const Msg = resolve => require(['@/components/msg/Msg'], resolve);
const Mails = resolve => require(['@/components/mails/Mails'], resolve);
const Company = resolve => require(['@/components/mails/Company'], resolve);

Vue.use(Router)

export default new Router({
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
		    path: '/mails/Mails',
		    name: 'Mails',
		    component: Mails
		},
		{
		    path: '/mails/Company/:pid',
		    name: 'Company',
		    component: Company
		}
	]
})
