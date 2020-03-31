<template>
    <div id="login">
      <h2>登录</h2>  
      <el-form :label-position="labelPosition" label-width="80px" :model="login">

          <el-form-item label="登录帐号">
            <el-input v-model="login.name" placeholder="邮箱/会员帐号/手机号"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="login.password" placeholder="密码" show-password></el-input>
          </el-form-item>
          <el-form-item >
              <el-row :gutter="2">
                <el-col :span="6">
                  <div class="grid-content bg-purple"><el-checkbox v-model="login.checked">记住我</el-checkbox></div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-purple">
                      <i>没有帐号?<el-link type="primary">注册</el-link></i>
                  </div>
                </el-col>

              </el-row>

            
            
          </el-form-item>
          <el-row :gutter="20" style="margin-bottom: 30px;">
              <el-col :span="12" :offset="8">
                <div class="grid-content bg-purple">
                    <el-button type="primary" style="display: block">登录</el-button>
                </div>
              </el-col>
          </el-row>
          

          <el-row :gutter="2">
              <el-col :span="6">
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

            
            <span id="qqLoginBtn"></span>
            
            
            
        </el-form>

        <slidingImage/>
    </div>
    
</template>

<script>
  
  import slidingImage from '@/components/user/slidingImage.vue'

export default {


  data() {
      return {
        labelPosition: 'right',
        login: {
          name: '',
          password: '',
          checked: false,
          
        },
      };
  },
  methods: {
    
     openWindow(url, width, height)
      {
        width = width || 600;
        height = height || 400;
        var left = (window.screen.width - width) / 2;
        var top = (window.screen.height - height) / 2;
        window.open(url, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, left="+left+", top="+top+", width="+width+", height="+height);
      },

      qqLogin()
      {
        var qqAppId = '101490224'; // 上面申请得到的appid
        var qqAuthPath = 'http://localhost:8066'; // 前面设置的回调地址
        var state = 'fjdslfjsdlkfd'; // 防止CSRF攻击的随机参数，必传，登录成功之后会回传，最好后台自己生成然后校验合法性
        var url = `https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=${qqAppId}&redirect_uri=${encodeURIComponent(qqAuthPath)}&state=${state}`;
        window.open(url);
      },

    
    wxLogin(){
      console.log("wxLogin");
    },
  },
  components: {
    slidingImage,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

  
<style  scoped>
  
</style>
