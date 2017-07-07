// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import router from './router';
import App from './App';
import $ from 'n-zepto';
import Vuex from 'vuex';
import axios from 'axios';
import  { ToastPlugin } from 'vux';

require('es6-promise').polyfill();

Vue.use(Vuex);
Vue.use(ToastPlugin)

FastClick.attach(document.body);

Vue.config.productionTip = false;

// let toast = function (text, time, type, pos, mask){
//     this.$vux.toast.show({
//         'time': time ? time : 2e3,
//         'text': text,
//         'type': type ? type : 'text',
//         'pos': pos ? pos : 'default',
//         'is-show-mask': mask ? mask : false
//     })
// }

window.$router = router;
// window.toast = toast;

window.base_url = 'https://oa.m150.ibw.cc';

axios.defaults.baseURL = 'https://oa.m150.ibw.cc';

// 登陆前
let axiosApi = axios.create({
    baseUrl: base_url,
    timeout: 10000
})

// 登陆后
let axiosAjax = axios.create({
    baseUrl: base_url,
    timeout: 10000,
    params: {
        Token: localStorage.getItem('Token'),
        UserId: localStorage.getItem('UserId')
    },
    data: {
        Token: localStorage.getItem('Token'),
        UserId: localStorage.getItem('UserId')
    }
})

Vue.prototype.$api = window.$api = axiosApi;
Vue.prototype.$ajax = window.$ajax = axiosAjax;

// // Add a request interceptor
// axios.interceptors.request.use(function(config) {
//     // Do something before request is sent
//     return config;
// }, function(error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function(response) {
//     // Do something with response data
//     return response;
// }, function(error) {
//     // Do something with response error
//     return Promise.reject(error);
// });



const store = new Vuex.Store({}) // 这里你可能已经有其他 module
store.registerModule('vux', { // 名字自己定义
    state: {
        isLoading: false,
        title: '云OA系统',
        hasFoot: false,
        menus: {},
        hasBack: true,
        showMore: false,
        rightTab: '完成',
        rightFn: Function
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        },
        hasBack(state, payload) {
            state.hasBack = payload.hasBack;
        },
        hasFoot(state, payload) {
            state.hasFoot = payload.hasFoot;
        },
        getTitle(state, payload) {
            state.title = payload;
        },
        rightTab(state, payload) {
            state.rightTab = payload;
        },
        getMenus(state, payload) {
            state.menus = payload;
        },
        rightFn(state, fn) {
            state.rightFn = fn;
        }
    }
})

router.beforeEach(function(to, from, next) {
    store.commit('updateLoadingStatus', { isLoading: true })
    next()
})

router.afterEach(function(to) {
    store.commit('updateLoadingStatus', { isLoading: false })
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')