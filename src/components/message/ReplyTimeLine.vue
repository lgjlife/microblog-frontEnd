<template>
    <div style="width: 500px">
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="500px"
                :before-close="handleClose">
            <div class="block">
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/12 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/3" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/3 20:46</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2018/4/2" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>

        </el-dialog>
    </div>


</template>


<script>

    export default {

        props:{
            dialogVisible:{
                default: "false"
            },
            index:{
                default: "",
            }
        },
        data(){
            return{
                // dialogVisible: true,
            }
        },

        methods:{

            handleClose(done) {
               // done();
                console.log("handleClose");

                this.$parent.closeReplyTimeLine(this.index)
                // this.dialogVisible = true
            },
        }
    }
</script>

<style scoped>

</style>