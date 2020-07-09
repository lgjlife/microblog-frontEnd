let routers =[

    {
        path: '/manager',
        component: resolve => require(['@/manager/index.vue'],resolve),
        meta: {
            title: "后台管理"
        },
        children: [
            {
                path: 'monitor',
                component: resolve => require(['@/manager/components/ServiceMonitor.vue'],resolve),
                meta: {
                    title: "应用监控"
                },
            },
            {
                path: 'task',
                component: resolve => require(['@/manager/components/TaskManager.vue'],resolve),
                meta: {
                    title: "任务中心"
                },
            },
            {
                path: 'user',
                component: resolve => require(['@/manager/components/UserManager.vue'],resolve),
                meta: {
                    title: "用户中心"
                },
            },
            {
                path: 'permission',
                component: resolve => require(['@/manager/components/PermissionManager.vue'],resolve),
                meta: {
                    title: "权限管理"
                },
            }
        ]
    },
    {
        path: '/manager/login',
        component: resolve => require(['@/manager/components/login/login.vue'],resolve),
        meta: {
            title: "后台管理系统登录"
        },
    }
]

export  default routers;