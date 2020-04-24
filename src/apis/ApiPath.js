

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
        //发布文章
        publishArticle: {
            path: BASE_URL + "/article/publish",
            method: "post",
        },
        //获取文章内容
        getActicleById:{
            path: BASE_URL + "/article/content",
            method: "get",
        },
        //删除文章
        deleteArticleById:{
            path: BASE_URL + "/article",
            method: "delete",
        },
        //获取文章评论列表
        getActicleComment: {
            path: BASE_URL + "/article/comment",
            method: "get",
        },
        //支持文章评论
        supportArticleComment: {
            path: BASE_URL + "/article/comment/support",
            method: "post",
        },
        //反对文章评论
        oppositionArticleComment: {
            path: BASE_URL + "/article/comment/opposition",
            method: "post",
        },

    }
}

export default apiPaths;