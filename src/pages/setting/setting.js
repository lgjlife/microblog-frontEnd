import Vue from 'vue'
import Setting from './Setting.vue'


//VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter); //挂载属性

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


/*
const originalPush = VueRouter.prototype.push

VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
 el: '#setting',
 render: h => h(Setting)
})