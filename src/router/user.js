import register from '@/components/user/register.vue'
import login from '@/components/user/login.vue'

import user from '@/components/user'

import UserHome from '@/components/user/home'
import HomeBlog from '@/components/user/home/blog'
import HomeFollow from '@/components/user/home/follow'
import HomeFans from '@/components/user/home/fans'

import UserManage from '@/components/user/manage'
import UserPhoto from '@/components/user/photo'

import Chat from '@/components/chat/Chat.vue'

let routers =[
    {
        path: '/user',
        component: user,
        meta: {
            title: "用户"
        },
        children :[

            {
                path: 'home',
                component: UserHome,
                meta: {
                    title: "用户主页"
                },
                children :[
                    {
                        path: 'blog',
                        component: HomeBlog,
                        meta: {
                            title: "用户"
                        },
                    },
                    {
                        path: 'follow',
                        component: HomeFollow,
                        meta: {
                            title: "关注"
                        },
                    },
                    {
                        path: 'fans',
                        component: HomeFans,
                        meta: {
                            title: "粉丝"
                        },
                    },
                ],
            },
            {
                path: 'manage',
                component: UserManage,
                meta: {
                    title: "用户管理"
                },
            },
            {
                path: 'photo',
                component: UserPhoto,
                meta: {
                    title: "用户相片"
                },
            },
        ]
    },


    {
        path: '/register',
        component: register,
        meta: {
            title: "注册"
        }
    },

    {
        path: '/login',
        component: login,
        meta: {
            title: "登录"
        }
    },
    {
        path: '/chat',
        component: Chat,
        meta: {
            title: "私信"
        }
    },

]

export  default routers;