<template>
    <!--偏好设置-->
    <div >

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">邮件提醒设置</span>
                    <span class="setting-curVal-item">设置接收哪些邮件提醒</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">图片水印设置</span>
                    <span class="setting-curVal-item">设置是否在微博图片上显示水印</span>
                    <router-link class="setting-btn" to="/security">编辑</router-link>
                </template>
            </el-collapse-item>
        </el-collapse>

        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">视频自动播放设置</span>
                    <span class="setting-curVal-item">设置视频进入信息流时是否自动播放，仅针对微博网页版</span>
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

            }
        },

        methods:{

        },

        created:{

        }
    }

</script>

<style scoped>


</style>