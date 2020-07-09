import req from '@/apis/axios/http.js'

import ApiPath from "@/apis/api-path/apiPath.js"

/**
 * 后台管理系统登录
 * @param {*} params 
 */
export const Login  =params=>req(ApiPath.MANAGER.MANAGER_APIPATH.login.method,ApiPath.MANAGER.MANAGER_APIPATH.login.path,params)

export const RefreshToken  =params=>req(ApiPath.MANAGER.MANAGER_APIPATH.refreshToken.method,ApiPath.MANAGER.MANAGER_APIPATH.refreshToken.path,params)


export default {
    Login,
    RefreshToken,
}