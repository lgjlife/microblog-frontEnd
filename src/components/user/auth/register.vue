<template>
    <div id="register-container">
        <!--选项-->
        <div class="register-header">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="用户名注册" name="name"></el-tab-pane>
                <el-tab-pane label="手机注册" name="phone"></el-tab-pane>
                <el-tab-pane label="邮箱注册" name="email"></el-tab-pane>
            </el-tabs>
        </div>

        <!--输入-->
        <div class="input-block">
            <label>登录帐号:</label>
            <el-input v-model="register.name" placeholder="邮箱/会员帐号/手机号"></el-input>
            <label>登录密码:</label>
            <el-input v-model="register.password" placeholder="密码" show-password @change="passwordChange"></el-input>
            <label>重复密码:</label>
            <el-input v-model="register.passwordAgain" placeholder="重复密码" show-password></el-input>

            <el-input  v-model="register.verifyCode" placeholder="验证码" v-if="(activeName != 'name')" style="width: 270px;margin-top: 10px"></el-input>
            <el-button type="text" @click="requestVerifyCode" v-if="(activeName != 'name') && (timerValue == 0)">获取验证码</el-button>
            <el-button type="warning" @click="requestVerifyCode"    v-if="(activeName != 'name') && (timerValue != 0)" disabled>{{ timerValue }}S</el-button>
        </div>
        <div style="width: 100%;text-align: center">
            <el-button type="text" @click="dialogVisible = !dialogVisible" >点击图片验证</el-button>
            <slidingImage v-if="dialogVisible" ref="slidingImage"  @imageclose="dialogVisible = false;handleImageVerifyClose()"/>
        </div>
        <div style="width: 100%;text-align: center">
            <i>已经注册帐号?<router-link to="/login">登录</router-link></i>　 <router-link to="/">返回首页</router-link>

        </div>
        <div style="width: 100%;text-align: center;padding-bottom: 30px">
            <el-button type="primary"  @click="registerSubmit">注册</el-button>
            <div style="color: red">
               {{ warning}}
            </div>
        </div>
    </div>

</template>

<script>

    import Vue from 'vue'
    import axios from 'axios'
    import SlidingImage from '@/components/user/auth/SlidingImage.vue'
    import formValidation from "@/components/user/formValidation.js"
  //  Vue.prototype.common = common

    export default {


        data() {
            return {
                activeName: 'name',
                //图片验证对话框显示标志位
                dialogVisible: false,
                //警告信息
                warning: "",
                //用户id
                userId: "1001",

                //定时器
                timer: "",
                timerValue: 0,
                MAX_TIMER: 10,

                register: {
                    nameLabel: "用户名",
                    name: '',
                    password: '',
                    passwordAgain: '',
                    verifyCode: "",
                    checked: false,
                    movex:  "",
                    complicated: "简单",
                },
            };
        },
        mounted:{

        },
        methods: {

            /**
             * 切换注册方式
             */
            handleClick(tab, event) {
                //console.log(this.activeName);
                this.register.name = "";
                this.register.password = ""
                this.register.passwordAgain = ""



               // console.log(tab, event);
            },
            /*
            图片验证打开回调
             */
            handleImageVerifyOpen(){
                console.log("父组件调用init()")
                this.$refs.slidingImage.init();

            },

            /**
             *
             * 密码输入事件
             */
            passwordChange(){

                console.log("密码啊复杂度")
                if(formValidation.checkPasswordStrength(this.register.password) == 0){
                    this.register.complicated = "简单"
                }
                else if(formValidation.checkPasswordStrength(this.register.password) == 1){
                    this.register.complicated = "中等"
                }
                else if(formValidation.checkPasswordStrength(this.register.password) == 2){
                    this.register.complicated = "复杂"
                }
            },
            /**
            * 请求获取验证码
            * */

            requestVerifyCode(){

                if(this.activeName == "phone"){
                    if(formValidation.isPhone(this.register.name) == false){
                        this.warning = "手机号码格式不正确";
                        return
                    }
                }
                if(this.activeName == "email"){
                    if(formValidation.isEmail(this.register.name) == false){
                        this.warning = "邮箱格式不正确";
                        return
                    }
                }

                //定时器
                this.timerValue = this.MAX_TIMER;
                this.timer = setInterval(this.timerHandle, 1000);

                //登录请求
                axios({
                    method: 'post',
                    url: "user/register/verifycode",
                    data: this.name,

                })
                .then((response) =>{          //这里使用了ES6的语法

                })
                .catch((error) =>{

                    console.log(error)//请求失败返回的数
                    this.warning = "请求验证码失败"
                } )

            },

            timerHandle(){

                this.timerValue--;
                if(this.timerValue == 0){
                    clearInterval(this.timer);
                }


            },
            /*
            图片验证关闭
             */
            handleImageVerifyClose() {

                console.log(this.$refs.slidingImage.imageMsg.cutImageWidth)
                console.log(this.$refs.slidingImage.verifiFlag)

                if(this.$refs.slidingImage.verifiFlag=="success"){
                    console.log("---验证成功");
                    this.register.movex = this.$refs.movex;
                    this.warning =  "图片验证成功";

                }
                else{
                    console.log("---验证失败");
                    this.warning =  "图片验证失败";
                }

            },

            /**
             *
             * 注册信息校验
             */
            registerCheck(){

                if(this.register.name == ""){
                    this.warning =  "注册名称不能为空";
                    return false;
                }
                if((this.register.password == '')
                    || (this.register.password != this.register.passwordAgain)){
                    this.warning =  "两次密码不一致";
                    return false;
                }

                if(this.activeName != "name"){
                    if(this.register.verifyCode == ""){
                        this.warning =  "验证码未填写";
                        return false;
                    }
                }

                if(this.register.movex == ''){
                    this.warning =  "未进行图片验证";
                    return　false;
                }

                return true;



            },
            /*
            注册提交
             */
            registerSubmit(){

                if(this.registerCheck() == false) return;

                //注册请求
                axios({
                    method: 'post',
                    url: "user/register",
                    data: {"name": this.register.name,
                            "password": this.register.password,
                            "verifyCode": this.register.verifyCode,
                            "movex": this.register.movex
                          },

                })
                    .then((response) =>{          //这里使用了ES6的语法

                    })
                    .catch((error) =>{

                        console.log(error)//请求失败返回的数
                        this.warning = "登录失败"
                    } )



            },

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

<style  scoped src="./register.css">
<style  scoped>




</style>
