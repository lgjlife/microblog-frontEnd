
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

       
    </div>
</template>

<script>

import Log from "@/assets/js/util/log/Log";
import ConstData from "@/manager/util/const.js"
import ManagerHTTP from "@/apis/modules/manager/manager-api.js"
import ManagerAuth from "@/manager/util/managerAuth.js";

import store from "@/store/store.js"
import { mapActions,mapGetters } from 'vuex'

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


        vuexClick(){
            //this.increment();
    
            console.log(this.token)
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
            Log.debug("src/manager/components/login/login.vue","username=[],password=[]",[this.loginForm.username,this.loginForm.password]);

            

            var loginData = ManagerAuth.getLoginData(this.loginForm.username,this.loginForm.password);

            console.log(loginData)
            Log.debug("src/manager/components/login/login.vue","loginData=[]",[JSON.stringify(loginData)]);

            if((this.loginForm.username === "test") && (this.loginForm.password === "123456789")){

                this.$router.push({path: "/manager"})
                return;
            }

            // this.$axios.post("/api/auth/oauth/token", null, {
            //     params:loginData
            // }).then(function (response) {
            //     Log.debug("src/manager/components/login/login.vue","登录成功");
            //     console.log(JSON.stringify(response));
            // })
            // .catch(function (error) {
            //     Log.debug("src/manager/components/login/login.vue","登录出错");
            //     that.warnHandler("请求出现错误:"+error.response.status);
            // });

            //return


            let that =  this
            this.$refs[formName].validate((valid) => {

                if (valid) {
                    ManagerHTTP.Login(loginData)
                    .then(function (response) {
                        Log.debug("src/manager/components/login/login.vue","登录成功");
                        var tokenPayload = response.data;

                        var access_token = response.data.access_token;
                        var token_type = response.data.token_type;
                        var refresh_token = response.data.refresh_token;
                        var expires_in = response.data.expires_in;
                        var scope = response.data.scope;
                        var jti = response.data.jti;
                   
                       // console.log(JSON.stringify(response));
                        console.log("1111111111")
                        that.authDataSave(tokenPayload);
                        console.log("22222222222")
                        var readToken = that.getAccessToken();
                        console.log("readToken = " + readToken)
                    })
                    .catch(function (error) {
                        Log.debug("src/manager/components/login/login.vue","登录出错");
                        that.warnHandler("请求出现错误:"+JSON.stringify(error));
                    });

                } else {
                    console.log('error submit!!');
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