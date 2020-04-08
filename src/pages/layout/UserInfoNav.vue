<template>
    <div id="user-info-nav">

        <img id="header-img" :src=headerImgSrc >
        <el-link :href=userLink target="_blank">{{userName}}</el-link>

        <el-row :gutter="10">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-link :href=userLink target="_blank">
                        <span>208</span>
                        <br>
                        <span>关注</span>
                    </el-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-link :href=userLink target="_blank">
                        <span>208</span>
                        <br>
                        <span>粉丝</span>
                    </el-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-link :href=userLink target="_blank">
                        <span>208</span>
                        <br>
                        <span>微博</span>
                    </el-link>
                </div>
            </el-col>

        </el-row>

    </div>

</template>

<script>
    export default {

        data(){
            return{

                headerImgSrc: "/img/test/1.jpg",
                userName: "皮皮虾",
                userLink: "/user/123",
            }
        },

        props: {
            msg: String,


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #header-img{
        width: 60px;
        height: 60px;
    }
    #user-info-nav{
        background-color: whitesmoke;
        margin-bottom: 20px;
    }
</style>
