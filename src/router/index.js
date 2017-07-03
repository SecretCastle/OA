import Vue from 'vue'
import Router from 'vue-router'


// import Login from '@/components/Login'  // 常规加载
// 懒加载单页面
const Login = resolve => require(['@/components/Login'], resolve);
const Msg = resolve => require(['@/components/msg/Msg'], resolve);
const Mail = resolve => require(['@/components/mail/Mail'], resolve);
const Company = resolve => require(['@/components/mail/Company'], resolve);

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
		}
	]
})
