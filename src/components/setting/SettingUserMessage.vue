<template>
    <!--消息设置-->
    <div >

        <!--@我的-->
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">@我的</span>
                    <span class="setting-curVal-item">@我的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span style="color: black">我可以收到哪些人的@消息</span>
                    <div>
                        <template>
                            <el-radio v-model="cueRadio" label="1">所有人</el-radio>
                            <el-radio v-model="cueRadio" label="2">我关注的人</el-radio>
                        </template>
                    </div>
                    <el-button type="primary">保存</el-button>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">评论</span>
                    <span class="setting-curVal-item">评论的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span>允许哪些人评论我</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">所有人</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">我关注的人</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="3">仅粉丝</el-radio>
                        </template>
                    </div>

                    <span>是否允许其他人在我的微博评论中发图片</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">允许</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">不允许</el-radio>
                        </template>
                    </div>

                    <span>我将收到这些人的评论小黄签提醒</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">所有人</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">我关注的人</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="3">不提醒</el-radio>
                        </template>
                    </div>

                    <span>我参与的（开启后，若评论了一条微博，我将收到“关注的人”对这条微博的评论）</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">提醒</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">不提醒</el-radio>
                        </template>
                    </div>

                </div>

            </el-collapse-item>


        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">赞</span>
                    <span class="setting-curVal-item">赞的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span>我参与的（开启后，若赞了一条微博，我将收到“关注的人”对这条微博的赞）</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">开启</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">不开启</el-radio>
                        </template>
                    </div>

                    <span>我是否接收私信提醒</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">开启</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">不开启</el-radio>
                        </template>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">私信</span>
                    <span class="setting-curVal-item">私信的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span>我可以收到哪些人的私信</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">所有人</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">我关注的人</el-radio>
                        </template>
                    </div>

                    <span>我是否接收私信提醒</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">提醒</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">不提醒</el-radio>
                        </template>
                    </div>


                    <el-button type="primary" @click="frendsRemaind">保存</el-button>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">未关注人的私信</span>
                    <span class="setting-curVal-item">未关注人的私信的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span>我是否接收未关注人私信的小黄签提醒</span>
                    <div>
                        <template>
                            <el-radio v-model="unConcernMsgRadio" label="1">提醒</el-radio>
                            <el-radio v-model="unConcernMsgRadio" label="2">不提醒</el-radio>
                        </template>
                    </div>
                    <el-button type="primary" @click="frendsRemaind">保存</el-button>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">新粉丝</span>
                    <span class="setting-curVal-item">新粉丝的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span>我将收到这些人的新粉丝小黄签提醒</span>
                    <div>
                        <template>
                            <el-radio v-model="newFansRadio" label="1">所有人</el-radio>
                            <el-radio v-model="newFansRadio" label="2">我关注的人</el-radio>
                            <el-radio v-model="newFansRadio" label="3">不提醒</el-radio>
                        </template>
                    </div>
                    <el-button type="primary" @click="frendsRemaind">保存</el-button>
                </div>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">好友圈</span>
                    <span class="setting-curVal-item">好友圈的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
                <div>
                    <span>我是否接收好友圈的小黄签提醒</span>
                    <div>
                        <template>
                            <el-radio v-model="frendsRemaindRadio" label="1">提醒</el-radio>
                            <el-radio v-model="frendsRemaindRadio" label="2">不提醒</el-radio>
                        </template>
                    </div>
                    <el-button type="primary" @click="frendsRemaind">保存</el-button>
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

                cueRadio: "1",
                newFansRadio: "1",
                frendsRemaindRadio:"1",
            }
        },

        methods:{


            /*
            好友圈的小黄签提醒保存
             */
            frendsRemaind(){

            }
        },

        created(){
            this.userId = this.$route.query.userId;

            console.log("userId = " + this.userId)
        }
    }

</script>

<style scoped>


</style>