<template>
    <div>
        <!--标题-->
        <div>
            <span>粉丝:</span><span>{{fansList.length}}</span>
            <el-input></el-input>
        </div>

        <!--列表-->
        <div>
            <div class="fans-list-container" v-for="(fans,index)  in fansList">
                <!--left-->
                <div class="left-container">
                    <el-avatar :size="60">
                        <img :src="fans.headerImageUrl"/>
                    </el-avatar>
                </div>
                <!--right-->
                <div class="right-container">
                    <span>{{fans.userName}}</span>
                    <div>
                        <ul>
                            <li>
                                <span>关注:</span><span style="color: #CD853F">{{fans.followCount}}</span>
                            </li>
                            <li>
                                <span>粉丝:</span><span style="color: #CD853F">{{fans.fansCount}}</span>
                            </li>
                            <li>
                                <span>微博:</span><span style="color: #CD853F">{{fans.blogCount}}</span>
                            </li>
                        </ul>
                    </div>
                    <el-dropdown @command="handleCommand(command,index)">
                        <span class="el-dropdown-link">
                            <span style="cursor: default">更多操作</span>
                            <i class="el-icon-arrow-down el-icon--right" style="color: black;font-weight: 900"></i>
                        </span>
                        <el-dropdown-menu   >
                            <el-dropdown-item command="1">关注</el-dropdown-item>
                            <el-dropdown-item command="2">私信</el-dropdown-item>
                            <el-dropdown-item command="3">移除粉丝</el-dropdown-item>
                            <el-dropdown-item command="4">加入黑名单</el-dropdown-item>
                            <el-dropdown-item command="5">投诉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

                <!--分割线-->

            </div>


        </div>


    </div>
</template>

<script>

    export default {
        data(){
            return{
                fansList:[
                    {
                        headerImageUrl: "/img/test/1.jpg",
                        userName: "明天会更好",
                        userId: 1,

                        followCount: 100,
                        fansCount: 101,
                        blogCount: 120,

                    },
                    {
                        headerImageUrl: "/img/test/1.jpg",
                        userName: "明天会更好",
                        userId: 1,

                        followCount: 100,
                        fansCount: 101,
                        blogCount: 120,

                    }
                ]
            }
        },

        methods:{
            handleCommand(command,index){
                console.log("command = " + command );
                 console.log("index = " + index );
            }
        },

        created(){

        },
        components:{

        }
    }
</script>

<style scoped>

    .left-container{
        width: 80px;

        position: relative;
        float: left;
    }

    .right-container{
        position: relative;


    }
    .fans-list-container{

        margin-top: 20px;
        border-bottom: #9a6e3a solid 2px;
    }
    .right-container ul{

        height: 20px;
        margin-left: 0px;
        padding-left: 0px;
        list-style: none;

    }
    .right-container li{
        float: left;
        padding-right: 10px;
        margin-right: 10px;
        border-right: #D2B48C 1px solid;


    }
    .right-container .el-dropdown{
        position: relative;
        float: right;
        top: -80px;

    }
</style>