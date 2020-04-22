
import req from '@/apis/axios/http.js'

import ApiPath from "@/apis/ApiPath.js"

/**
 * 登录提交
 * @param params
 */
export const getUserInfo =params=>req(ApiPath.user.getUserInfo.method,ApiPath.user.getUserInfo.path,params)

export default {
    getUserInfo,
}