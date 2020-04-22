<template>
    <div id="message-cantainer">
        <HeaderNav></HeaderNav>

        <div style="height: 100%">
            <el-container style="height: 100%">
                <el-aside width="200px" style="height: 100%">Aside</el-aside>
                <el-aside width="200px" class="left-nav">
                    <div class="option-title">
                        <span>我的消息箱</span>
                    </div>
                    <ul >
                        <li v-for="(item,index) in options"
                            :index="index"
                            :class="{active:curItem == index}"
                            @click="optionSelect(index)"
                        >{{item.name}}</li>
                    </ul>
                </el-aside>
                <el-container>
                    <!--<el-header class="title-nav">-->
                        <!--<span>-->
                            <!--{{title}}-->
                        <!--</span>-->
                        <!--<el-input  placeholder="请输入查找内容"  v-model="searchData" size="mini"-->
                                   <!--class="input-with-select input-search"-->

                        <!--&gt;-->
                            <!--<el-button slot="append" icon="el-icon-search" @click="searchBlog"></el-button>-->
                        <!--</el-input>-->

                    <!--</el-header>-->
                    <el-main class="content-nav" >
                        <router-view style="margin: 0px ;width: 100% ;padding: 0px"></router-view>
                    </el-main>
                </el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-aside width="200px">Aside</el-aside>
            </el-container>
        </div>
    </div>

</template>

<script>
    import HeaderNav from '@/pages/layout/HeaderNav.vue'

    import At from "./At"
    import Like from "./Like"
    import Comment from "./Comment"

    export default {
        data(){
            return{
                curItem: "",
                title: "",
                titleText: ["@我的微博","收到的评论","收到的点赞"],

                searchData: "",

                options: [{"name":"@我的",path:"/message/at"},
                    {"name":"评论",path:"/message/comment"},
                    {"name":"赞",path:"/message/like"},
                    {"name":"私信",path:"/chat"}],

            }
        },

        methods:{

            /**
             * 选项选择
             */

            optionSelect(index){
                console.log("optionSelect = " + index);
                this.curItem = index

                this.title =　this.titleText[index];

                this.$router.push({path: this.options[index].path,query: { userId: 123 }})
            },

            /**
             * 搜索微博
             */
            searchBlog(){
                console.log("searchBlog");
            }
        },

        created(){
            this.title =　this.titleText[0];
        },

        components:{
            HeaderNav,
            At,
            Like,
            Comment,
        }


    }

</script>

<style scoped src="./assets/index.css"/>
<style scoped>

    /*@import "assets/index.css";*/
html,body{
    margin:0px;
    min-width: 1300px;
    height: 100%;
    background-color: #e7e1cd;
}
</style>