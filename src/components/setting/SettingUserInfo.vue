<template>
    <!--我的信息-->
    <div >
        <el-collapse accordion>
            <el-collapse-item >
                <template slot="title" >
                    <span class="setting-item">登录名</span>
                    <span class="setting-curVal-item">{{loginName}}</span>
                    <router-link class="setting-btn" :to="{path:'/security',query:{index:0}}">修改密码</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item >
                <template slot="title" >
                    <span class="setting-item">手机号</span>
                    <span class="setting-curVal-item">{{phone}}</span>
                    <router-link class="setting-btn" :to="{path:'/security',query:{index:1}}">查看</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">昵称</span>
                    <span class="setting-curVal-item">{{curNickName}}</span>
                </template>
                <div>
                    <span style="font-weight: 400;font-size: 15px">现昵称:</span>
                    <span>{{curNickName}}</span>
                </div>
                <div>
                    <label style="font-weight: 400;font-size: 15px">新昵称:</label>
                    <el-input v-model="newNickName" style="width:200px"></el-input>
                    <el-button type="primary" @click="nickNameModify">保存</el-button>
                </div>

            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">基本信息</span>
                    <span class="setting-curVal-item">编辑</span>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">个人标签</span>
                    <span class="setting-curVal-item">完善资料</span>
                </template>
                <div >
                    <div>
                        <span>标签</span>
                        <el-input v-model="curAddUserLabel" style="width: 250px;"></el-input>
                        <el-button  type="primary" style="margin-left: 40%;position: relative; margin-left: 0px" @click="addUserLabel">保存</el-button>
                    </div>
                    <div class="square-inner grid">
                        <div  v-for="(userLabel, index) in userLabels" :index="index">
                            <div>
                                <span>
                                    {{userLabel}}
                                </span>
                                <el-link style="width: 40px;height: 30px;color: red;float: right;margin-right: 0px" @click="deleteUserLabel(index)">
                                    删除
                                </el-link>
                            </div>
                        </div>
                    </div>
                </div>

            </el-collapse-item>
        </el-collapse>



    </div>
</template>

<script>

    export default {

        data() {
            return{
                userId: "",

                loginName: "天堂美景",
                phone: "13926542331",
                curNickName:"皮皮虾",
                newNickName: "",

                curAddUserLabel: "",
                //个人标签
                userLabels: ["开心","快乐","幸福","容易知足","快乐1","幸福1","容易知足1","快乐2","幸福2","容易知足2"],
            }
        },

        methods:{


            nickNameModify(){


            },
            /*
            增加用户标签
             */
            addUserLabel(){

                console.log("增加的标签为:"+this.curAddUserLabel);

                this.curAddUserLabel = this.curAddUserLabel.trim()
                if(this.curAddUserLabel.length > 5){
                    alert("标签长度不能超过10")
                }
                if(this.curAddUserLabel != ""){
                    this.userLabels.push(this.curAddUserLabel);
                }

                for (label in this.userLabels){
                    console.log("label = " + label);
                }

            },
            /*
            删除用户标签
             */
            deleteUserLabel(index){

               console.log("删除的标签为:"+this.userLabels[index]);
            }
        },

        created(){
            this.userId = this.$route.query.userId;

            console.log("userId = " + this.userId)
        }
    }

</script>

<style scoped src="./setting.css"/>

<style scoped>

    .grid{
        display: grid;
        grid-template-columns: repeat(3, 4fr); /* 相当于 1fr 1fr 1fr */
        grid-template-rows: repeat(3, 4fr); /* fr单位可以将容器分为几等份 */
        grid-gap: 1%; /* grid-column-gap 和 grid-row-gap的简写 */
        grid-auto-flow: row;
    }
    .grid>div{
        color: black;
        font-size: 15px;
        width: 180px;
        line-height: 30px;
        text-align: left;
        margin-top: 10px;
        border: #9a6e3a 1px solid;
        /*background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);*/
    }

</style>