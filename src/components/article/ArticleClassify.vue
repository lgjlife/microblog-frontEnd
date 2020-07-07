<template>
    <div id="article-classify-container">
        <div class="header-block">文章分类</div>
        <div v-for="(item,index) in classifys">
            <div class="item"
                 :class="{'item-active':mousOnItemIndex==index}"
                 @mouseover="mousOnItemIndex=index"
                 @mouseout="mousOnItemIndex=-1"
                 @click="itemClick(item.name)"
            ><span>［{{index+1}}］</span><span>{{item.name}}-({{item.count}})</span></div>
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
            itemClick(classifyName){

                console.log("classifyName = " + classifyName);
                this.$router.push({path:'/article/'+this.userId+'/list',query: {classify:classifyName}})
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