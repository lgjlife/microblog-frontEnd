import req from '@/apis/axios/http.js'

import ApiPath from "@/apis/ApiPath.js"

/**
 * 获取文章列表
 * @param params:{acticleTYpe:[draftType｜publishedType]}
 * 返回：文章的基础信息: acticleId,title ,createTime,分页信息
 */
export const GetActicleList =params=>req(ApiPath.article.getActicleList.method,ApiPath.article.getActicleList.path,params)
/*
 *  通过文章id获取文章内容
 *  params:[acticleId]
 */
export const GetActicleById =params=>req(ApiPath.article.getActicleById.method,ApiPath.article.getActicleById.path,params)

/**
 * 发布文章
 * @param params
 * @constructor
 */
export const PublishArticle =params=>req(ApiPath.article.publishArticle.method,ApiPath.article.publishArticle.path,params)

/**
 * 保存草稿
 * @param params　{title:"",content: ""}
 * @constructor
 */
export const AutoSaveActicle=params=>req(ApiPath.article.autoSave.method,ApiPath.article.autoSave.path,params)

/**
 * 根据文章id删除位文章
 * @param params
 */
export const DeleteArticleById=params=>req(ApiPath.article.deleteArticleById.method,ApiPath.article.deleteArticleById.path,params)
export default {
    GetActicleList,
    GetActicleById,
    AutoSaveActicle,
    PublishArticle,
    DeleteArticleById
}