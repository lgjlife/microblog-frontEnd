import security from '@/components/setting/Security.vue'

import setting from '@/components/setting/Setting.vue'
import SettingAccountBinding from '@/components/setting/SettingAccountBinding.vue'
import SettingPreference from '@/components/setting/SettingPreference.vue'
import SettingScreen from '@/components/setting/SettingScreen.vue'
import SettingUserHeaderImg from '@/components/setting/SettingUserHeaderImg.vue'
import SettingUserInfo from '@/components/setting/SettingUserInfo.vue'
import SettingUserMessage from '@/components/setting/SettingUserMessage.vue'
import SettingUserPrivater from '@/components/setting/SettingUserPrivater.vue'


let routers =  [
    {
        path: '/setting',
        component: resolve => require(['@/components/setting/Setting.vue'],resolve),
        //component: setting,
        meta: {
            title: "帐号设置"
        },
        children :[

            {
                path: 'bind',
                 component: resolve => require(['@/components/setting/SettingAccountBinding.vue'],resolve),
                //component: SettingAccountBinding,
            },
            {
                path: 'preference',
                component: resolve => require(['@/components/setting/SettingPreference.vue'],resolve),
                //component: SettingPreference,
            },
            {
                path: 'screen',
                component: resolve => require(['@/components/setting/SettingScreen.vue'],resolve),
                //component: SettingScreen,
            },
            {
                path: 'header/img',
                //component: resolve => require(['@/components/setting/SettingUserHeaderImg.vue'],resolve),
                component: SettingUserHeaderImg,
            },
            {
                path: 'user/info',
                name: "info",
                component: resolve => require(['@/components/setting/SettingUserInfo.vue'],resolve),
                // component: SettingUserInfo,
            },
            {
                path: 'user/message',
                component: resolve => require(['@/components/setting/SettingUserMessage.vue'],resolve),
                // component: SettingUserMessage,
            },
            {
                path: 'user/privater',
                component: resolve => require(['@/components/setting/SettingUserPrivater.vue'],resolve),
                //component: SettingUserPrivater,
            },
        ],
    },
    {
        path: '/security',
        component: resolve => require(['@/components/setting/Security.vue'],resolve),
        // component: security,
        meta: {
            title: "帐号与安全"
        }
    },
]
export default routers;