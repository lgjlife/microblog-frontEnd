import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//
// import axios from '@/util/axios/http.js'
// Vue.prototype.$axios = axios

Vue.prototype.$appName = 'My App'


import Vuex from 'vuex'
Vue.use(Vuex)

import store from "./store/store.js"

//VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter); //挂载属性

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

import router from './router/router.js';







Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//  el: "#app",
//  router,
//  render: h => h(app)
// })


new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
