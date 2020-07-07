<template>
    <div id="article-list-container">
        <div style="font-size: 30px;font-weight: 600">文章列表［{{classify}}］</div>
        <div>
            <div v-for="(article,index) in articleList">
                {{index+1}}.{{article.title}} -- {{new Date(article.createTime).format('yyyy-MM-dd hh:mm:ss')}}
            </div>
        </div>
    </div>
</template>

<script>

    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"

    export default {
        data(){
            return{
                userId: "",
                articleList: [],
                curPage: "",
                pages: '',
                classify: '',
            }
        },
        components:{

        },
        created(){

            console.log("adfsssssssssssssssssssssss");
            this.init()
        },

        // beforeRouteEnter (to, from, next) {
        //
        //     console.log(to);
        //     console.log(to.params);
        //     // this.classify = to.query.classify
        //     // this.$Log.info('ActicleList.vue','userId = [],classify=[] ',[this.userId,this.classify])
        // },

        methods:{
            init(){
                this.userId = this.$route.params.userId
                this.classify = this.$route.querys.classify
                this.$Log.info('ActicleList.vue','userId = [],classify=[] ',[this.userId,this.classify])

                this.getActicleList(1)
            },
            /**
             *
             * @param _page 所在的页
             * @param _acticleTYpe [draftType｜publishedType] 草稿列表|已经发布
             */
            getActicleList(_userId,_page,_classify){

                let that =  this
                ActicleAPI.GetActicleList({userId:_userId,page: _page,classify: _classify}).then((result)=>{

                    result = result.data
                    this.$Log.info("ArticleEdit.vue","请求结果:[],数据:[]",[result.msg,JSON.stringify(result.data)])
                    that.articleList = result.data.articles;

                    that.curPage  =  result.data.curPage
                    that.pages  =  result.data.pages


                }).catch((error)=>{
                    this.$Log.error("ArticleEdit.vue","请求失败"+error)
                })

            },

        }


    }
</script>

<style scoped>

    #article-announcement-container{
        width: 100%;
        min-height: 160px;
        min-height: 160px;

        border-bottom: 1px solid black;
    }
</style>