<template>
    <div style="margin: 0px ;width: 100% ;padding: 0px; margin-left: 0px">

        <titleNav title="收到的点赞" ></titleNav>

        <div v-for="(item,index) in likeList"
            :index="index"
             class="like-blog-li"
        >
            <div class="up">
                <div class="left">
                    <img class="header-img" :src="item.likerHeaderImg"/>
                </div>
                <div class="right">
                    <router-link style="text-decoration:none; color: #FF8C00"
                                 to="{path:'info',query:{userId:item.likerUserId}">{{item.likerUserName}}</router-link>
                    <div style="font-size: 13px;font-weight: 100;color: gray">{{caculTime(item.likeTime)}} </div>
                    <div style="font-size: 13px">赞了您的评论</div>
                    <div class="content">
                        <router-link style="text-decoration:none; color: #FF8C00" to="{path:'info',query:{userId:item.userId}">@{{item.userName}}</router-link>:回复
                        <router-link to="{path:'info',query:{userId:item.userId}" tag="span" style="cursor: default">@{{item.userName}}:{{item.content}}</router-link>
                        <span></span>
                    </div>

                </div>


            </div>
            <div style="clear:both;"></div>
            <div class="footer">
                <span class="reply-btn" :class="{'reply-btn-active':replyBtnMouseOn}"
                      @mouseover="replyBtnMouseOn = true"
                      @mouseout="replyBtnMouseOn = false"
                      @click="replyBlockOpen(item)"
                >回复</span>
            </div>

            <!--评论扩展部分-->
            <div class="extend" v-if="item.replyBlockVisable == true">
                <div class="comment-input">
                    <el-input v-model="item.comment"
                              type="textarea"
                              placeholder="请输入内容"
                              maxlength="120"
                              show-word-limit
                    ></el-input>
                </div>
                <div>
                    <!--表情-->
                    <div class="grid-content bg-purple">
                        <svg class="iconfont" aria-hidden="true" style="width: 30px;height: 30px;margin-top: 3px;float: left">
                            <use xlink:href="#element-icon-alibiaoqing" @click="item.emotionDisplay = !item.emotionDisplay"></use>
                        </svg>
                    </div>
                    <Emotion v-if="item.emotionDisplay" ref="emotionChild" style="z-index: 9999;position: absolute;margin-top: 40px"
                             v-bind:index="index"
                             @emotionChildSelect="emotionChildSelect"></Emotion>
                    <el-button type="primary" class="comment-bth-submit" @click="commentSubmit(item)">评论</el-button>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import HeaderNav from '@/pages/layout/Header-nav.vue'
    import Emotion from '@/components/common/Emotion.vue'
    import {TIME_CHANGE} from "@/util/time/time.js"

    import titleNav from "./title.vue"

    export default {
        data(){
            return{

                searchData: "",
                replyBtnMouseOn: false,
                replyBlockVisable: true,

                likeList:[
                    {
                        emotionDisplay: false,
                        firstOpenFlag: true,
                        replyBlockVisable: false,


                        likerUserId:"3",
                        likerUserName: "明日之后",
                        likerHeaderImg: "/img/test/1.jpg",
                        //2020-04-13 20:29:18 1586780958000
                        //2020-04-14 20:28:18 1586867298000
                        //2020-04-14 10:28:18 1586831298000
                        likeTime: 1586867298000,

                        userName: "皮皮虾",
                        userId:"1",
                        replyUserName: "洗噢小",
                        replyUserId: "1",
                        content: "台湾政府的公关费有个专案是1450万新台币，后来被人挖出是养网军，所以1450就指代民进党的网军",
                        comment: "",

                    },
                    {
                        emotionDisplay: false,
                        firstOpenFlag: true,
                        replyBlockVisable: false,
                        likerUserId:"3",
                        likerUserName: "明日之后1",
                        likerHeaderImg: "/img/test/1.jpg",
                        likeTime: 1586780958000,

                        userName: "皮皮虾",
                        userId:"1",
                        replyUserName: "洗噢小",
                        replyUserId: "1",
                        content: "台湾政府的公关费有个专案是1450万新台币，后来被人挖出是养网军，所以1450就指代民进党的网军",
                        comment: "",

                    },


                ],
            }
        },

        created(){

            // console.log("time str = " + TIME_CHANGE(1586831298000));
        },

        mounted(){

            console.log("................");
            console.log("time str = " + TIME_CHANGE(1586780958000));
        },

        methods:{

            caculTime(time){
                return TIME_CHANGE(time)
            },

            /**
             表情包子组件选择表情
             */
            emotionChildSelect(emotion,index){
                console.log("子组件选择表情：" + emotion);

                console.log("index = " + index);
                this.likeList[index].emotionDisplay = false;
                this.likeList[index].comment += emotion
            },
            /*
            点击回复，打开输入栏
            */
            replyBlockOpen(item){
                item.replyBlockVisable = !item.replyBlockVisable

                if(item.firstOpenFlag){
                    item.firstOpenFlag = false;

                    item.comment += "回复"　+ "@" + item.likerUserName + ":"
                }
            } ,
            /*
            提交评论
            */
            commentSubmit(item){

                var str = "送到附近客户@等待dajf"

                var text = "@" + item.likerUserName
                var result =  this.replace(item.comment,text,this.getUserLink(text),true);

                console.log("str = " + str);
                console.log("result = " + result);

                this.result = result
            },

            /*
                替换字符
                string：字符串表达式包含要替代的子字符串。
                reallyDo：被搜索的子字符串。
                replaceWith：用于替换的子字符串。
            */
            replace(str,reallyDo, replaceWith, ignoreCase) {
                if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
                    return str.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
                } else {
                    return str.replace(reallyDo, replaceWith);
                }
            },
            /*
            获取加了链接的用户名
             */
            getUserLink(userName){

                return '<router-link style="text-decoration:none; color: #FF8C00"\n' +
                'to="{path:\'info\',query:{userId:item.likerUserId}">' + userName + '</router-link>'
            },

            searchBlog(searchData){

                console.log("搜索：" + searchData);
            }

        },



        components:{
            Emotion,
            titleNav,
        }


    }

</script>

<style scoped src="./assets/like.css"/>

<style scoped>

    body{
        width: 1200px;
    }

router-link {
    color: red;
    background-color: red;
}

.router-link-active {
    text-decoration: none;
}


</style>