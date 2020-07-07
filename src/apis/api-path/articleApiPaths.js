let BASE_URL = ""



    //文章模块
let ARTICLE_APIPATH = {
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
    　　getActicleListByClassify: {
            path: BASE_URL + "/article/list/",
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

        //获取公告
        getArticleAnnouncement: {
            path: BASE_URL + "/article/announcement",
            method: "get",
        },

        //获取文章推荐阅读
        getArticleRecommend: {
            path: BASE_URL + "/article/recommend",
            method: "get",
        },

        //获取文章分类
        getArticleClassify: {
            path: BASE_URL + "/article/classify",
            method: "get",
        },

        //获取文章评论排行榜
        getArticleCommentRankingList: {
            path: BASE_URL + "/article/CommentRankingList",
            method: "get",
        },

        //获取文章评论列表
        getArticleRecommentRankingList: {
            path: BASE_URL + "/article/RecommentRankingList",
            method: "get",
        },


    }


export default {
    ARTICLE_APIPATH,
}