let routers =[

    {
        path: '/article/edit',
        component: resolve => require(['@/components/article/ArticleEdit.vue'],resolve),
        // component: Echarts,
        meta: {
            title: "文章编辑"
        },
    },
    {
        path: '/article/:userId',
        component: resolve => require(['@/components/article/Article.vue'],resolve),
        meta: {
            title: "文章查看"
        },
        children: [
            {
                path: 'view/:articleId',
                component: resolve => require(['@/components/article/ArticleView.vue'],resolve),
                meta: {
                    title: "文章查看"
                },
            },
            {
                path: 'list',
                component: resolve => require(['@/components/article/ArticleList.vue'],resolve),
                meta: {
                    title: "文章查看"
                },
            },

        ],
    },
]

export  default routers;