import index from '@/pages/layout/index.vue'

import notFoundPage from '@/common/error/404.vue'


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

]

export  default routers;