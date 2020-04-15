import security from '@/components/setting/security.vue'

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
    {
        path: '/security',
        component: security,
        meta: {
            title: "帐号与安全"
        }
    },
]
export default routers;