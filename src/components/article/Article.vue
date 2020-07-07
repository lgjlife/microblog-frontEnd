<template>
    <div class="article-container">

        <!--页头-->
        <div>
            <HeaderNav></HeaderNav>
        </div>

        <div class="article-title">
            <el-button type="primary">微博首页</el-button>
            <el-button type="primary">文章列表</el-button>
        </div>
        <div class="left-block">
            <!--公告-->
            <div>
                <ArticleAnnouncement :userId="userId" />
            </div>

            <!--推荐阅读-->
            <div><ArticleRecommend :userId="userId"/></div>

            <!--文章分类-->
            <div><ArticleClassify :userId="userId"/></div>

            <!--评论排行榜-->
            <div><ArticleCommentRankingList :userId="userId"/></div>

            <!--推荐排行榜-->
            <!--<div><ArticleRecommentRankingList :userId="userId"/></div>-->

        </div>
        <div class="right-blog">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '@/pages/layout/HeaderNav.vue'
    import ArticleRecommend　from '@/components/article/ArticleRecommend.vue'
    import ArticleClassify　from '@/components/article/ArticleClassify.vue'
    import ArticleCommentRankingList　from '@/components/article/ArticleCommentRankingList.vue'
    import ArticleAnnouncement　from '@/components/article/ArticleAnnouncement.vue'
    import ArticleRecommentRankingList　from '@/components/article/ArticleRecommentRankingList.vue'


    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"


    export default {
        data(){
            return{

                userId: '',
                articleId: '',
            }
        },
        components:{
            HeaderNav,
            ArticleAnnouncement,
            ArticleClassify,
            ArticleCommentRankingList,
            ArticleRecommend,
            ArticleRecommentRankingList,


        },
        created(){
            this.init()
        },
        methods:{

            init(){
                this.userId = this.$route.params.userId
                this.articleId = this.$route.params.articleId
                this.$Log.info("Article.vue",'userId=[],articleId=[]',[this.userId,this.articleId])
            }


        }


    }

</script>

<style scoped src="./css/article.css">

</style>