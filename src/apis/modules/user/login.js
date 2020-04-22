import req from '@/apis/axios/http.js'


/**
 * 登录提交
 * @param params
 */
export const UserLogin =params=>req('get','/user/login',params)