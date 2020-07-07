<template>
    <div id="article-recommend-container">
        <div class="header-block">推荐阅读</div>
        <div v-for="(recommend,index) in recommends">
            <div class="item"
                :class="{'item-active':mousOnItemIndex==index}"
                 @mouseover="mousOnItemIndex=index"
                 @mouseout="mousOnItemIndex=-1"
                 @click="itemClick(recommend.articleId)"
            ><span>［{{index+1}}］</span><span>{{recommend.title}}</span></div>
        </div>
    </div>
</template>

<script>

    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"


    export default {
        props:{

            userId: '',


        },
        data(){
            return{
                recommends: "",
                mousOnItemIndex: -1
            }
        },
        components:{

        },
        created(){
            this.init()
        },
        methods:{
            init(){
                ActicleAPI.GetArticleRecommend({userId:this.userId}).then((result)=>{

                    this.recommends = result.data.data.recommends


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

    #article-recommend-container{
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