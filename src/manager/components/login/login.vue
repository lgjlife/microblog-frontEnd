
<!-- 
名称: 后台管理页面登录组件


 -->
 <template>
    <div class="login-container">
        <div class="login-block">
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <!-- 登录名称 -->
                <el-form-item label="账户" prop="username">
                    <el-input type="text" 
                    v-model="loginForm.username" 
                    autocomplete="off"
                    placeholder="请输入用户名"
                    ></el-input>
                  </el-form-item>
                <!-- 登录密码 -->
                <el-form-item label="密码" prop="password">
                  <el-input type="password" 
                  v-model="loginForm.password" 
                  autocomplete="off"
                  placeholder="请输入密码"
                 
                  ></el-input>
                </el-form-item>                
                <!-- 提交按钮 -->
                <el-form-item>
                  <el-button type="primary" @click="submitForm('loginForm')"
                  style="position: relative; left: 30%;"
                  >提交</el-button>
                </el-form-item>

                <span style="position: relative; left: 35%;">测试帐号: test/123456789</span>
              </el-form>
              <!-- 错误提示 -->
              <div class="warn" v-if="warnVisible">{{warnContent}}</div>
        </div>

        <button @click="vuexClick">vuex-{{token}}</button>
        <button @click="needAuth">needAuth</button>
       
    </div>
</template>

<script>

import Log from "@/assets/js/util/log/Log";
import ConstData from "@/manager/util/const.js"
import ManagerHTTP from "@/apis/modules/manager/manager-api.js"
import ManagerAuth from "@/manager/util/managerAuth.js";

import store from "@/store/store.js"
import { mapActions,mapGetters } from 'vuex'

import req from '@/apis/axios/http.js'

export default {
    data() {
        
        //用户名校验
        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        //密码校验
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
      
      return {
        token: "",
        //warn　是否可见，登录错误才会显示一段时间
        warnVisible: false,
        warnContent: "",
        countTime: 0,
        loginForm: {
          password: 'my-password1',
          username: 'my-username',
        },
        rules: {
          password: [{ validator: validatePassword, trigger: 'blur' }],
          username: [{ validator: validateUsername, trigger: 'blur' }],
        }
      };
    },
    methods: {
        ...mapActions('auth',['authDataSave']),
        ...mapGetters('auth',['getAccessToken','getRefreshToken']),

        needAuth(){
            var that = this
            that.countTime = 0
            that.createTask()
        },

        createTask(){
            var that = this 

            req("get","/api/needauth").then(function (response) {
                    that.countTime++;
                    
                    Log.debug("src/manager/components/login/login.vue","/api/needauth成功;[]--[]s",
                    [response.data,that.countTime]);

                    //that.createTask()
                })
                .catch(function (error) {
                    that.countTime = 0
                    Log.debug("src/manager/components/login/login.vue","/api/needauth出错");
                    that.warnHandler("请求出现错误:"+error.response.status);
                });

            // setTimeout(function(){
            //     req("get","/api/needauth").then(function (response) {
            //         that.countTime++;
                    
            //         Log.debug("src/manager/components/login/login.vue","/api/needauth成功;[]--[]s",
            //         [response.data,that.countTime]);

            //         that.createTask()
            //     })
            //     .catch(function (error) {
            //         that.countTime = 0
            //         Log.debug("src/manager/components/login/login.vue","/api/needauth出错");
            //         that.warnHandler("请求出现错误:"+error.response.status);
            //     });
            // },1000)
        },

        vuexClick(){
            ManagerAuth.RefreshToken()
        },

        /*
        错误时提示
        */
        warnHandler(warnContent){
            this.warnContent = warnContent;
            this.warnVisible = true;
            var that = this 
            setTimeout(function(){
                Log.debug("src/manager/components/login/login.vue","warnVisible = false");
                that.warnVisible = false;
            }, 3000);
        },
        /*
        登录请求
        */
        submitForm(formName) {

            var loginData = ManagerAuth.getLoginData(this.loginForm.username,this.loginForm.password);
            Log.debug("src/manager/components/login/login.vue","loginData=[]",[JSON.stringify(loginData)]);

            if((this.loginForm.username === "test") && (this.loginForm.password === "123456789")){

                this.$router.push({path: "/manager"})
                return;
            }

            let that =  this
            this.$refs[formName].validate((valid) => {

                if (valid) {
                    ManagerHTTP.Login(loginData)
                    .then(function (response) {
                       
                        console.log(JSON.stringify(response));
                        if(response.data.code == null){
                            var tokenPayload = response.data; 
                             //保存到vuex
                            that.authDataSave(tokenPayload);                 
                            var readToken = that.getAccessToken();
                            Log.debug("src/manager/components/login/login.vue","登录成功:expires_in＝[]s",[tokenPayload.expires_in]);
                            //跳转到管理页面
                            that.$router.push({path: "/manager"})
                        
                        }
                        else{
                            that.warnHandler("请求出现错误:"+response.data.msg);
                        }       
                       
                       
                    })
                    .catch(function (error) {
                        
                        Log.debug("src/manager/components/login/login.vue","登录出错");
                        console.log(error)
                        console.log(error.response)
                        //that.warnHandler("请求出现错误:"+error.response.status);
                    });

                } else {
                    return false;
                }
            });
        }
    }
  }
</script>

<style scoped >

.login-container{
    background-image: url(/img/manager/b1.jpg);
    background-size:100% 100%;
    height: 100%;
}

.login-block{
    position: relative;
    top: 100px;
    left: 35%;
    height: 250px;
    width: 450px;
    background-color: ghostwhite;
}
.demo-ruleForm{
    
    padding-top: 30px;
    padding-right: 30px;

}

.warn{
    position: absolute;
    float: left;
    z-index: 100;
    left: 35%;
    top: 50px;
    background-color:  rgba(255, 0, 0, 0.2);
    border: solid black 1px;

    height: 30px;
    padding-left: 30px;
    padding-right: 30px;

}
</style>