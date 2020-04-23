import ApiPath from "@/apis/ApiPath.js"

const Mock = require("mockjs")

import Log from "@/assets/js/util/log/Log";

/*
* 通过文章id获取文章
 */
Mock.mock(RegExp(ApiPath.article.getActicleById.path+ ".*"), ApiPath.article.getActicleById.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            articleId: 1,
            title: "cdcdasfdfd",
            createTime: 1587577485660,
            state: "已发布",
            content: "afdadfafdasfdfdfjdjafjkhdjfjkhafjksdajkfdssjkhfjkh",
            commentCount: 123,
            readCount: 345,
        },
        "msg": "文章信息获取成功"
    })
})


/**
 * 删除文章
 */
Mock.mock(RegExp(ApiPath.article.deleteArticleById.path+ ".*"), ApiPath.article.deleteArticleById.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {},
        "msg": "删除文章成功"
    })
})

/**
 *发布文章
 */
Mock.mock(RegExp(ApiPath.article.publishArticle.path+ ".*"), ApiPath.article.publishArticle.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {},
        "msg": "发布文章成功"
    })
})


/**
 * 获取文章列表
 */
Mock.mock(ApiPath.article.getActicleList.path, ApiPath.article.getActicleList.method, (options)=>{
    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {

            curPage: 1,
            pages: 12,
            articles:
                [
                    {
                        articleId: 1,
                        title: "'天使码'正式发布，770万医护凭天使码免费游景区",
                        createTime: 1587577485660,
                        state: "已发布",
                        commentCount: 123,
                        readCount: 345,
                    },

                    {
                        articleId: 2,
                        title: "突发事件可否不再层层请示等待上级决策？民革中央提案呼吁修法",
                        createTime: 1587576485660,
                        state: "已发布",
                        commentCount: 123,
                        readCount: 345,
                    }
            ]
        ,
        "msg": "获取文章列表成功"
        }
    })
}),
/*
*  文章自动保存
 */
Mock.mock(ApiPath.article.autoSave.path, ApiPath.article.autoSave.method, {

    "code": 0,
    "data": {

    },
    "msg": "文章草稿保存成功"
})