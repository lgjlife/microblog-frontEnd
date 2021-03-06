import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//import store from "./store/store.js"
import store from "@/store/store.js"
//
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.prototype.$appName = 'My App'


import Vuex from 'vuex'
Vue.use(Vuex)


//VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter); //挂载属性

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

//mock
true && require('@/mock')


//自定义工具

import  TimeUtil from '@/assets/js/util/time/time.js'
import  Log from '@/assets/js/util/log/Log'
Vue.prototype.$Log = Log

/*
npm run serve时会把process.env.NODE_ENV设置为‘development’；
npm run build 时会把process.env.NODE_ENV设置为‘production’；
此时只要根据process.env.NODE_ENV设置不同请求url就可以很简单的区分出本地和线上环境。
 */
Log.info("main.js","环境=[]",[process.env.NODE_ENV])

/**
 * 引入阿里icon的文件
 */
import "@/assets/icon/ali/iconfont.css"
import "@/assets/icon/ali/iconfont.js"

//视频播放
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router';



//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts



Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//  el: "#app",
//  router1,
//  render: h => h(app)
// })


new Vue({
    router: router,
    store,
  render: h => h(App),
}).$mount('#app')
