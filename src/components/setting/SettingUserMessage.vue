<template>
    <!--消息设置-->
    <div v-if="curItem == 3">
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">@我的</span>
                    <span class="setting-curVal-item">@我的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">评论</span>
                    <span class="setting-curVal-item">评论的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">赞</span>
                    <span class="setting-curVal-item">赞的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">私信</span>
                    <span class="setting-curVal-item">私信的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">未关注人的私信</span>
                    <span class="setting-curVal-item">未关注人的私信的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">新粉丝</span>
                    <span class="setting-curVal-item">新粉丝的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">好友圈</span>
                    <span class="setting-curVal-item">好友圈的相关设置</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>


    </div>
</template>

<script>

    export default {

        data() {
            return{
                userId: "",
            }
        },

        methods:{

        },

        created(){
            this.userId = this.$route.query.userId;

            console.log("userId = " + this.userId)
        }
    }

</script>

<style scoped>


</style>