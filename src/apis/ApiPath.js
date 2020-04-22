

let BASE_URL = "/api"

let apiPaths= {

    //用户模块
    user: {
        //获取用户信息
        getUserInfo: {
            path: BASE_URL + "/user/info",
            method: "get",
        },
    }
}

export default apiPaths;