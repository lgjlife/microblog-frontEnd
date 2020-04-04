<template>
    <div >

         <el-row :gutter="0">
            <el-col :span="1"　:offset="1">
                <div class="grid-content bg-purple">
                    <i class="el-icon-s-home"></i>
                </div>
            </el-col>
            <el-col :span="6"　:offset="4">
                <div class="grid-content bg-purple-light">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
                </div>
            </el-col>
            <el-col :span="1"　:offset="-2"><div class="grid-content bg-purple"><i  class="search-input"></i></div></el-col>
            <el-col :span="1"　:offset="-2"><div class="grid-content bg-purple-light"><i class="el-icon-search"></i></div></el-col>
            <el-col :span="1"　:offset="-2"><div class="grid-content bg-purple"><i class="el-icon-user-solid"></i></div></el-col>
            <el-col :span="1"　:offset="-2"><div class="grid-content bg-purple-light"><i class="el-icon-message-solid"></i></div></el-col>

            <!--登录按钮-->
            <el-col :span="1"　:offset="-2">
                <router-link to="/login">登录</router-link>
            </el-col>
            
            

            <!--注册按钮-->
            <el-col :span="1"　:offset="-2">
                <!--@click="registerDialogVisible = true"-->
                <router-link to="/register">注册</router-link>
            </el-col>
            
            <el-col :span="1"　:offset="-2">
                <div class="grid-content bg-purple-light">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                                <i class="el-icon-setting"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>帐号设置</el-dropdown-item>
                            <el-dropdown-item>会员中心</el-dropdown-item>
                            <el-dropdown-item>帐号安全</el-dropdown-item>
                            <el-dropdown-item>隐私设置</el-dropdown-item>
                            <el-dropdown-item>屏蔽设置</el-dropdown-item>
                            <el-dropdown-item>消息设计</el-dropdown-item>
                            <el-dropdown-item>帮助中心</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>

            <share/>

        </el-row>
        
    </div>
</template>

<script>
import login from '@/components/user/login.vue'
import register from '@/components/user/register.vue'
import share from '@/components/blog/share.vue'

//import { mapState } from 'vuex'

export default {
    data() {
        return {
            input: '',
            loginDialogVisible: false,
            registerDialogVisible: false,
            
        }

    },
    methods: {
       handleClose(done) {
        
       }
    },

    computed: {
        //...mapState(['isSidebarNavCollapse'])
    },
    components: {
        login,
        register,
        share,
      
    }
}
</script>

<style >

    .search-input{
        float: left;
    }
    .search-input  .el-input{
        width: 350px;
        height: 30px;
        float: left;

    }
    
    .el-icon-s-home{
        font-size: 25px;
    }
    .el-icon-search{
        font-size: 25px;
    }
    .el-icon-user-solid{
        font-size: 25px;
    }
    .el-icon-message-solid{
        font-size: 25px;
    }
    .el-icon-setting{
        font-size: 25px;
    }
    
</style>
