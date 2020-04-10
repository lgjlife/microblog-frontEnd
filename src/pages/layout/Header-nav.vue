<template>
    <div >

         <el-row :gutter="0">
             <!--主页图标-->
            <el-col :span="1"　:offset="1">
                <div class="grid-content bg-purple">
                    <router-link to="/"><i class="el-icon-s-home"></i></router-link>
                </div>
            </el-col>
             <!--搜索-->
            <el-col :span="6"　:offset="4">
                <div class="grid-content bg-purple-light">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchData"></el-input>
                </div>
            </el-col>
             <!--搜索输入-->
            <el-col :span="1"　:offset="-2"><div class="grid-content bg-purple"><i  class="search-input"></i></div></el-col>
             <!--搜索按钮-->
            <el-col :span="1"　:offset="-2">
                <div class="grid-content bg-purple-light">
                    <i class="el-icon-search" @click="searchRequest"></i>
                </div>
            </el-col>

             <!--消息-->
            <el-col :span="1"　:offset="-2">
                <div class="grid-content bg-purple-light" @click="dialogVisible = !dialogVisible">
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alixiaoxi" ></use>
                    </svg>
                    <div id="message-notice">
                        {{messageNums}}
                    </div>
                </div>
                <div v-if="dialogVisible" id="message-nav">
                    <div class="message-option">@我的</div>
                    <div class="message-option">评论</div>
                    <div class="message-option">赞</div>
                    <div class="message-option">私信</div>
                    <div class="message-option">未关注人私信</div>
                    <div class="message-option">群通知</div>
                    <div class="message-option">消息设置</div>
                </div>
            </el-col>

             <!--用户头像-->
             <el-col :span="1"　:offset="-2">
                 <svg class="iconfont" aria-hidden="true">
                     <use xlink:href="#element-icon-alitouxiang"></use>
                 </svg>
             </el-col>

             <div v-if="userName == ''">
                 <!--登录按钮-->
                 <el-col :span="1"　:offset="-2">
                     <router-link to="/login">登录</router-link>
                 </el-col>
                 <!--注册按钮-->
                 <el-col :span="1"　:offset="-2">
                     <!--@click="registerDialogVisible = true"-->
                     <router-link to="/register">注册</router-link>
                 </el-col>
             </div>
             <div v-else>
                 <!--用户头像-->
                 <el-col :span="2">
                     <el-link>{{userName}}</el-link>
                 </el-col>

             </div>

            <el-col :span="1"　:offset="-2">
                <div class="grid-content bg-purple-light">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                                <svg class="iconfont" aria-hidden="true">
                                    <use xlink:href="#element-icon-alishezhi" ></use>
                                </svg>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                    v-for="(option,index) in setOptions" @click.native="setSelect(index)"
                            >
                                {{option.name}}
                            </el-dropdown-item>

                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>

        </el-row>
        
    </div>
</template>

<script>
import login from '@/components/user/login.vue'
import register from '@/components/user/register.vue'
import share from '@/components/blog/share.vue'
import axios from 'axios'
import Cache from "@/common/cache/Cache.js"
//import { mapState } from 'vuex'

export default {
    data() {
        return {
            dialogVisible: false,

            messageNums: "12",
            searchData: '',
            loginDialogVisible: false,
            registerDialogVisible: false,

            userId: "",
            userName: "快乐的小王",

            setOptions: [

                {
                    name: "帐号设置",
                    path: "/setting",
                },
                {
                    name: "会员中心",
                    path: "",
                },
                {
                    name: "帐号安全",
                    path: "",
                },
                {
                    name: "隐私设置",
                    path: "",
                },
                {
                    name: "屏蔽设置",
                    path: "",
                },
                {
                    name: "消息设计",
                    path: "",
                },
                {
                    name: "帮助中心",
                    "path": "",
                },
                {
                    name: "退出",
                    path: "",
                }
            ],
            
        }

    },
    methods: {
        handleClose(done) {

        },

        setSelect(index){

            console.log("选中:")
            this.$router.push({path: this.setOptions[index].path,query: { userId: 123 }})
        },

       /*
       搜索请求
        */
        searchRequest(){

            if(this.searchData == ""){
                return
            }
            else {
                Cache.set("searchData",this.searchData)
                this.$router.push({path:"/search"})
            }
            console.log("搜索内容:"+ this.searchData)
            // axios({
            //     method: 'get',
            //     url: "/api/search",
            //     data: {searchData: this.searchData},
            //
            // })
            // .then((response) =>{          //这里使用了ES6的语法
            //
            // })
            // .catch((error) =>{
            //     console.log(error)//请求失败返回的数
            // } )
        }
    },

    created() {
        this.searchData = Cache.get("searchData");
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

    /**
    消息通知
     */
    #message-notice{
        background-color: red;
        width: 17px;
        height: 17px;
        position: relative;
        float: left;
        left: 30px;
        top: 10px;
        cursor: default;
    }

    /**
    消息菜单
     */
    #message-nav{
        width: 150px;
        background-color: #F0F8FF;
        position: relative;
        left: 20px;
        z-index: 1000;
    }
    .message-option{
        cursor: default;
    }
    .iconfont{
        width: 30px;
        height: 30px;
        margin-top: 10px;
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
