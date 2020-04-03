import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '@/pages/layout/index.vue'
import register from '@/components/user/register.vue'

const routers = [
    {
        path: '/',
        component: index
    },
    {
        path: '/register',
        component: register,
        meta: {
            title: "注册"
        }
    }
]



export default routers;
