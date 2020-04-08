<template>
    <div id="left-side-nav">

        <div>
            <span>热门话题</span>
            <i class="el-icon-refresh-right iconfont"></i>
        </div>
        <div >
            <div v-for="item in items" class="hot-item">

                <el-row :gutter="20">
                    <el-col :span="18">
                        <div class="grid-content bg-purple">
                            <el-link :href=item.link>{{item.name}}</el-link>

                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <span >{{item.count}}</span>
                        </div>
                    </el-col>
                </el-row>


            </div>
        </div>
    </div>

</template>

<script>
    export default {

        data(){
            return{
                items:[
                    {
                        name: "#成年人常见潜台词#",
                        link: "/",
                        count: "4027万",
                    },

                    {
                        name: "#你为追星做过最拼的事#",
                        link: "/",
                        count: "4127万",
                    },

                    {
                        name: "#钟南山呼吁续保...#",
                        link: "/",
                        count: "4227万",
                    },

                    {
                        name: "#瑞幸咖啡道歉#",
                        link: "/",
                        count: "4327万",
                    }
                ],
            }
        },

        props: {
            msg: String,


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .iconfont{
        width: 20px;
        height: 20px;

        position: relative;
        float: right;
        right: 20px;
    }
    .hot-item{
        width: 300px;
    }
    .hot-name{
        position: relative;
        float: left;
        left: 0px;
    }
    .hot-count{
        position: relative;
        float: right;
        right: 0px;

    }
</style>
