import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios


//VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter); //挂载属性

import "@/assets/icon/ali/iconfont.css"
import "@/assets/icon/ali/iconfont.js"



//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import routers from './router/router.js';



const router = new VueRouter({
  mode: 'history',
  routes: routers
})

router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
})


Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//  el: "#app",
//  router,
//  render: h => h(app)
// })


new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
