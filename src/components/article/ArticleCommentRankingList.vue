<template>
    <div id="article-comment-container">
        <div class="header-block">评论排行榜</div>
        <div v-for="(item,index) in commentRankings">
            <div class="item"
                 :class="{'item-active':mousOnItemIndex==index}"
                 @mouseover="mousOnItemIndex=index"
                 @mouseout="mousOnItemIndex=-1"
                 @click="itemClick(item.articleId)"
            ><span>［{{index+1}}］</span><span>{{item.title}}</span></div>
        </div>
    </div>
</template>

<script>

    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"


    export default {
        props:{

            userId: '',
            mousOnItemIndex: -1
        },
        data(){
            return{
                commentRankings: "",
            }
        },
        components:{

        },
        created(){
            this.init()
        },
        methods:{
            init(){
                ActicleAPI.GetArticleCommentRankingList({userId:this.userId}).then((result)=>{

                    this.commentRankings = result.data.data.commentRankings


                }).catch((error)=>{

                })

            },
            itemClick(articleId){
                this.$router.push('/article/'+this.userId+'/view/'+ articleId)
            }
        }


    }
</script>

<style scoped>

    #article-comment-container{
        width: 100%;
        min-height: 160px;
        min-height: 160px;

        border: 1px solid black;
        margin-bottom: 20px;
        cursor: default;
    }
    .header-block{
        font-size: 15px;
        font-weight: 600;

    }
    .item{
        color: dodgerblue;
    }
    .item-active{
        color: red;
        text-decoration:underline
    }
</style>