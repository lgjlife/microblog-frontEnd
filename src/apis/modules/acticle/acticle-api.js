import req from '@/apis/axios/http.js'

import ApiPath from "@/apis/api-path/apiPath.js"

/**
 * 获取文章列表
 * @param params　{articleId,page}
 * @constructor　
 */
export const GetActicleComments  =params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleComment.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleComment.path,params)

/**
 * 获取文章列表
 * @param params:{acticleTYpe:[draftType｜publishedType]}
 * 返回：文章的基础信息: acticleId,title ,createTime,分页信息
 */
export const GetActicleList =params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleList.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleList.path,params)

export const GetActicleListByClassify =params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleListByClassify.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleListByClassify.path,params)

/*
 *  通过文章id获取文章内容
 *  params:[acticleId]
 */
export const  GetActicleById =params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleById.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getActicleById.path,params)

/**
 * 发布文章
 * @param params
 * @constructor
 */
export const PublishArticle =params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.publishArticle.method,ApiPath.ARTICLE.ARTICLE_APIPATH.publishArticle.path,params)

/**
 * 保存草稿
 * @param params　{title:"",content: ""}
 * @constructor
 */
export const AutoSaveActicle=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.autoSave.method,ApiPath.ARTICLE.ARTICLE_APIPATH.autoSave.path,params)

/**
 * 根据文章id删除位文章
 * @param params
 */
export const DeleteArticleById=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.deleteArticleById.method,ApiPath.ARTICLE.ARTICLE_APIPATH.deleteArticleById.path,params)

/**
 * 支持文章评论
 * @param params
 * @constructor
 */
export const SupportArticleComment=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.supportArticleComment.method,ApiPath.ARTICLE.ARTICLE_APIPATH.supportArticleComment.path,params)
/**
 * 反对文章的评论
 * @param params
 * @constructor
 */
export const OppositionArticleComment=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.oppositionArticleComment.method,ApiPath.ARTICLE.ARTICLE_APIPATH.oppositionArticleComment.path,params)


/**
 * 获取文章公告
 * @param params
 * @constructor
 */
export const GetArticleAnnouncement=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleAnnouncement.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleAnnouncement.path,params)
/**
 * 获取文章推荐阅读
 * @param params
 * @constructor
 */
export const GetArticleRecommend=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommend.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommend.path,params)
/**
 *　获取文章分类
 * @param params
 * @constructor
 */
export const GetArticleClassify=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleClassify.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleClassify.path,params)
/**
 *　获取文章评论排行榜
 * @param params
 * @constructor
 */
export const GetArticleCommentRankingList=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleCommentRankingList.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleCommentRankingList.path,params)
/**
 *　获取文章推荐排行榜
 * @param params
 * @constructor
 */
export const GetArticleRecommentRankingList=params=>req(ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommentRankingList.method,ApiPath.ARTICLE.ARTICLE_APIPATH.getArticleRecommentRankingList.path,params)






export default {
    GetActicleList,
    GetActicleById,
    AutoSaveActicle,
    PublishArticle,
    DeleteArticleById,
    GetActicleComments,
    SupportArticleComment,
    OppositionArticleComment,

    //获取文章公告 {userId}
    GetArticleAnnouncement,

    //获取文章推荐阅读 {userId}
    GetArticleRecommend,

    //获取文章分类 {userId}
    GetArticleClassify,

    //获取文章评论排行榜 {userId}
    GetArticleCommentRankingList,

    //获取文章推荐排行榜 {userId}
    GetArticleRecommentRankingList,

}