<template>
    <div id="article-recommentr-ranking-container">
        <div style="font-size: 30px;font-weight: 600">推荐排行榜</div>
        <div v-for="(recommend,index) in recommends">
            <div class="item"
                 :class="{'item-active':mousOnItemIndex==index}"
                 @mouseover="mousOnItemIndex=index"
                 @mouseout="mousOnItemIndex=-1"
                 @click="itemClick(recommend.articleId)"
            ><span>［{{index}}］</span><span>{{recommend.title}}</span></div>
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
                content: "",
            }
        },
        components:{

        },
        created(){
            this.init()
        },
        methods:{
            init(){
                ActicleAPI.GetArticleRecommentRankingList({userId:this.userId}).then((result)=>{

                    this.content = result.data.data.announcement


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

    #article-recommentr-ranking-container{
        width: 100%;
        min-height: 160px;
        min-height: 160px;

        border: 1px solid black;
        margin-bottom: 20px;
    }
</style>