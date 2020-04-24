<template>
    <div id="article-display-container">

        <!--页头-->
        <div>
            <HeaderNav></HeaderNav>
        </div>


        <!--侧边栏-->
        <div class="left-container">

        </div>

        <!--主内容显示-->
        <div class="main-container">
            <!--标题-->
            <div class="article-title-block">
                {{articleInfo.title}}
            </div>

            <hr style="height: 2px">

            <!--内容显示-->
            <div class="article-content-block">
                {{articleInfo.content}}
            </div>
            <hr style="height: 2px">
            <div class="article-other-info">
                <span>评论({{articleInfo.commentCount}})</span>
                <span>点赞({{articleInfo.likeCount}})</span>
                <span>阅读量({{articleInfo.readCount}})</span>
            </div>
            <hr style="height: 2px">

            <!--评论编辑-->
            <div class="article-comment-edit-block">

                <Editor :catchData="catchData" :content="editContent" ></Editor>
                <div style="clear:both"></div>
            </div>


            <!--评论列表-->
            <div class="article-comment-list-block">
                <div v-for="(comment , index) in comments">
                    <ArticleComment :comment="comment" @replyEvent="childReplyEvent"/>
                </div>
            </div>
        </div>




    </div>
</template>

<script>

    import HeaderNav from '@/pages/layout/HeaderNav.vue'
    // import Log from "@/assets/js/util/log/Log";
    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"

    import Editor from "@/components/edit/Edit.vue";
    import ArticleComment from '@/components/article/ArticleComment.vue'

    export default {

        components:{

            HeaderNav,
            Editor,
            ArticleComment,
        },
        data(){
            return{

                //文章id
                articleId: "",
                //文章信息
                articleInfo: {},

                //评论编辑
                editContent:"",

                //评论
                comments: "",
            }
        },



        methods:{

            init(){

                let that= this
                this.articleId = this.$route.params.articleId;
                this.$Log.info("ArticleView.vue",'文章id=[]',[this.articleId])

                ActicleAPI.GetActicleById({articleId:this.articleId}).then((result)=>{
                    that.articleInfo = result.data.data;
                    that.$Log.info("ArticleView.vue",'文章id=[],内容=[]',[that.articleId,that.articleInfo])

                }).catch((error)=>{

                })

                ActicleAPI.GetActicleComments({articleId:this.articleId,page:1}).then((result)=>{


                    this.comments = result.data.data.comments;


                    this.$Log.debug("ArticleView.vue","请求获取评论信息结果:[]",[JSON.stringify(this.comments)])


                }).catch((error)=>{

                })



            },

            childReplyEvent(text){
                this.$Log.debug('ArticleView.vue','子组件点击回复返回:[]',[text])
                this.editContent = text
            },

            /*
           * 输入栏更新数据
           */
            catchData(html){
                this.curEditorArticleContent = html
                //检测是否定时保存
                //this.autoSave()

                this.$Log.info('ArticleView.vue','[]',[html])
            },


        },

        created(){
            this.init()
        },

    }
</script>

<style scoped src="./css/article-view.css"/>
<style scoped>

</style>