import Vue from 'vue'
import index from './index.vue'


//VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter); //挂载属性

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import routers from './router/router.js';



const router = new VueRouter({
  mode: 'history',
  routes: routers
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
 el: "#index",
 router,
 render: h => h(index)
})