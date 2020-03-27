import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import register from '@/components/user/register.vue'
import login from '@/components/user/login.vue'
import bottom from '@/components/common/bottom.vue'
import top from '@/components/common/top.vue'
import left from '@/components/common/left.vue'
import right from '@/components/common/right.vue'
import blogEdit from '@/components/blog/blogEdit.vue'


import layout from '@/pages/layout'


const routers = [
        {
            path: '', 
            name: 'index', 
            component: layout,
            
            // path: '/', 
            // name: 'index', 
            // components: {
            //     top: top,
            //     left: left,
            //     right: right,
            //     blogEdit: blogEdit,
            //     bottom: bottom,
            //     register: register,
            //     login: login
            // }
        },
       

     ]



export default routers;
