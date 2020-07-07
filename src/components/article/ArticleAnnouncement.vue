<template>
    <div id="article-announcement-container">
        <div class="header-block">公告</div>
        <div>{{content}}</div>
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
                ActicleAPI.GetArticleAnnouncement({userId:this.userId}).then((result)=>{

                    this.content = result.data.data.announcement


                }).catch((error)=>{

                })

            }

        }


    }
</script>

<style scoped>

    #article-announcement-container{
        width: 100%;
        min-height: 160px;
        min-height: 160px;

        border: 1px solid black;
        margin-bottom: 20px;
    }
    .header-block{
        font-size: 15px;
        font-weight: 600;

    }
</style>