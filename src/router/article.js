let routers =[

    {
        path: '/article',
        component: resolve => require(['@/components/article/Article.vue'],resolve),
        // component: Echarts,
        meta: {
            title: "文章编辑"
        },
    },
    {
        path: '/article/view/:articleId',
        component: resolve => require(['@/components/article/ArticleView.vue'],resolve),
        meta: {
            title: "文章查看"
        },
    },
]

export  default routers;