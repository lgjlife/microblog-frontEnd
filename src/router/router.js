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

import setting from '@/components/setting/Setting.vue'
import SettingAccountBinding from '@/components/setting/SettingAccountBinding.vue'
import SettingPreference from '@/components/setting/SettingPreference.vue'
import SettingScreen from '@/components/setting/SettingScreen.vue'
import SettingUserHeaderImg from '@/components/setting/SettingUserHeaderImg.vue'
import SettingUserInfo from '@/components/setting/SettingUserInfo.vue'
import SettingUserMessage from '@/components/setting/SettingUserMessage.vue'
import SettingUserPrivater from '@/components/setting/SettingUserPrivater.vue'


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
        path: '/security/:index',
        component: security,
        meta: {
            title: "帐号与安全"
        }
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



export default routers;
