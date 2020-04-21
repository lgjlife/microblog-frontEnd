import Echarts from '@/components/chart/Echarts.vue'
import Calendar from '@/components/calendar/Calendar.vue'
let routers =[

    {
        path: '/chart',
        component: Echarts,
        meta: {
            title: "图标"
        }
    },

    {
        path: '/calendar',
        component: Calendar,
        meta: {
            title: "日历"
        }
    },

]

export  default routers;