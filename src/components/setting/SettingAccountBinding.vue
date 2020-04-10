<template>
    <!--帐号绑定-->
    <div>


        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    <span class="setting-item">绑定qq帐号</span>
                    <span class="setting-curVal-item">未绑定</span>
                    <router-link class="setting-btn" to="/security">绑定</router-link>
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