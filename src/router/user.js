import register from '@/components/user/auth/register.vue'
import login from '@/components/user/auth/login.vue'

import user from '@/components/user'

import UserHome from '@/components/user/common/home.vue'
import HomeBlog from '@/components/user/common/home/blog.vue'
import HomeFollow from '@/components/user/common/home/follow.vue'
import HomeFans from '@/components/user/common/home/fans.vue'

import UserManage from '@/components/user/manage'
import UserPhoto from '@/components/user/common/photos.vue'

import Chat from '@/components/chat/Chat.vue'

let routers =[
    {
        path: '/user/:type/:userId',
        component: resolve => require(['@/components/user'],resolve),
        //component: user,
        meta: {
            title: "用户"
        },
        children :[

            {
                path: 'home',
                component: resolve => require(['@/components/user/common/home.vue'],resolve),
                //component: UserHome,
                meta: {
                    title: "用户主页"
                },
                children :[
                    {
                        path: 'blog',
                        component: resolve => require(['@/components/user/common/home.vue'],resolve),
                        //component: HomeBlog,
                        meta: {
                            title: "用户"
                        },
                    },
                    {
                        path: 'follow',
                        component: resolve => require(['@/components/user/common/home/follow.vue'],resolve),
                        //component: HomeFollow,
                        meta: {
                            title: "关注"
                        },
                    },
                    {
                        path: 'fans',
                        component: resolve => require(['@/components/user/common/home/fans.vue'],resolve),
                        //component: HomeFans,
                        meta: {
                            title: "粉丝"
                        },
                    },
                ],
            },
            {
                path: 'manage',
                component: resolve => require(['@/components/user/manage'],resolve),
                //component: UserManage,
                meta: {
                    title: "用户管理"
                },
            },
            {
                path: 'photo',
                component: resolve => require(['@/components/user/common/photos.vue'],resolve),
                //component: UserPhoto,
                meta: {
                    title: "用户相片"
                },
            },
        ]
    },
    {
        path: '/register',
        component: resolve => require(['@/components/user/auth/register.vue'],resolve),
        //component: register,
        meta: {
            title: "注册"
        }
    },

    {
        path: '/login',
        component: resolve => require(['@/components/user/auth/login.vue'],resolve),
        //component: login,
        meta: {
            title: "登录"
        }
    },
    {
        path: '/chat',
        component: resolve => require(['@/components/chat/Chat.vue'],resolve),
        //component: Chat,
        meta: {
            title: "私信"
        }
    },

]

export  default routers;