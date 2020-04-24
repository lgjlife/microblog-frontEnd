import Echarts from '@/components/chart/Echarts.vue'
import Calendar from '@/components/calendar/Calendar.vue'
let routers =[

    {
        path: '/blog/:userId/:blogId',
        component: resolve => require(['@/components/blog/BlogDetails.vue'],resolve),
       // component: Echarts,
        meta: {
            title: "图标"
        },


    },



]

export  default routers;