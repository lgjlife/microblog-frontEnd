<template>
    <div id="login">

      <el-form :label-position="right = 'right'" label-width="80px" :model="login">

          <el-form-item label="登录帐号">
            <el-input v-model="login.name" placeholder="邮箱/会员帐号/手机号"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="login.password" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item >
              <el-row :gutter="20" style="margin-bottom: 0px;">

                  <el-col :span="30" :offset="3">
                      <el-button type="text" @click="dialogVisible = true" >点击图片验证</el-button>
                  
                      <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        @open="handleImageVerifyOpen"

                        width="300px"
                        height="300px"
                        :modal-append-to-body='false'
                        >                        
                        <slidingImage ref="slidingImage"  @imageclose="dialogVisible = false;handleImageVerifyClose()"/>
                    　</el-dialog>
                  </el-col>
              </el-row> 

              <el-row :gutter="2">
                <el-col :span="6">
                  <div class="grid-content bg-purple"><el-checkbox v-model="login.checked">记住我</el-checkbox></div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                      <i>没有帐号?<el-link type="primary">注册</el-link></i>    <router-link to="/">返回首页</router-link>
                  </div>
                </el-col>

              </el-row>

              <!--登录按钮-->
          </el-form-item>
          <el-row :gutter="20" style="margin-bottom: 5px;">
              <el-col :span="12" :offset="8">
                <div class="grid-content bg-purple">
                    <el-button type="primary" style="display: block" @click="loginSubmit">登录</el-button>
                    <span 　style="color: red" >{{ warning}}</span>
                </div>
              </el-col>
              <el-col :span="12" :offset="5">
                  <!--警告-->

              </el-col>
          </el-row>

            <!--其他登录方式-->
          <el-row :gutter="2">
              <el-col :span="7">
                <div class="grid-content bg-purple">其他登录方式:</div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <img src="@/assets/icon/qq.png" height="15px" width="15px" v-on:click="qqLogin"/>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <img src="@/assets/icon/wx.png" height="15px" width="15px" v-on:click="wxLogin"/>
                </div>
              </el-col>
            </el-row>
        </el-form>
    </div>
    
</template>

<script>

import axios from 'axios'
import slidingImage from '@/components/user/slidingImage.vue'

export default {


    data() {
        return {
            //图片验证对话框显示标志位
            dialogVisible: false,
            //警告信息
            warning: "",
            //用户id
            userId: "1001",

            login: {
                name: '',
                password: '',
                checked: false,
                movex:  "",
            },
        };
    },
    methods: {

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
    },
    /**
     * 注册组件
     */
    components: {
        slidingImage,
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

  
<style  scoped>


.el-form{
    position: absolute;
    top: 50px;
    left: 35%;
    width: 400px;
}
</style>
