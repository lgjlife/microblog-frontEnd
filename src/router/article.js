let routers =[

    {
        path: '/article',
        component: resolve => require(['@/components/article/Article.vue'],resolve),
        // component: Echarts,
        meta: {
            title: "文章编辑"
        }
    },



]

export  default routers;