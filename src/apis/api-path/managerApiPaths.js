let BASE_URL = ""
//后台管理模块
let MANAGER_APIPATH = {

    //获取用户信息
    login: {
        path: BASE_URL + "/api/auth/oauth/token",
        method: "postparams",
    },
}

export default {
    MANAGER_APIPATH
}