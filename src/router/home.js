import index from '@/pages/layout/index.vue'

import notFoundPage from '@/common/error/404.vue'

import weather from "@/pages/layout/weather.vue"

let routers =[
    {
        path: '/',
        component: index,
        meta: {
            title: "首页"
        }
    },

    {
        path: '/404',
        component: notFoundPage,
        meta: {
            title: "找不到页面"
        }
    },

    {
        path: '/weather',
        component: weather,
        meta: {
            title: "weather"
        }
    },


]

export  default routers;