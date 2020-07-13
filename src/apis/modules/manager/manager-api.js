import req from '@/apis/axios/http.js'

import ApiPath from "@/apis/api-path/apiPath.js"

let request ={

    GetServiceList: {
        path: "/api/gateway/eureka/list",
        method: "get",
    }
}
/**
 * 后台管理系统登录
 * @param {*} params 
 */
export const Login  =params=>{
    console.log("Login.........")
    return req(ApiPath.MANAGER.MANAGER_APIPATH.login.method,ApiPath.MANAGER.MANAGER_APIPATH.login.path,params)
}
/**
 * 刷新token
 */
export const RefreshToken  =params=>req(ApiPath.MANAGER.MANAGER_APIPATH.refreshToken.method,ApiPath.MANAGER.MANAGER_APIPATH.refreshToken.path,params)

/**
 * 获取密码加密的公钥
 */
export const GetPublicKey  =params=>req(ApiPath.MANAGER.MANAGER_APIPATH.getPublickey.method,ApiPath.MANAGER.MANAGER_APIPATH.getPublickey.path,params)

/**
 * 获取
 */
export const GetServiceList  =params=>req(
      request.GetServiceList.method,request.GetServiceList.path,params
)


export default {
    Login,
    RefreshToken,
    GetPublicKey,
    GetServiceList
}