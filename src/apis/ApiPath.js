

let BASE_URL = ""

let apiPaths= {

    //用户模块
    user: {
        //获取用户信息
        getUserInfo: {
            path: BASE_URL + "/user/info",
            method: "get",
        },
    },

    //文章模块
    article:{
        //获取用户信息
        autoSave: {
            path: BASE_URL + "/article/draft",
            method: "post",
        },
        //获取文章列表
        getActicleList: {
            path: BASE_URL + "/article/list",
            method: "post",
        },
        publishArticle: {
            path: BASE_URL + "/article/publish",
            method: "post",
        },
        getActicleById:{
            path: BASE_URL + "/article/publish",
            method: "post",
        },
        //删除文章
        deleteArticleById:{
            path: BASE_URL + "/article",
            method: "delete",
        },
    }
}

export default apiPaths;