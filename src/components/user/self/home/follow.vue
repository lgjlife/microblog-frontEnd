<template>
    <div>
        <!--标题-->
        <div>
            <span>关注:</span><span>{{followers.length}}</span>
            <el-input placeholder="请输入内容"
                      v-model="searchName"
                      class="input-with-select"
                      style="width: 400px;border: sienna solid 1px;float: right"

            >
                <el-button
                        slot="append"
                        icon="el-icon-search"
                        style="border: sienna solid 1px;float: right;color: red"
                ></el-button>
            </el-input>
        </div>
        <!--关注列表-->
        <div class="follower-container">
            <div class="square-inner grid">
                <div v-for="(follower, index) in followers" :index="index" class="follower-item-container">
                    <div class="follower-item-left">
                        <el-avatar :size="60">
                            <img :src="follower.headerImageUrl"/>
                        </el-avatar>
                    </div>
                    <div class="follower-item-right">
                        <div style="font-weight: 900">
                            {{follower.userName}}
                        </div>
                        <div style="color: #CD853F;font-size: 15px">
                            {{follower.desc}}
                        </div>

                        <el-button type="primary"
                                   style="min-width: 80px; padding: 0px ;font-size: 15px;height: 30px">
                            选择分组<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>

                        <el-dropdown @command="handleCommand">
                            <span class="el-dropdown-link">
                                <svg class="iconfont setIcon" aria-hidden="true">
                                    <use xlink:href="#element-icon-alishezhi" ></use>
                                </svg>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">设置备注</el-dropdown-item>
                                <el-dropdown-item command="b">私信</el-dropdown-item>
                                <el-dropdown-item command="c">取消关注</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>

        <!--分页-->
        <div style="text-align: center">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import BlogDisplay from '@/components/blog/BlogDisplay.vue'
    export default {
        data(){
            return{
                searchName: "",
                followers:  [
                    {
                        headerImageUrl: "/img/test/1.jpg",
                        userName: "明天会更好",
                        userId: 1,
                        desc: "生活是为了什么",
                    },
                    {
                        headerImageUrl: "/img/test/1.jpg",
                        userName: "明天会更好",
                        userId: 1,
                        desc: "生活是为了什么",
                    },
                    {
                        headerImageUrl: "/img/test/1.jpg",
                        userName: "明天会更好",
                        userId: 1,
                        desc: "生活是为了什么",
                    },
                    {
                        headerImageUrl: "/img/test/1.jpg",
                        userName: "明天会更好",
                        userId: 1,
                        desc: "生活是为了什么",
                    },

                ],
            }
        },

        methods:{
            handleCommand(command){

            }
        },

        created(){

        },
        components:{
            BlogDisplay,
        }
    }
</script>

<style scoped>

    .follower-container{

    }
    .follower-item-container{

        margin: 20px 20px 20px 20px;
        border-right: black solid 2px;

    }
    .follower-item-left{
        width: 70px;
        border-right: #9a6e3a solid 1px;
        position: relative;
        float: left;

    }
    .follower-item-right{

        position: relative;
        float: left;
        left: 10px;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 相当于 1fr 1fr 1fr */
        grid-template-rows: repeat(2, 1fr); /* fr单位可以将容器分为几等份 */
        grid-gap: 1%; /* grid-column-gap 和 grid-row-gap的简写 */
        grid-auto-flow: row;
        width: 720px;

    }
    .grid+div{
        /*color: #f5f2f0;*/
        /*font-size: 20px;*/
        /*width: 200px;*/
        /*height: 200px;*/

        /*background-color: #9a6e3a;*/

        /*line-height: 0;*/
        /*background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);*/
    }

    .setIcon{
        width: 30px;
        margin: 0px 0px 0px 10px;
        float: right;
        position: absolute;
        height:30px;
        top: -20px

    }


</style>