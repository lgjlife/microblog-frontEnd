import register from '@/components/user/auth/Register.vue'
import login from '@/components/user/auth/Login.vue'

import user from '@/components/user'

import UserHome from '@/components/user/common/Home.vue'
import HomeBlog from '@/components/user/common/home/Blog.vue'
import HomeFollow from '@/components/user/common/home/Follow.vue'
import HomeFans from '@/components/user/common/home/Fans.vue'

import UserManage from '@/components/user/manage'
import UserPhoto from '@/components/user/common/Photos.vue'

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
                component: resolve => require(['@/components/user/common/Home.vue'],resolve),
                //component: UserHome,
                meta: {
                    title: "用户主页"
                },
                children :[
                    {
                        path: 'blog',
                        component: resolve => require(['@/components/user/common/Home.vue'],resolve),
                        //component: HomeBlog,
                        meta: {
                            title: "用户"
                        },
                    },
                    {
                        path: 'follow',
                        component: resolve => require(['@/components/user/common/home/Follow.vue'],resolve),
                        //component: HomeFollow,
                        meta: {
                            title: "关注"
                        },
                    },
                    {
                        path: 'Fans.vue',
                        component: resolve => require(['@/components/user/common/home/Fans.vue'],resolve),
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
                component: resolve => require(['@/components/user/common/Photos.vue'],resolve),
                //component: UserPhoto,
                meta: {
                    title: "用户相片"
                },
            },
        ]
    },
    {
        path: '/register',
        component: resolve => require(['@/components/user/auth/Register.vue'],resolve),
        //component: register,
        meta: {
            title: "注册"
        }
    },

    {
        path: '/login',
        component: resolve => require(['@/components/user/auth/Login.vue'],resolve),
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