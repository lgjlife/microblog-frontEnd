<!--
帐号设置页面

-->
<template>
    <div>
        <headerNav></headerNav>

        <div class="security-cantainer">

            <div class="header">
                <span>帐号与安全</span>
            </div>
            <div class="options">
                <ul>
                    <li class="options-item"
                        v-for="(option,index) in optionItems"
                        :index="option.index"
                        @click="select(index)"
                        :class="{active:curItem == index}"
                    >{{option}}</li>
                </ul>
            </div>
            <div class="right-nav1">
                <!--修改密码-->
                <div v-if="curItem == 0">
                    <el-form ref="password" :model="password" label-width="80px">
                        <span style="font-size: small;margin: 50px 30px 50px 50px;">密码必须包含数字，字符串，特殊字符其中三种</span>
                        <el-form-item label="旧密码">
                            <el-input v-model="password.oldPassword" style="width: 200px" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="新密码">
                            <el-input v-model="password.newPassword" style="width: 200px" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="password.newPasswordAgain" style="width: 200px" show-password></el-input>
                        </el-form-item>

                    </el-form>
                    <el-button style="position: relative;left: 21%" @click="passwordModify">确认修改</el-button>
                    <div>
                        <span style="color: red;position: relative;　left: 21%">{{modifyPasswordWarning}}</span>
                    </div>
                </div>

                <!--手机号码-->
                <div v-else-if="curItem == 1">
                    <span style="font-size: small; margin: 100px 5px 50px 50px;">当前手机号码:</span>13925716752<span></span>
                    <el-form ref="phone" :model="phone" label-width="100px">
                        <el-form-item label="新手机号码">
                            <el-input v-model="phone.newPhoneNum" style="width: 200px"></el-input>
                            <el-button style="position: relative;" @click="getVerifyCode">获取验证码</el-button>
                        </el-form-item>

                        <el-form-item label="验证码">
                            <el-input v-model="phone.verifyCode" style="width: 200px"></el-input>
                        </el-form-item>
                        <el-button style="position: relative;left: 21%" @click="modifyPhone">确认修改</el-button>
                        <div>
                            <span style="color: red;position: relative;　left: 21%">{{modifyPhoneWarning}}</span>
                        </div>
                    </el-form>
                </div>

                <!--修改邮箱-->
                <div v-else-if="curItem == 2">
                    <span style="font-size: small; margin: 100px 5px 50px 50px;">当前邮箱:</span>dfghj@163.com<span></span>
                    <el-form ref="email" :model="email" label-width="100px">
                        <el-form-item label="新邮箱">
                            <el-input v-model="email.email" style="width: 200px"></el-input>
                            <el-button style="position: relative;" @click="getVerifyCode">获取验证码</el-button>
                        </el-form-item>

                        <el-form-item label="验证码">
                            <el-input v-model="email.verifyCode" style="width: 200px"></el-input>
                        </el-form-item>
                        <el-button style="position: relative;left: 21%" @click="modifyEmail">确认修改</el-button>
                        <div>
                            <span style="color: red;position: relative;　left: 21%">{{modifyEmailWarning}}</span>
                        </div>
                    </el-form>
                </div>


                <!--陌生登录提醒-->
                <div v-else-if="curItem == 3">
                    陌生登录提醒
                </div>

                <!--双重登录验证-->
                <div v-else-if="curItem == 4">
                    双重登录验证
                </div>

                <!--最近登录记录-->
                <div v-else-if="curItem == 5">
                    最近登录记录
                </div>



            </div>
        </div>
    </div>
</template>

<script>

    import HeaderNav from '@/pages/layout/HeaderNav.vue'
    import axios from 'axios'
    import "./security.css"
    import formValidation from "@/components/user/formValidation.js"

    export default {

        data(){
            return{
                optionItems:[
                    "修改密码",
                    "手机号码",
                    "修改邮箱",
                    "陌生登录提醒",
                    "双重登录验证",
                    "最近登录记录",
                ],
                curItem: "0",

                //修改密码警告
                modifyPasswordWarning: "",
                password: {
                    oldPassword: "",
                    newPassword: "",
                    newPasswordAgain: "",
                },
                //电话
                modifyPhoneWarning:"",
                phone:{
                    newPhoneNum: "",
                    verifyCode: "",
                },
                //邮箱
                modifyEmailWarning:"",
                email:{
                    newEmail: "",
                    verifyCode: "",
                }
            }
        },
        methods:{
            //切换选项
            select(index){
                console.log("index = " + index)
                this.curItem =index
            },
            /**
             * 修改密码
             */
            passwordModify(){

                if((this.password.oldPassword == "")
                    || (this.password.newPassword == "")
                    || (this.password.newPasswordAgain == "")){
                    this.modifyPasswordWarning = "输入不能为空"
                    return
                }

                if(this.password.newPassword != this.password.newPasswordAgain ){
                    this.modifyPasswordWarning = "两次密码不一致"
                    return;
                }

                if(formValidation.checkPasswordStrength(this.password.newPassword ) == 0){
                    this.modifyPasswordWarning = "密码强度一般"
                    return;
                }

                axios({
                    method: 'post',
                    url: "setting/password/modify",
                    data: this.password,

                })
                .then((response) =>{          //这里使用了ES6的语法

                })
                .catch((error) =>{

                    console.log(error)//请求失败返回的数
                    this.warning = "修改密码失败"
                } )



            },
            /**
             * 获取验证码
             */
            getVerifyCode(){

                if(this.phone.newPhoneNum == ""){
                    this.modifyPhoneWarning  = "请输入手机号码";
                    return
                }
                if(formValidation.isPhone(this.phone.newPhoneNum) == fasle){
                    this.modifyPhoneWarning  = "手机号码格式错误";
                    return
                }
                axios({
                    method: 'post',
                    url: "setting/phoneVerifyCode",
                    data: this.phone.newPhoneNum,

                })
                .then((response) =>{          //这里使用了ES6的语法

                })
                .catch((error) =>{

                    console.log(error)//请求失败返回的数
                    this.warning = "获取手机验证码失败"
                } )
            },

            /**
             * 修改手机号码
             */
            modifyPhone(){
                if(this.phone.newPhoneNum == ""){
                    this.modifyPhoneWarning  = "请输入手机号码";
                    return
                }
                if(this.phone.verifyCode == ""){
                    this.modifyPhoneWarning  = "请输入验证码";
                    return
                }
                if(formValidation.isPhone(this.phone.newPhoneNum) == fasle){
                    this.modifyPhoneWarning  = "手机号码格式错误";
                    return
                }

                axios({
                    method: 'post',
                    url: "setting/phone",
                    data: this.phone,

                })
                .then((response) =>{          //这里使用了ES6的语法

                })
                .catch((error) =>{

                    console.log(error)//请求失败返回的数
                    this.warning = "修改手机号码失败"
                } )

            },

            /**
             * 修改手机号码
             */
            modifyEmail(){
                if(this.email.newEmail == ""){
                    this.modifyEmailWarning  = "请输入邮箱地址";
                    return
                }
                if(this.email.verifyCode == ""){
                    this.modifyEmailWarning  = "请输入验证码";
                    return
                }
                if(formValidation.isEmail(this.email.newEmail) == fasle){
                    this.modifyEmailWarning  = "邮箱格式错误";
                    return
                }

                axios({
                    method: 'post',
                    url: "setting/email",
                    data: this.email,

                })
                    .then((response) =>{          //这里使用了ES6的语法

                    })
                    .catch((error) =>{

                        console.log(error)//请求失败返回的数
                        this.warning = "修改邮箱失败"
                    } )

            }


        },

        created(){
            console.log("index = "+this.$route.query.index)
            this.curItem = this.$route.query.index;
            if(this.curItem == null){
                this.curItem = 2;
            }
        },
        components: {
            HeaderNav,
        }
    }
</script>

<style scoped>

</style>