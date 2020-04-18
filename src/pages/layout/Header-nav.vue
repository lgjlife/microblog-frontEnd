<template>
    <div  style="background-color: #fffdef;margin: 0px;height: 50px">

        <div class="header-item header-search">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchData"
                      @keyup.enter.native="searchRequest"
                      @focus="searchHistoryVisable =true"
                      @blur="searchInputBlur"
                      class="search-input"

            ></el-input>
            <div class="search-btn">
                <!--搜索按钮-->
                <svg class="iconfont" aria-hidden="true">
                    <use xlink:href="#element-icon-alisousuo" ></use>
                </svg>
            </div>
            <!--搜索历史-->
            <div class="search-history" v-if="searchHistoryVisable">

                <div class="search-history-title" >
                    <span>搜索历史</span>
                    <span @click="cleanSearchHistoryData" class="search-history-title-clean">清空</span>
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
        </div>

        <!--主页-->
        <div class="header-item header-home">
            <router-link to="/">
                <svg class="iconfont" aria-hidden="true">
                    <use xlink:href="#element-icon-alihome-ative" ></use>
                </svg>
            </router-link>
        </div>

        <!-- 用户姓名-->
        <div class="header-item">
            <div class="header-user-icon">
                <svg class="iconfont" aria-hidden="true">
                    <use xlink:href="#element-icon-alitouxiang"></use>
                </svg>
            </div>
            <div v-if="userName == ''" class="header-user-btn">

                <!--登录按钮-->
                <span :class="{'header-user-btn-active':curlogRegBtnIndex==1}"
                      @mouseover="curlogRegBtnIndex=1"
                      @mouseout="curlogRegBtnIndex=-1"
                      @click="logRegBtnClick('login')"

                >登录</span>
                <!--注册按钮-->
                <span :class="{'header-user-btn-active':curlogRegBtnIndex==2}"
                      @mouseover="curlogRegBtnIndex=2"
                      @mouseout="curlogRegBtnIndex=-1"
                      @click="logRegBtnClick('register')"
                >注册</span>
            </div>
            <div v-else class="header-user-name">
                <!--用户名称-->
                <span @click="gotoUserPage">{{userName}}</span>
            </div>
        </div>

        <!--信息-->
        <div class="header-item">
            <div class="grid-content bg-purple-light">
                <el-dropdown>
                        <span class="el-dropdown-link message-notice-div">
                            <svg class="iconfont message-notice-icon" aria-hidden="true">
                                <use xlink:href="#element-icon-alixiaoxi" ></use>
                             </svg>
                             <div class="message-notice-num">
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
        </div>
        <!--设置-->
        <div class="header-item">
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
        </div>
    </div>
</template>

<script>
import login from '@/components/user/auth/login.vue'
import register from '@/components/user/auth/register.vue'
import share from '@/components/blog/share.vue'
import Cache from "@/common/cache/Cache.js"
import {KEY} from "@/common/cache/Cache.js"

import {trim} from "@/util/str/str.js"
//import { mapState } from 'vuex'

import  * as pathRouter  from "@/apis/common/pathRouter.js"
import weather from './weather'


export default {
    data() {
        return {
            dialogVisible: false,

            curlogRegBtnIndex: -1,

            messageNums: "12",
            searchData: '',
            loginDialogVisible: false,
            registerDialogVisible: false,
            //搜索历史记录框
            searchHistoryVisable: false,
            //
            searchHistoryDatas:[1],
            //当前鼠标位于的item
            curSearchHistoryItemMouseOn: "-1",


            userId: "1001",
            userName: "",

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

        gotoUserPage(){
           // this.$router.push("/user/u/" + this.userId + "/home" )

            pathRouter.openUserPage(this,this.userId)
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

        logRegBtnClick(type){

            if(type == "login"){
                this.$router.push('/login')
            }
            else if(type == "register"){
                this.$router.push('/register')
            }
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
    mounted() {

        window.WIDGET = {FID: 'C4su5aev9H'}
        var d = document;
        var cs = d.createElement("link");
        cs.rel = "stylesheet";
        cs.href = "https://apip.weatherdt.com/view/static/css/tqw_widget_view.css?v=0101";
        var s = d.createElement("script");
        s.src = "https://apip.weatherdt.com/float/static/js/r.js?v=1111";
        var sn = d.getElementsByTagName("script")[0];
        sn.parentNode.insertBefore(cs, sn);
        sn.parentNode.insertBefore(s, sn);
    },
    components: {
        login,
        register,
        share,
        weather,
      
    }
}
</script>

<style scoped src="./header.css"/>
<style scoped>

</style>
