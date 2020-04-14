<template>
    <div style="background-color: #D2B48C">

         <el-row :gutter="0">

             <!--搜索-->
            <el-col :span="6"　:offset="4">
                <div class="grid-content bg-purple-light">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchData"
                              @keyup.enter.native="searchRequest"
                              @focus="searchHistoryVisable =true"
                              @blur="searchInputBlur"
                    ></el-input>
                </div>
                <!--搜索历史-->
                <div class="search-history" v-if="searchHistoryVisable">

                    <div class="search-history-nav" style="width: 100%">
                        <span>搜索历史</span>
                        <span @click="cleanSearchHistoryData"
                        style="position:absolute;right: 0px">清空</span>
                    </div>

                    <div v-for="(item,index) in searchHistoryDatas"
                         class="search-history-item"
                         :item=item
                         :index=index
                         @click="searchData=item;searchHistoryVisable =false"
                         @mouseenter="curSearchHistoryItemMouseOn = index"
                         :class="{'search-history-item-active': curSearchHistoryItemMouseOn == index}"
                    >
                        <span  >
                            {{item}}
                        </span>
                    </div>
                </div>

            </el-col>
             <!--搜索输入  @blur="searchHistoryVisable =false"
              @click="searchData=item;searchHistoryVisable =false"
             -->
            <el-col :span="1" 　:offset="-2">
                <div class="grid-content bg-purple">
                    <i  class="search-input"></i>
                </div>
            </el-col>

             <!--搜索按钮-->
            <el-col :span="1"　:offset="-2" style="margin-top: 10px">
                <div class="grid-content bg-purple-light">
                    <i class="el-icon-search" @click="searchRequest"></i>
                </div>
            </el-col>
             <!--主页图标-->
             <el-col :span="0.5" >
                 <router-link to="/">
                     <svg class="iconfont" aria-hidden="true">
                         <use xlink:href="#element-icon-alihome-ative" ></use>
                     </svg>
                 </router-link>
             </el-col>



             <!--用户头像-->
             <el-col :span="0.5" >
                 <svg class="iconfont" aria-hidden="true">
                     <use xlink:href="#element-icon-alitouxiang"></use>
                 </svg>

             </el-col>
             <el-col :span="1.9" style="margin-top: 14px">
                    <div v-if="userName == ''">
                         <!--登录按钮-->
                         <el-col :span="1.5">
                             <router-link to="/login">登录</router-link>
                         </el-col>
                        <!--注册按钮-->
                         <el-col :span="1.5">
                             <!--@click="registerDialogVisible = true"-->
                             <router-link to="/register">注册</router-link>
                         </el-col>
                     </div>
                     <div v-else>
                         <!--用户头像-->
                         <el-link>{{userName}}</el-link>

                     </div>
             </el-col>


             <!--消息-->
             <el-col :span="1"　:offset="-2">
                 <div class="grid-content bg-purple-light">
                     <el-dropdown>
                        <span class="el-dropdown-link">
                                <svg class="iconfont" aria-hidden="true">
                         <use xlink:href="#element-icon-alixiaoxi" ></use>
                         </svg>
                         <div id="message-notice">
                             {{messageNums}}
                         </div>
                        </span>
                         <el-dropdown-menu slot="dropdown">
                             <el-dropdown-item
                                     v-for="(option,index) in messageOptions" @click.native="messageOptionSelect(index)"
                             >
                                 {{option.name}}
                             </el-dropdown-item>

                         </el-dropdown-menu>
                     </el-dropdown>
                 </div>
             </el-col>


             <!--设置-->
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
                                    v-for="(option,index) in setOptions" @click.native="setOptionSelect(index)"
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
import Cache from "@/common/cache/Cache.js"
import {KEY} from "@/common/cache/Cache.js"

import {trim} from "@/util/str/str.js"
//import { mapState } from 'vuex'

export default {
    data() {
        return {
            dialogVisible: false,

            messageNums: "12",
            searchData: '',
            loginDialogVisible: false,
            registerDialogVisible: false,
            //搜索历史记录框
            searchHistoryVisable: false,
            //
            searchHistoryDatas:[1],
            //当前鼠标位于的item
            curSearchHistoryItemMouseOn: "",


            userId: "",
            userName: "的身份和节点间了看见大",

            //消息的选项
            messageOptions: [
                {name: "@我的",path: "/message/at",},
                {name: "评论",path: "/message/comment",},
                {name: "赞",path: "/message/like",},
                {name: "私信",path: "/chat",},
                {name: "消息设置",path: "/setting",},
            ],

            //设置的选项
            setOptions: [
                {name: "帐号设置",path: "/setting",},
                {name: "会员中心",path: "",},
                {name: "帐号安全",path: "",},
                {name: "隐私设置",path: "",},
                {name: "屏蔽设置",path: "",},
                {name: "消息设计",path: "",},
                {name: "帮助中心","path": "",},
                {name: "退出",path: "",}
            ],
            
        }

    },
    methods: {

        init(){
            this.searchData = this.$route.query.searchData;

            // console.log("搜索的数据为："+this.searchData);
            this.searchHistoryDatas = Cache.get(KEY.SEARCH_DATA_KEY)

            // console.log("this.searchHistoryDatas = " + JSON.stringify(this.searchHistoryDatas));
            if( this.searchHistoryDatas == null){
                console.log("历史数据不存在");
                this.searchHistoryDatas = new Array(0);
                Cache.set(KEY.SEARCH_DATA_KEY,this.searchHistoryDatas)
            }

        },

        /*
        鼠标离开搜索输入框
        */
        searchInputBlur(){
            let that = this
            //延迟执行
            //避免和click冲突
            setTimeout(function (){
                that.searchHistoryVisable = false
            }, 400);


        },

        


       /*
       搜索请求
        */
        searchRequest(){

            this.searchHistoryVisable = false


            console.log("搜索内容:"+ trim(this.searchData))

          //  console.log("搜索内容:"+ this.searchData)
            this.searchData  =  trim(this.searchData)
            if(this.searchData == ""){
                return
            }
            else {
                //添加进历史记录
                if(this.searchHistoryDatas.length > 5){
                    //移除数组尾数据
                    var data = this.searchHistoryDatas.pop()
                }
                let index = this.searchHistoryDatas.indexOf(this.searchData);
                //不存在
                if(index == -1){
                    this.searchHistoryDatas.unshift(this.searchData);
                    Cache.set(KEY.SEARCH_DATA_KEY,this.searchHistoryDatas)
                }
                this.$router.push({path:"/search",query:{searchData:this.searchData}})
            }

        },
        /**
         * 清除搜索历史数据
         */
        cleanSearchHistoryData(){

            console.log("cleanSearchHistoryData");
            this.searchHistoryDatas = new Array(0);
            Cache.set(KEY.SEARCH_DATA_KEY,this.searchHistoryDatas)
        },

        /*
        消息选项选中
        */
        messageOptionSelect(index){

            console.log("选中:")
            this.$router.push({path: this.messageOptions[index].path})
        },
        /*
       设置选项选择
       */
        setOptionSelect(index){

            console.log("选中:")
            this.$router.push({path: this.setOptions[index].path,query: { userId: 123 }})
        },


    },

    created() {

        this.init();
    },
    components: {
        login,
        register,
        share,
      
    }
}
</script>

<style scoped src="./header.css"/>
<style scoped>

</style>
