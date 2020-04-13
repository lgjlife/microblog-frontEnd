<template>
    <div >

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
             <!--消息-->
            <el-col :span="1"　>
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
import Cache from "@/common/cache/Cache.js"
import {KEY} from "@/common/cache/Cache.js"

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

        /*
        鼠标离开输入框
        */
        searchInputBlur(){
            let that = this
            //延迟执行
            //避免和click冲突
            setTimeout(function (){
                that.searchHistoryVisable = false
            }, 400);


        },

        
        init(){
            this.searchData = this.$route.query.searchData;

           // console.log("搜索的数据为："+this.searchData);
            this.searchHistoryDatas = Cache.get(KEY.SEARCH_DATA_KEY)

            console.log("this.searchHistoryDatas = " + JSON.stringify(this.searchHistoryDatas));
            if( this.searchHistoryDatas == null){
                console.log("历史数据不存在");
                this.searchHistoryDatas = new Array(0);
                Cache.set(KEY.SEARCH_DATA_KEY,this.searchHistoryDatas)
            }
            
        },
        setSelect(index){

            console.log("选中:")
            this.$router.push({path: this.setOptions[index].path,query: { userId: 123 }})
        },
        trim(str){ //删除左右两端的空格
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },

       /*
       搜索请求
        */
        searchRequest(){

            this.searchHistoryVisable = false


            console.log("搜索内容:"+ this.trim(this.searchData))

          //  console.log("搜索内容:"+ this.searchData)
            this.searchData  =  this.trim(this.searchData)
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
        cleanSearchHistoryData(){

            console.log("cleanSearchHistoryData");
            this.searchHistoryDatas = new Array(0);
            Cache.set(KEY.SEARCH_DATA_KEY,this.searchHistoryDatas)
        }

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

<style >

    .search-input{
        float: left;
    }
    .search-input  .el-input{
        width: 350px;
        height: 30px;
        float: left;

    }

    .search-history{
        width: 350px;
        position: absolute;
        left: 245px;
        top: 42px;
        z-index: 999;

        background-color: white;

        cursor: default;

    }

    .search-history-item{
        border: solid 1px burlywood;
        margin: 1px;
        background-color: #e9e9e9;
    }

    .search-history-item-active{
        background-color: #D2B48C;
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

    .el-icon-search{
        font-size: 25px;
    }

    
</style>
