import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import layout from '@/components/pages/layout.vue'

const routers = [
        {
            path: '', 
            name: 'index', 
            component: layout,
        },
       

     ]



export default routers;
