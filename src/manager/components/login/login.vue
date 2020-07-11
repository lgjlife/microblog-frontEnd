
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
       <button @click="csrfRequest">CSRF-{{csrfRequestaData}}</button>
    </div>
</template>

<script>

import Log from "@/assets/js/util/log/Log";
import ConstData from "@/manager/util/const.js"
import ManagerHttpRequest from "@/apis/modules/manager/manager-api.js"
import ManagerAuth from "@/manager/util/managerAuth.js";

import store from "@/store/store.js"
import { mapActions,mapGetters } from 'vuex'

import req from '@/apis/axios/http.js'
import {Base64Encode,Base64Decode,encrypt,dencrypt} from '@/manager/util/encrypt/encrypt.js'

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
        csrfRequestaData: "",
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
    created() {        
        console.log("==================================================")
    },
    methods: {
        ...mapActions('auth',['authDataSave']),
        ...mapGetters('auth',['getAccessToken','getRefreshToken']),

        csrfRequest(){

            let that = this 
            req("post","/webflux/data/update").then(function (response) {

                    Log.debug("src/manager/components/login/login.vue","请求成功");

                    that.csrfRequestaData = response.data
                    console.log(response)
                    console.log(JSON.stringify(response))
                })
                .catch(function (error) {
                    Log.debug("src/manager/components/login/login.vue","请求失败");
                    console.log(error)
                    console.log(JSON.stringify(error))
                });
        },
        needAuth(){

            var ori = "123456"
            var encode = Base64Encode(ori);
            var decode = Base64Decode(encode)

            console.log("原始数据:"+ori)
            console.log("base64 编码之后:" + encode)
            console.log("base64 解码之后:" + decode)

            var password = "123456"
            console.log("原始密码:" + password)
            var publickey="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxhxTGN9sYM/DyMuJN8Gq+z+AC55qL5bRngAn637tnDnI+cp6iAnUMMVVUCLCtnU0gdJDr2tIu5OnA1LFaCM1kysGHeBzH+1p1QUZgoOKX8OZ4XcTC7xDC+0/yzO+mEZBNodCCaIckYeS03TTzQ6VaJWY4QrigRYduTq6KgLrT1ZWEw4n2MqGoIvh6TwYnmE2EU9T3j+3f7ofs0be7YWiTc8ImRQ0oEqorKhfPS/6iJGntLlA0PeLGXTS9slxsBQU4hXkUtZ5/hkkERf4+h1lZMaHrDY8WfGPU4GXXQ8gJcNQ9uVl11G+S9X0IRR4eGSgwKcL73McH5/mXJGYuTXPkQIDAQAB"

            var privatekey="MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDGHFMY32xgz8PIy4k3war7P4ALnmovltGeACfrfu2cOcj5ynqICdQwxVVQIsK2dTSB0kOva0i7k6cDUsVoIzWTKwYd4HMf7WnVBRmCg4pfw5nhdxMLvEML7T/LM76YRkE2h0IJohyRh5LTdNPNDpVolZjhCuKBFh25OroqAutPVlYTDifYyoagi+HpPBieYTYRT1PeP7d/uh+zRt7thaJNzwiZFDSgSqisqF89L/qIkae0uUDQ94sZdNL2yXGwFBTiFeRS1nn+GSQRF/j6HWVkxoesNjxZ8Y9TgZddDyAlw1D25WXXUb5L1fQhFHh4ZKDApwvvcxwfn+ZckZi5Nc+RAgMBAAECggEAYYlMeDB34WopEFD1K9hT4AMxfYbu7KMqbMnS3aTOQ15HzoObtCJyr9hX2m5iwwYNZeUpodIGKyPU1FQKEO1U0TIbftYkmBGBS3mJR7KPi/p3ZoQDgoGb2OFjyR2etsXQEZKiNq/ztMq0xRr9tDV75dPRQuri/X7v/2Qkh86MH7CZT9RKXkzjAA0j0Dmc+lSCaXNQ4Fdt/IerTntCqEJyc74KFtvJSjhIARJXg4hBXpHk8LjO7sYGZssu3CH6qfgKBeWQweDdgKJBMvPGCa0pMBhHf6ESFscrZ40bA7wEi9SMDsNmsmOdFzMko2ZSOisgtE/8OWQk5hh/AUiomBdsYQKBgQD3bVSgzN+B5dhKvKRqYydWHOiDNax2bH4NDU3dSBw6vHF3OxPEo9U+Q5S0GAwkV9OX6nFe6zPPP0PYiigH1b0bswzYglU8OBP83giCjvwJGdqF7OOoHYPNK6P8aRgJcef4Tpqm1FZ4MKbJ8UNL++LtjcnTCBUQhoCrxoDRMAMPBQKBgQDM+Y8cTBQjZRePg9LwOiq/I8kx1mJMa9AnvF+6OkcHU4ocZXXwhIfulLoq9q4Wl6syylCEdCAj6KaEFeOLnuBcAsAwxpMM2yyaP9u1d393o6kYI1GdAyaau9DTtN2OAAfnomjBykxZHBY8v4bdzvZfBdtUaHuvQoC6xTprFRtsHQKBgQDqgvGHRydA0zzh+VJMk5YhBF1Mn37K76G5dTar2UEIWrugqpnd8vqWfS9gUrqPZ77hag/ySzNb5zbC8o9mfaszqc0vGLj4zp4DOd8O/77aUWrRLOnJ2c+mkwpmnqVtrkyTCM2D+hXK7THojYefaSp4xb7ZCfwNIa6rIQXPP5ZmkQKBgQChBoib5VSIvdk1gI0M9dUxFY7wXQgaGzSKktztMu0r30AHsNlnWuZi0moyaFo5G2t92hxJAeVh8FooN/3raKO/BNYxOz64gdJXV0VmGPuFZIfpk42A+MGyG0whlNvcuz96hEchvqgd9QevL5Nm2zkHS1WTyQUpmOgCUgDjsNA7LQKBgQDfElno0ANecHWU63e9TfR/bwBqpfuLr2/ASbYcM9+E9EGkE9oSzoNLrgNquYEbWRrTNtWgijp00vy1GcGEtS1YB4slxUcdug+KELL97+128dyQiCV+gVP5OLldM/YnPyXwDJfK2ShucbZdUpO222/Ro6/WP/C/lNiKDaFNuhfVOA==";

            var encrypassword = encrypt(password,publickey)
            console.log("加密之后:" + encrypassword)
            var dencrypassword = dencrypt(encrypassword,privatekey);             
            console.log("解密之后:" + dencrypassword)
            // var that = this
            // that.countTime = 0
            // that.createTask()
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
                Log.debug("src/manager/components/login/login.vue","warnHandler错误提示");
                that.warnVisible = false;
            }, 3000);
        },
        /*
        登录请求事件
        */
        submitForm(formName) {

            var loginData = ManagerAuth.getLoginData(this.loginForm.username,this.loginForm.password);
            Log.debug("src/manager/components/login/login.vue","loginData=[]",[JSON.stringify(loginData)]);
           this.requestLogin(loginData)
           return
            //测试帐号
            if((this.loginForm.username === "test") && (this.loginForm.password === "123456789")){

                this.$router.push({path: "/manager"})
                return;
            }

            let that =  this
            this.$refs[formName].validate((valid) => {

                if (valid) {

                    //先获取publickey
                    that.requestPublicKey(that.loginForm.username)
                    .then(function (response) {

                        console.log(response)
                        
                        if(response.data.code == 0){
                            //成功
                            var publickey = response.data.data 
                            Log.debug("src/manager/components/login/login.vue","publickey＝[]",[publickey]);
                            
                            console.log(that)
                            var encrypassword  = encrypt(that.loginForm.password,publickey)
                            Log.debug("src/manager/components/login/login.vue","encrypassword=[]",[encrypassword]);
                            var loginData = ManagerAuth.getLoginData(that.loginForm.username,encrypassword);
                            Log.debug("src/manager/components/login/login.vue","loginData=[]",[JSON.stringify(loginData)]);
                            Log.debug("src/manager/components/login/login.vue","发起登录请求１");

                            console.log(that)
                            that.requestLogin(loginData);

                        }
                        else{
                            that.warnHandler("请求失败1");
                        }
                       

                    }).catch(function (error) {
                        that.warnHandler("请求失败2");
                      
                    })
                    

                } else {
                    return false;
                }
            });
        },

        //获取公钥

        requestPublicKey(username){
            
           return ManagerHttpRequest.GetPublicKey({username:username})
        },

        requestLogin(loginData){            
            
            Log.debug("src/manager/components/login/login.vue","发起登录请求２");
            let that = this
            ManagerHttpRequest.Login(loginData)
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
                    that.warnHandler("请求出现错误:..."+response.data.msg);
                }       
                
                
            })
            .catch(function (error) {
                
                Log.debug("src/manager/components/login/login.vue","登录出错");
                console.log(error)
                console.log(error.response)
                //that.warnHandler("请求出现错误:"+error.response.status);
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