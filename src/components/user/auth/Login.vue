<template>
    <div id="login">

        <div class="login-header" >
            <el-tabs v-model="loginMode" @tab-click="loginModeSelect">
                <el-tab-pane label="帐密登录" name="passwordMode"></el-tab-pane>
                <el-tab-pane label="扫码登录" name="scanCodeMode"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="password-mode-block" v-if="loginMode=='passwordMode'">
            <!--输入-->
            <div class="input-block">
                <label>登录帐号:</label>
                <el-input v-model="login.name" placeholder="邮箱/会员帐号/手机号"></el-input>
                <label>登录密码:</label>
                <el-input v-model="login.password" placeholder="密码" show-password></el-input>
            </div>

            <!--滑动图片验证-->
            <div style="width: 100%;text-align: center">
                <el-checkbox v-model="login.checked" >记住我</el-checkbox>
                <el-button type="text" @click="dialogVisible = !dialogVisible" style="margin-left: 50px">点击图片验证</el-button>
                <slidingImage v-if="dialogVisible" ref="slidingImage"  @imageclose="dialogVisible = false;handleImageVerifyClose()"/>
            </div>


            <div  style="width: 100%;text-align: center">
                没有帐号?<router-link to="/register">注册</router-link>    <router-link to="/">返回首页</router-link>
            </div>

            <div style="width: 100%;text-align: center">
                <el-button type="primary" @click="loginSubmit">登录</el-button>
            </div>
            <div style="color: red;width: 100%;text-align: center" >
                <span 　>{{ warning}}</span>
            </div>
            <div style="width: 100%;text-align: center">
                <span class="grid-content bg-purple">其他登录方式:</span>
                <img src="@/assets/icon/qq.png" style="margin-left: 10px" height="15px" width="15px" v-on:click="qqLogin"/>
                <img src="@/assets/icon/wx.png" style="margin-left: 10px" height="15px" width="15px" v-on:click="wxLogin"/>
            </div>
        </div>

        <div class="scancode-mode-block" v-else="loginMode=='scanCodeMode'">
            <img :src="qrcodeImgUrl"/>
            <div>使用手机扫码登录</div>

        </div>



    </div>
    
</template>

<script>

import axios from 'axios'
import SlidingImage from '@/components/user/auth/SlidingImage.vue'

export default {


    data() {
        return {

            that: "",
            loginMode: "scanCodeMode",
            //图片验证对话框显示标志位
            dialogVisible: false,
            //警告信息
            warning: "",
            //用户id
            userId: "1001",

            qrcodeImgUrl: '/img/test/qrcode.png',

            login: {
                name: '',
                password: '',
                checked: false,
                movex:  "",
            },

            webSocketConnectFlag: false,
        };
    },
    methods: {



        loginModeSelect(tab, event){

        },

        /*
        图片验证打开回调
         */
        handleImageVerifyOpen(){
            console.log("父组件调用init()")
            this.$refs.slidingImage.init();

        },

        /*
        图片验证关闭
         */
        handleImageVerifyClose() {

            console.log(this.$refs.slidingImage.imageMsg.cutImageWidth)
            console.log(this.$refs.slidingImage.verifiFlag)

            if(this.$refs.slidingImage.verifiFlag=="success"){
              console.log("---验证成功");
                this.login.movex = this.$refs.movex;
                this.warning =  "图片验证成功";

            }
            else{
              console.log("---验证失败");
                this.warning =  "图片验证失败";
            }

        },
        /*
        登录提交
         */
        loginSubmit(){
            // if((this.login.name == '')
            //     || (this.login.password == '')){
            //     this.warning =  "登录名或者密码不能为空";
            //     return;
            // }
            //
            // if(this.login.movex == ''){
            //     this.warning =  "未进行图片验证";
            //     return;
            // }
            console.log("this = " + this)
            this.$router.push({path:"/"})
            //登录请求
            axios({
                method: 'post',
                url: "user/login",
                data: this.login,

            })
            .then((response) =>{          //这里使用了ES6的语法

            })
            .catch((error) =>{

                console.log(error)//请求失败返回的数
                this.warning = "登录失败"
            } )
        },
        /*
        QQ登录请求
         */
        qqLogin()
        {
            var qqAppId = '101490224'; // 上面申请得到的appid
            var qqAuthPath = 'http://localhost:8066'; // 前面设置的回调地址
            var state = 'fjdslfjsdlkfd'; // 防止CSRF攻击的随机参数，必传，登录成功之后会回传，最好后台自己生成然后校验合法性
            var url = `https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=${qqAppId}&redirect_uri=${encodeURIComponent(qqAuthPath)}&state=${state}`;
            window.open(url);
        },

        /*
         * 微信登录请求
         */

        wxLogin(){
            console.log("wxLogin");
        },

        initWebSocket(){
            const wsuri = "ws://127.0.0.1:8081";

            let that = this;

            this.websock = new WebSocket(wsuri);
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onopen = this.websocketonopen;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
        },
        websocketonopen(){ //连接建立之后执行send方法发送数据

            that.webSocketConnectFlag

            console.log("websocket建立连接");
           let actions = {"test":"12345"};
          this.websocketsend(JSON.stringify(actions));
        },
        websocketonerror(){//连接建立失败重连

            console.log("连接失败");
            //this.that.initWebSocket();
        },
        websocketonmessage(e){ //数据接收
            const redata = JSON.parse(e.data);

            console.log(e.data);

        },
        websocketsend(Data){//数据发送
            this.websock.send(Data);
        },
        websocketclose(e){  //关闭
            console.log('断开连接',e);
        },

    },

    created(){
        console.log("created");
        this.initWebSocket()
    },

    beforeDestroy () {
        console.log('before destory')
        console.log(this.$el)
    },
    destroyed () {
        console.log('destoryed')
        console.log(this.$el)
    },
    /**
     * 注册组件
     */
    components: {
        SlidingImage,
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style  scoped src="./login.css">

<style  scoped>


</style>
