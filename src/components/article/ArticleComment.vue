<!--

 文章回复组件


-->
<template>

    <div id="article-comment-container">
        <div class="comment-header">
            <!--用户名-->
            <span class="user-name" @click="commentUserNameClick">{{comment.userName}}</span>

            <!--时间-->
            <span class="time">{{new Date(comment.createTime).format('yyyy-MM-dd hh:mm:ss')}}</span>

            <!--回复按钮-->
            <span class="btn" @click="replyClick"
                  :class="{'btn-active':activeIndex==1}"
                  @mouseout="activeIndex=-1"
                  @mouseover="activeIndex=1"

            >回复</span>
            <!--引用按钮-->
            <span class="btn" @click="quoteClick"
                  :class="{'btn-active':activeIndex==2}"
                  @mouseout="activeIndex=-1"
                  @mouseover="activeIndex=2"
            >引用</span>

            <span class="btn" @click="supportClick"
                  :class="{'btn-active':activeIndex==3}"
                  @mouseout="activeIndex=-1"
                  @mouseover="activeIndex=3">
                {{supportCountText}}({{comment.supportCount}})</span>
            <span class="btn" @click="oppositionClick"
                  :class="{'btn-active':activeIndex==4}"
                  @mouseout="activeIndex=-1"
                  @mouseover="activeIndex=4">
                {{oppositionCountText}}({{comment.oppositionCount}})</span>

        </div>
        <!--内容-->
        <div class="comment-content">
            <span>{{comment.content}}</span>
        </div>


    </div>
</template>

<script>

    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"


    export default {


        props:{

            comment:{

            }
        },
        data(){
            return{
                //

                testText1: "sadsadsadsa",
                activeIndex: "",
                supportCountText: "支持",
                oppositionCountText: "反对",


            }
        },

        created(){

            this.init()
        },

        methods:{

            init(){

               // this.$Log.info("adsfffffffffffffffffffffffffff")

                this.checkSupportStatus(this.comment.supportStatus)
                this.checkOppositionStatus(this.comment.oppositionStatus)



            },

            checkSupportStatus(supportStatus){

                if(supportStatus == 'unSupport'){
                    this.supportCountText = '取消支持'
                }
                else {
                    this.supportCountText = '支持'
                }
            },

            checkOppositionStatus(oppositionStatus){

                if(oppositionStatus == 'unOpposition'){
                    this.oppositionCountText = '反对'
                }
                else {
                    this.oppositionCountText = '取消反对'
                }
            },

            /*
            *　点击用户名
            */
            commentUserNameClick(){

            },

            /*
            * 点击回复
            */
            replyClick(){

                var text = '@'+this.comment.userName

                this.$emit('replyEvent','@'+this.comment.userName )


            },

            /*
            * 点击引用
            */
            quoteClick(){
                var text ='@'+this.comment.userName + '<p></p>' + this.comment.content +   '<p></p>' + '--------------------------------------' +   '<p><br></p>'
                this.testText1 = text
                this.$emit('replyEvent',text)

            },

            /*
            * 支持
            */
            supportClick(){

                let that = this
            // todo  支持
                ActicleAPI.SupportArticleComment({commentId:this.comment.commentId}).then((result)=>{
                    //if()
                    that.checkSupportStatus(result.data.data.supportStatus)
                    that.comment.supportCount = result.data.data.supportCount
                }).catch((error)=>{

                })

            },
            /*
            * 反对
            */
            oppositionClick(){
                let that = this
            //todo 反对　
                ActicleAPI.OppositionArticleComment({commentId:this.comment.commentId}).then((result)=>{
                    //if()

                    that.checkOppositionStatus(result.data.data.supportStatus)
                    that.comment.oppositionCount = result.data.data.oppositionCount

                }).catch((error)=>{

                })
            },

        }


    }

    //import "@/components/article/css/article-comment.css"
</script>

<style scoped src="@/components/article/css/article-comment.css"/>


