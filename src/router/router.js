import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '@/pages/layout/index.vue'
import register from '@/components/user/register.vue'
import login from '@/components/user/login.vue'
import Emotion from '@/components/common/Emotion.vue'

import Upload from '@/components/common/Upload.vue'
import HotTopic from '@/components/blog/HotTopic.vue'


const routers = [
    {
        path: '/',
        component: index,
        meta: {
            title: "首页"
        }
    },
    {
        path: '/register',
        component: register,
        meta: {
            title: "注册"
        }
    },

    {
        path: '/login',
        component: login,
        meta: {
            title: "登录"
        }
    },
    {
        path: '/emotion',
        component: Emotion,
        meta: {
            title: "表情包"
        }
    },
    {
        path: '/upload',
        component: Upload,
        meta: {
            title: "上传"
        }
    },
    {
        path: '/topic',
        component: HotTopic,
        meta: {
            title: "热门话题"
        }
    },


]



export default routers;
