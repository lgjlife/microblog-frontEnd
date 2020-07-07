import ApiPath from "@/apis/api-path/apiPath.js"

const Mock = require("mockjs")

import Log from "@/assets/js/util/log/Log";


/**
 * 获取文章评论列表
 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleComment.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleComment.method,(options)=> {

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
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleById.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleById.method,(options)=> {

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
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.deleteArticleById.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.deleteArticleById.method,(options)=> {

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
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.publishArticle.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.publishArticle.method,(options)=> {

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
Mock.mock(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleList.path, ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleList.method, (options)=>{
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
Mock.mock(ApiPath.ARTICLE.ARTICLE_APIPATH.autoSave.path, ApiPath.ARTICLE.ARTICLE_APIPATH.autoSave.method, {

    "code": 0,
    "data": {

    },
    "msg": "文章草稿保存成功"
})

/**
 * 支持文章评论
 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.supportArticleComment.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.supportArticleComment.method,(options)=> {

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
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.oppositionArticleComment.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.oppositionArticleComment.method,(options)=> {

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
/**
 * 获取公告
 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleAnnouncement.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleAnnouncement.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            userId: '123',
            announcement: '赋能开发者！葡萄城成立于 1980 年，是全球领先的集开发工具、商业智能解决方案、管理系统设计工具于一身的软件和服务提供商，为超过 75% 的全球财富 500 强企业提供服务。',
        },
        "msg": "获取公告成功"
    })
})
/**
 * 获取文章推荐阅读

 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommend.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommend.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            userId: '45',
            recommends:  [
                {
                    articleId: 14,
                    title: "撒发放的艰苦奋斗数据库阿斯顿覆盖",
                },
                {
                    articleId: 15,
                    title: "大法官三个将是",
                },
                {
                    articleId: 16,
                    title: "胡椒粉和　是开发商",
                },
                {
                    articleId: 17,
                    title: "史蒂夫个地方韩四靠老公和非",
                },
            ]


        },
        "msg": "获取文章推荐阅读成功"
    })
})
/**
 * 获取文章分类
 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleClassify.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleClassify.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            userId: 12,
            classifys: [

                {
                    name: '报表知识',
                    count: 142,
                },
                {
                    name: '控件知识',
                    count: 125,
                },
                {
                    name: '经验分享',
                    count: 127,
                },
                {
                    name: '报表知识',
                    count: 126,
                },
                {
                    name: '工具使用',
                    count: 412,
                },
                {
                    name: '技术解密',
                    count: 127,
                },
                {
                    name: '程序人生',
                    count: 162,
                },
                {
                    name: '表格控件',
                    count: 172,
                },
            ]
        },
        "msg": "获取文章分类成功"
    })
})
/**
 * 获取文章评论排行榜

 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleCommentRankingList.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleCommentRankingList.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            userId: '45',
            commentRankings:  [
                {
                    articleId: 14,
                    title: "撒发放的艰苦奋斗数据库阿斯顿覆盖",
                },
                {
                    articleId: 14,
                    title: "大法官三个将是",
                },
                {
                    articleId: 14,
                    title: "胡椒粉和　是开发商",
                },
                {
                    articleId: 14,
                    title: "史蒂夫个地方韩四靠老公和非",
                },
            ]
        },
        "msg": "获取文章评论排行榜成功"
    })
})
/**
 * 获取文章推荐排行
 */
Mock.mock(RegExp(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommentRankingList.path+ ".*"), ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommentRankingList.method,(options)=> {

    Log.info("article-mock.js","请求数据为:[]---[]",[options.url,options.body])
    return Mock.mock({
        "code": 0,
        "data": {
            userId: '45',
            recommendRanking:  [
                {
                    articleId: 14,
                    title: "撒发放的艰苦奋斗数据库阿斯顿覆盖",
                },
                {
                    articleId: 14,
                    title: "大法官三个将是",
                },
                {
                    articleId: 14,
                    title: "胡椒粉和　是开发商",
                },
                {
                    articleId: 14,
                    title: "史蒂夫个地方韩四靠老公和非",
                },
            ]
        },
        "msg": "获取文章推荐排行成功"
    })
})
