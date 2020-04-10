<template>
    <!--屏蔽设置-->
    <div >
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">屏蔽设置</span>
                    <span class="setting-curVal-item">你可以将用户加入屏蔽名单，并设置屏蔽范围</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">屏蔽关键词</span>
                    <span class="setting-curVal-item">你可以将关键词加入屏蔽名单，并设置屏蔽范围</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
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