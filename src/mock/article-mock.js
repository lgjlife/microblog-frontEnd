import ApiPath from "@/apis/ApiPath.js"

const Mock = require("mockjs")

import Log from "@/assets/js/util/log/Log";


/**
 * 获取文章评论列表
 */
Mock.mock(RegExp(ApiPath.article.getActicleComment.path+ ".*"), ApiPath.article.getActicleComment.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            articleId: 1,
            page: 1,
            pages: 12,
            comments:[
                {
                    commentId: 1,
                    articleId: 1,
                    content: "上飞机看哈大法师空间适当放宽交换机客户大法官健康和　房贷款将会",
                    createTime: 1587577485660,
                    userId: 102,
                    userName: "高峰会",
                    supportCount: 123,
                    oppositionCount: 345,
                    supportStatus:'support',
                    oppositionStatus: "opposition",

                },

                {
                    commentId: 1,
                    articleId: 1,
                    content: "ｊｋｈａｓｄｆｊｋｈｄｆｖ阿三加快了；　史蒂夫个接口了高飞的看见了和　　个地方看了觉得非　健康和了",
                    createTime: 1587527485660,
                    userId: 102,
                    userName: "史蒂夫",
                    supportCount: 123,
                    oppositionCount: 345,
                    supportStatus:'unSupport',
                    oppositionStatus: "unOpposition",

                },

            ],

        },
        "msg": "文章评论获取成功"
    })
})

/*
* 通过文章id获取文章
 */
Mock.mock(RegExp(ApiPath.article.getActicleById.path+ ".*"), ApiPath.article.getActicleById.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            articleId: 1,
            title: "VUE将公用组件写成全局组件并在各组件中引用详解",
            createTime: 1587577485660,
            state: "已发布",
            content: "然后在src/components目录下新建一个存放全局的文件夹：这里为loading，然后新建一个loading.vue和index.js。（src下应该也是可以的，在main.js下引用时候写对相对路径就可以了，今天由于时间问题就不做验证了，有时间了会写一个来这里给个准确答复）\n" +
                "loading.vue和一般组件里写的是一样的，这里代码如下：\n" +
                "\n" +
                "作者：丶灰太狼他叔\n" +
                "链接：https://www.jianshu.com/p/445def0cf676\n" +
                "来源：简书\n" +
                "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。",
            commentCount: 123,
            readCount: 345,
            likeCount: 751,
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

/**
 * 支持文章评论
 */
Mock.mock(RegExp(ApiPath.article.supportArticleComment.path+ ".*"), ApiPath.article.supportArticleComment.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            supportStatus: 'support',//１ 成功　，０　失败
            supportCount: 145,
        },
        "msg": "删除文章成功"
    })
})

/**
 * 反对文章评论
 */
Mock.mock(RegExp(ApiPath.article.oppositionArticleComment.path+ ".*"), ApiPath.article.oppositionArticleComment.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            oppositionStatue: 'unOpposition',//１ 成功　，０　失败
            oppositionCount: 451,

        },
        "msg": "删除文章成功"
    })
})