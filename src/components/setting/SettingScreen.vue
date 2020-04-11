<template>
    <!--屏蔽设置-->
    <div >
        <el-collapse accordion >
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">屏蔽设置</span>
                    <span class="setting-curVal-item">你可以将用户加入屏蔽名单，并设置屏蔽范围</span>
                </template>
                <div style="max-height: 400px;overflow: auto">
                    <div>
                        <span>添加屏蔽帐号</span>
                        <el-input v-model="screenUserName" style="width: 250px;"></el-input>
                        <el-button  type="primary" style="margin-left: 40%;position: relative; margin-left: 0px" @click="addScreenUser">保存</el-button>
                    </div>

                    <span>屏蔽列表</span>
                    <div v-for="user in  screenUsers"
                         style="border: #969896 solid 1px; margin-bottom: 5px"
                    >
                        <img :src="user.headerImg" style="width: 50px;height: 50px"/>
                        <router-link :to="'/u/'+ user.userId">{{user.name}}</router-link>
                        <el-button style="float: right;margin-top: 5px" @click="screenUserRelease(user.userId)">解除屏蔽</el-button>

                    </div>
                </div>

            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">屏蔽关键词</span>
                    <span class="setting-curVal-item">你可以将关键词加入屏蔽名单，并设置屏蔽范围</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>

                <div style="height: 200px;overflow: auto">
                    <div>
                        <span>添加屏蔽关键词</span>
                        <el-input v-model="screenKeyword" style="width: 250px;"></el-input>
                        <el-button  type="primary" style="margin-left: 40%;position: relative; margin-left: 0px" @click="addScreenKeyword">保存</el-button>
                    </div>

                    <span>屏蔽列表:</span>
                    <div v-for="keyword in  screenKeywords"
                         style=" margin-bottom: 5px;width: 150px"
                    >
                        <span >{{keyword}}</span>
                        <el-link style="color: red;margin-left: 20px" @click="screenKeywordRelease(keyword)">解除屏蔽</el-link>

                    </div>
                </div>


            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">屏蔽微博</span>
                    <span class="setting-curVal-item">被屏蔽的微博可以在这里找到 </span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {

        data() {
            return{
                userId: "",

                //屏蔽的用户名
                screenUserName: "",
                //屏蔽的关键词
                screenKeyword: "",

                screenUsers:[
                    {
                        headerImg: "/img/test/1.jpg",
                        name: "星星之火",
                        userId: "1",

                    },
                    {
                        headerImg: "/img/test/1.jpg",
                        name: "蓝色幽梦",
                        userId: "2",

                    },
                    {
                        headerImg: "/img/test/1.jpg",
                        name: "蓝色幽梦",
                        userId: "3",

                    },

                ],

                screenKeywords:[
                    "哈哈",
                    "随便",
                ],
            }
        },

        methods:{

            /**
             * 查询已经屏蔽的列表
             */
            queryScreenUserList(){
                axios({
                    method: 'post',
                    url: "/api/setting/preference/emailremind",
                    data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                })
                .then((response) =>{          //这里使用了ES6的语法
                    if(response.data == true){
                        this.bindMsg = "已经绑定"
                    }
                    else {
                        this.bindMsg = "未绑定"
                    }
                })
                .catch((error) =>{
                    console.log(error)//请求失败返回的数
                    this.emailRemindWarn = "保存失败";
                } )
            },

            /**
             * 添加屏蔽用户
             */
            addScreenUser(){
                axios({
                    method: 'post',
                    url: "/api/setting/preference/emailremind",
                    data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                })
                .then((response) =>{          //这里使用了ES6的语法
                    if(response.data == true){
                        this.bindMsg = "已经绑定"
                    }
                    else {
                        this.bindMsg = "未绑定"
                    }
                })
                .catch((error) =>{
                    console.log(error)//请求失败返回的数
                    this.emailRemindWarn = "保存失败";
                } )
            },
            /*
            * 解除屏蔽
            * */
            screenUserRelease(userId){
                console.log("解除屏蔽　usedId:" + userId)

                axios({
                    method: 'post',
                    url: "/api/setting/preference/emailremind",
                    data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                })
                .then((response) =>{          //这里使用了ES6的语法
                    if(response.data == true){
                        this.bindMsg = "已经绑定"
                    }
                    else {
                        this.bindMsg = "未绑定"
                    }
                })
                .catch((error) =>{
                    console.log(error)//请求失败返回的数
                    this.emailRemindWarn = "保存失败";
                } )

            },

            /**
             * 查询已经屏蔽Keyword的列表
             */
            queryScreenKeywordList(){
                axios({
                    method: 'post',
                    url: "/api/setting/preference/emailremind",
                    data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                })
                    .then((response) =>{          //这里使用了ES6的语法
                        if(response.data == true){
                            this.bindMsg = "已经绑定"
                        }
                        else {
                            this.bindMsg = "未绑定"
                        }
                    })
                    .catch((error) =>{
                        console.log(error)//请求失败返回的数
                        this.emailRemindWarn = "保存失败";
                    } )
            },

            /**
             * 添加屏蔽关键词
             */
            addScreenKeyword(){
                axios({
                    method: 'post',
                    url: "/api/setting/preference/emailremind",
                    data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                })
                    .then((response) =>{          //这里使用了ES6的语法
                        if(response.data == true){
                            this.bindMsg = "已经绑定"
                        }
                        else {
                            this.bindMsg = "未绑定"
                        }
                    })
                    .catch((error) =>{
                        console.log(error)//请求失败返回的数
                        this.emailRemindWarn = "保存失败";
                    } )
            },
            /*
            * 解除关键词屏蔽
            * */
            screenKeywordRelease(keyword){
                console.log("解除屏蔽　keyword:" + keyword)

                axios({
                    method: 'post',
                    url: "/api/setting/preference/emailremind",
                    data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                })
                    .then((response) =>{          //这里使用了ES6的语法
                        if(response.data == true){
                            this.bindMsg = "已经绑定"
                        }
                        else {
                            this.bindMsg = "未绑定"
                        }
                    })
                    .catch((error) =>{
                        console.log(error)//请求失败返回的数
                        this.emailRemindWarn = "保存失败";
                    } )

            },
        },

        created(){
            this.userId = this.$route.query.userId;

            console.log("userId = " + this.userId)
        }
    }

</script>

<style scoped>


</style>