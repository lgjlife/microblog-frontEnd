<template>
    <!--帐号绑定-->
    <div >


        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">绑定QQ帐号</span>
                    <span class="setting-curVal-item">
                        <span v-if="qqBindFlag">已经绑定</span>
                        <span v-else>进行绑定</span>
                    </span>
                </template>
                <div>
                    <el-button type="primary" @click="qqLogin" style="margin-left: 41%">
                        <span>
                            <span v-if="qqBindFlag">更换绑定</span>
                            <span v-else>立即绑定</span>
                        </span>
                    </el-button>
                </div>
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
                qqBindFlag: "",
                bindMsg: "未绑定",
            }
        },

        methods:{
            /*
            QQ登录请求
             */
            qqLogin()
            {
                var qqAppId = '101490224'; // 上面申请得到的appid
                var qqAuthPath = 'http://localhost:8066'; // 前面设置的回调地址
                var state = 'fjdslfjsdlkfd'; // 防止CSRF攻击的随机参数，必传，登录成功之后会回传，最好后台自己生成然后校验合法性
                var url = `https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=${qqAppId}&redirect_uri=${encodeURIComponent(qqAuthPath)}&state=${state}`;
                window.open(url);
            },

            /*
            查询绑定状态
             */
            queryBindState(){
                axios({
                    method: 'get',
                    url: "/api/bind/state",
                    data: {userId: this.userId},

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
                } )
            }
        },

        created(){
            this.userId = this.$route.query.userId;

            this.queryBindState();

            console.log("userId = " + this.userId)
        }
    }

</script>

<style scoped src="./setting.css"/>

<style scoped>


</style>