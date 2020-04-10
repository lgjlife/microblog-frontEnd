<template>
    <!--偏好设置-->
    <div >

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">邮件提醒设置</span>
                    <span class="setting-curVal-item">设置接收哪些邮件提醒</span>

                </template>
                <div>
                    <div style="margin-left: 30%">
                        <el-checkbox v-model="commentChecked">收到评论时邮件提醒</el-checkbox>
                    </div>
                    <div style="margin-left: 30%">
                        <el-checkbox v-model="likeChecked">收到点赞时邮件提醒</el-checkbox>
                    </div>
                    <el-button  type="primary" style="margin-left: 40%" @click="emailRemindSet">保存</el-button>
                    <div>
                        <span style="color: red; font-size: 15px; margin-left: 40%">{{emailRemindWarn}}</span>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">图片水印设置</span>
                    <span class="setting-curVal-item">设置是否在微博图片上显示水印</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div style="margin-left: 30%">
                    <el-radio v-model="watermarkDisRadio" label="1">显示</el-radio>
                    <el-radio v-model="watermarkDisRadio" label="2">不显示</el-radio>
                </div>
                <div style="margin-left: 20%">
                    <el-radio v-model="watermarkLocationRadio" label="1">底部居右</el-radio>
                    <el-radio v-model="watermarkLocationRadio" label="2">底部居中</el-radio>
                    <el-radio v-model="watermarkLocationRadio" label="3">图片中心</el-radio>
                </div>
                <el-button  type="primary" style="margin-left: 40%" @click="watermarkSet">保存</el-button>
                <div>
                    <span style="color: red; font-size: 15px; margin-left: 40%">{{watermarkWarn}}</span>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">视频自动播放设置</span>
                    <span class="setting-curVal-item">设置视频进入信息流时是否自动播放，仅针对微博网页版</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div style="margin-left: 35%">
                    <el-radio v-model="videoAutoDisRadio" label="1">打开</el-radio>
                    <el-radio v-model="videoAutoDisRadio" label="2">关闭</el-radio>
                </div>
                <el-button  type="primary" style="margin-left: 40%" @click="videoAutoDisSet">保存</el-button>
                <div>
                    <span style="color: red; font-size: 15px; margin-left: 40%">{{videoAutoDisWarn}}</span>
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

                commentRemindChecked: false,
                likeRemindChecked: false,

                watermarkDisRadio: "１",
                watermarkLocationRadio: "1",

                videoAutoDisRadio: "1",

                emailRemindWarn: "",
                watermarkWarn:"",
                videoAutoDisWarn:"",

            }
        },

        methods:{

            /**
             * 邮件提醒设置
             */
            emailRemindSet(){
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
            图片水印设置
             */
            watermarkSet(){
                axios({
                          method: 'post',
                          url: "/api/setting/preference/watermark",
                          data: {userId: this.userId,commentRemind: this.commentRemind,likeRemind: this.likeRemind },

                      })
                .then((response) =>{          //这里使用了ES6的语法

                })
                .catch((error) =>{
                    console.log(error)//请求失败返回的数
                    this.watermarkWarn = "保存失败";
                } )
            },

            /*
            视频自动播放设置
             */
            videoAutoDisSet(){
                axios({
                    method: 'post',
                    url: "/api/setting/preference/video",
                    data: {userId: this.userId, },

                })
                    .then((response) =>{          //这里使用了ES6的语法

                    })
                    .catch((error) =>{
                        console.log(error)//请求失败返回的数
                        this.videoAutoDisWarn = "保存失败";
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