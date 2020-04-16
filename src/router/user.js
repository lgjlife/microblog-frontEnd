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