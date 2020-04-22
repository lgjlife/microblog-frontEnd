import req from '@/apis/axios/http.js'


/**
 * 获取文章列表
 * @param params:{acticleTYpe:[draftType｜publishedType]}
 * 返回：文章的基础信息: acticleId,title ,createTime,分页信息
 */
export const GetActicleList =params=>req('get','/acticle/list',params)
/*
 *  通过文章id获取文章内容
 *  params:[acticleId]
 */
export const GetActicleById =params=>req('get','/acticle/',params)

export default {
    GetActicleList,
    GetActicleById,
}