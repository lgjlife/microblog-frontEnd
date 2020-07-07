<template>
    <div id="article-classify-view-container">

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
                classifys: "",
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
                ActicleAPI.GetArticleClassify({userId:this.userId}).then((result)=>{

                    this.classifys = result.data.data.classifys


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

    #article-classify-container{
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