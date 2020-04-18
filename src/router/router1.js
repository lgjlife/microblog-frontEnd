import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '@/pages/layout/index.vue'
import register from '@/components/user/register.vue'
import login from '@/components/user/login.vue'
import Emotion from '@/components/common/Emotion.vue'

import Upload from '@/components/common/Upload.vue'
import HotTopic from '@/components/blog/HotTopic.vue'
import BlogDisplay from '@/components/blog/BlogDisplay.vue'
import Video from '@/components/video/Video.vue'
import Search from '@/components/search/Search.vue'
import Chat from '@/components/chat/Chat.vue'
import test from '@/components/test/test.vue'
import security from '@/components/setting/security.vue'

import user from '@/components/user'
import UserHome from '@/components/user/home'
import UserManage from '@/components/user/manage'
import UserPhoto from '@/components/user/photo'

import setting from '@/components/setting/Setting.vue'
import SettingAccountBinding from '@/components/setting/SettingAccountBinding.vue'
import SettingPreference from '@/components/setting/SettingPreference.vue'
import SettingScreen from '@/components/setting/SettingScreen.vue'
import SettingUserHeaderImg from '@/components/setting/SettingUserHeaderImg.vue'
import SettingUserInfo from '@/components/setting/SettingUserInfo.vue'
import SettingUserMessage from '@/components/setting/SettingUserMessage.vue'
import SettingUserPrivater from '@/components/setting/SettingUserPrivater.vue'

import message from '@/components/message'
import at from "@/components/message/at"
import like from "@/components/message/like"
import comment from "@/components/message/comment"

const routers = [
    {
        path: '/',
        component: index,
        meta: {
            title: "首页"
        }
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
        path: '/emotion',
        component: Emotion,
        meta: {
            title: "表情包"
        }
    },
    {
        path: '/upload',
        component: Upload,
        meta: {
            title: "上传"
        }
    },
    {
        path: '/topic',
        component: HotTopic,
        meta: {
            title: "热门话题"
        }
    },
    {
        path: '/display',
        component: BlogDisplay,
        meta: {
            title: "博客内容显示"
        }
    },
    {
        path: '/video',
        component: Video,
        meta: {
            title: "博客内容显示"
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            title: "搜索"
        }
    },
    {
        path: '/chat',
        component: Chat,
        meta: {
            title: "私信"
        }
    },
    {
        path: '/test',
        component: test,
        meta: {
            title: "test"
        }
    },
    {
        path: '/security',
        component: security,
        meta: {
            title: "帐号与安全"
        }
    },
    {
        path: '/message',
        component: message,
        meta: {
            title: "消息"
        },
        children: [
            {
                path: "at",
                component: at,
                meta: {
                    title: "@我的微博"
                },
            },
            {
                path: "comment",
                component: comment,
                meta: {
                    title: "我的评论"
                },
            },
            {
                path: "like",
                component: like,
                meta: {
                    title: "我的点赞"
                },
            },
        ]
    },

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
        path: '/setting',
        component: setting,
        meta: {
            title: "帐号设置"
        },
        children :[

            {
                path: 'bind',
                component: SettingAccountBinding,
            },
            {
                path: 'preference',
                component: SettingPreference,
            },
            {
                path: 'screen',
                component: SettingScreen,
            },
            {
                path: 'header/img',
                component: SettingUserHeaderImg,
            },
            {
                path: 'user/info',
                name: "info",
                component: SettingUserInfo,
            },
            {
                path: 'user/message',
                component: SettingUserMessage,
            },
            {
                path: 'user/privater',
                component: SettingUserPrivater,
            },
        ],
    },


]



const router1 = new VueRouter({
    mode: 'history',
    routes: routers
})

/*
路由前置过滤器
 */
router1.beforeEach((to, from, next)=>{

    console.log("from path = " + from.path);
    console.log("即将访问" + to.path);



    if(to.meta.title){
        document.title = to.meta.title;
    }

    //进入首页
    if(to.path =="/"){

    }
    next();
})

export default router1;