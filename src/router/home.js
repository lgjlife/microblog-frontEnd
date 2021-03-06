// import index from '@/pages/layout/index.vue'
//
// import notFoundPage from '@/common/error/404.vue'
//
// import weather from "@/pages/layout/Weather.vue"

let routers =[
    {
        path: '/',
        component: resolve => require(['@/pages/layout/index.vue'],resolve),
        //component: index,
        meta: {
            title: "首页"
        }
    },

    {
        path: '/404',
         component: resolve => require(['@/components/common/error/404.vue'],resolve),
        //component: notFoundPage,
        meta: {
            title: "找不到页面"
        }
    },

    {
        path: '/weather',
         component: resolve => require(['@/pages/layout/Weather.vue'],resolve),
       // component: weather,
        meta: {
            title: "weather"
        }
    },


]

export  default routers;