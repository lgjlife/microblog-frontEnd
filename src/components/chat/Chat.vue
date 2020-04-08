<template>
    <div class="chat-cantainer">
        <!--左侧-->
        <div class="left-nav">
            <!--头像　选项-->
            <div class="header-nav">
                <el-avatar :size="50" :src="headerImg"></el-avatar>
                <span>天涯</span>
                <div class="grid-content bg-purple" style="width: 30px;height: 30px; position: absolute;top:0px;right: 0px">
                    <router-link to="/"><i class="el-icon-s-home"></i></router-link>
                </div>
            </div>
            <!--搜索-->
            <div class="search-nav">
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="searchName">
                </el-input>
            </div>
            <div class="chat-user-nav">
                <!--聊天列表-->
                <div class="chat-user-list" v-for="(user,index) in users" @click="userSelectToChat(index)">
                    <el-avatar :size="50" :src="user.headerImg"></el-avatar>
                    <span>{{user.name}}</span>
                    <span class="chat-date">{{user.chatMonth}}-{{user.chatDay}}</span>
                </div>
            </div>

        </div>
        <!--右侧-->
        <div class="right-nav">
            <!--标题栏-->
            <div class="title">
                <span>{{curChatName}}</span>
            </div>
            <!--聊天区域-->
            <div class="chat-record" :style="charRecordStyle" ref="chatRecord">

                <component v-for="(item,index) in componentData"
                           :key="index"
                           :is="item.type"
                           :time="item.time"
                           :content="item.content"
                           :headerImg="item.headerImg"
                           :contentImg="item.contentImg"
                ></component>


            </div>
            <!--聊天工具栏-->
            <div class="chat-tools">
                <el-row :gutter="1">
                    <el-col :span="1" :offset=0>
                        <!--表情-->
                        <div class="grid-content bg-purple">

                            <svg class="iconfont" aria-hidden="true" style="width: 20px;height: 20px;margin-top: 1px">
                                <use xlink:href="#element-icon-alibiaoqing" @click="emotionDisplay = !emotionDisplay"></use>
                            </svg>

                        </div>
                        <Emotion v-if="emotionDisplay" ref="emotionChild" style="position:absolute; z-index: 9999;" @emotionChildSelect="emotionChildSelect"></Emotion>

                    </el-col>


                    <!--图片-->
                    <el-col :span="1" :offset=0>
                        <div class="grid-content bg-purple">
                            <svg class="iconfont" aria-hidden="true" style="width: 20px;height: 20px;margin-top: 1px">
                                <use xlink:href="#element-icon-alitupian1" @click="uploadDisplay = !uploadDisplay"></use>
                            </svg>
                        </div>
                        <Upload v-if="uploadDisplay" style="position:absolute; z-index: 9999;"></Upload>
                    </el-col>
                </el-row>
            </div>
            <div class="chat-edit">

                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="content"
                        show-word-limit
                        rows="3"
                        class="chat-edit-input"

                ></el-input>
                <el-button type="primary" @click="recMsg">模拟</el-button>
                <el-button type="success" @click="sendMsg">发送</el-button>
            </div>
        </div>


    </div>
</template>

<script>

    import "./chat.css"

     import ChatUserLeft from  "@/components/chat/ChatUserLeft.vue"
    import ChatUserRight from  "@/components/chat/ChatUserRight.vue"
    import Emotion from '@/components/common/Emotion.vue'


    export default {

    data(){
        return{
            emotionDisplay: false,
            uploadDisplay: false,

            componentData: [],

            content: "",

            charRecordStyle:{
                scrollTop: "",
                scrollHeight: "",
                width: "",

            },


            chatData:{
                time: this.counter++,
                content:"",
                contentImg: "",
                headerImg: "/img/test/1.jpg"
            },

            headerImg: "/img/test/1.jpg",
            searchName: "",
            curChatName: "明日之后",
            users:[
                {
                    headerImg: "/img/test/1.jpg",
                    name: "微博小秘书",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "张杰",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "微博小秘书",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "张杰",
                    chatMonth: "03",
                    chatDay: "21",
                },{
                    headerImg: "/img/test/1.jpg",
                    name: "微博小秘书",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "张杰",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "微博小秘书",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "张杰",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "微博小秘书",
                    chatMonth: "03",
                    chatDay: "21",
                },
                {
                    headerImg: "/img/test/1.jpg",
                    name: "张杰",
                    chatMonth: "03",
                    chatDay: "21",
                }

            ]
        }
    },
    methods:{

        /*
        选择要聊天的用户
         */
        userSelectToChat(index){
            console.log("选中用户:" + this.users[index].name)
            this.curChatName = this.users[index].name
        },

        /**
         表情包子组件选择表情
         */
        emotionChildSelect(emotion){
            console.log("子组件选择表情：" + emotion);
            this.emotionDisplay = false;
            this.content += emotion
        },

        sendMsg(){
            this.chatData.content = this.content;
            this.chatData.headerImg = "/img/test/1.jpg";
            this.addRight(this.chatData)
        },

        recMsg(){
            this.chatData.content = this.content;
            this.chatData.headerImg = "/img/test/2.jpg";
            this.addLeft(this.chatData)
        },
        addLeft(chatData){
            let type = 'ChatUserLeft'
            this.componentData.push({
                type:type,
                time: chatData.time,
                content:chatData.content,
                contentImg: chatData.contentImg,
                headerImg: chatData.headerImg,
            })
            this.resizeScroll()

        },

        addRight(chatData){

            let type = 'ChatUserRight'
            this.componentData.push({
                type:type,
                time: chatData.time,
                content:chatData.content,
                contentImg: chatData.contentImg,
                headerImg: chatData.headerImg,

            })
            this.resizeScroll()
        },
        resizeScroll(){
            var div = document.getElementsByClassName('chat-record')[0];

            console.log("---scrollTop = " + div.scrollTop + "  scrollHeight=" + div.scrollHeight)
           div.scrollTop += 4000;

            console.log("scrollTop = " + div.scrollTop + "  scrollHeight=" + div.scrollHeight)
        },
    },

    mounted(){
        console.log("message" );
        console.log("top:"+this.charRecordStyle.scrollTop + "  height=" + this.$refs.chatRecord.style.height);
    },
    components:{
        ChatUserRight,
        ChatUserLeft,
        Emotion,
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.chat-edit-input{
    width: 800px;
}

</style>
