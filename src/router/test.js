import Echarts from '@/components/chart/Echarts.vue'
import Calendar from '@/components/calendar/Calendar.vue'
let routers =[

    {
        path: '/chart',
        // component: resolve => require(['@/components/chart/Echarts.vue'],resolve),
        component: Echarts,
        meta: {
            title: "图标"
        }
    },

    {
        path: '/calendar',
        //component: resolve => require(['@/components/calendar/Calendar.vue'],resolve),
        component: Calendar,
        meta: {
            title: "日历"
        }
    },

]

export  default routers;