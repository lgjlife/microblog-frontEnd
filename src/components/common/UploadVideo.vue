<!--
名称: 上传视频组件

使用:

父组件: <UploadVideo v-show="uploadDisplay" ref="UploadVideoRef"></UploadVideo>
获取照片,为FormData格式
this.$refs.UploadVideoRef.getFilesFormData()

fd.append('videoFile',this.videoFile);
fd.append('videoTitle',this.videoTitle);
fd.append('videoDesc',this.videoDesc);

其中data为base64数据
-->
<template>
    <div class="upload-container">
        <div>
            <!--标题栏-->
            <div class="upload-header">
                <!--上传按钮-->
                <div class="upload-btn">
                    <input type="file"
                          class="up_add "
                          id="file"
                          @change="change"
                          accept="video/*"
                    />
                </div>
                <!--删除按钮-->
                <el-button  class="delete-video-btn" @click="deleteVideo">删除</el-button>
            </div>
            <!--提示 v-if="videoName != ''"-->
            <div class="upload-msg" v-if="videoName != ''">
                {{videoName}}/{{videoSize}}M
            </div>


            <!--图片列表-->

            <div class="video-block">
                <div>
                    标题
                    <el-input
                            type="text"
                            placeholder="请输入标题"
                            v-model="videoTitle"
                            maxlength="30"
                            show-word-limit
                    >
                    </el-input>
                    描述
                    <el-input
                            type="textarea"
                            placeholder="请输入描述"
                            v-model="videoDesc"
                            maxlength="60"
                            show-word-limit
                    />
                </div>

                <!--<div class="video-block-cover">-->
                    <!--<label ref="">封面</label>-->
                    <!--<img  src="/img/test/1.jpg"/>-->
                <!--</div>-->

            </div>

        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                videoFile: "",
                videoName: "",
                videoSize: "",



                videoTitle: '',
                videoDesc: "",
            };
        },
        methods: {

            //选择照片事件
            change(ev){
                console.log("选择文件");

                console.log(ev.target);

                var _1M = (1000000)

                this.videoFile = ev.target.files[0];
                this.videoName = this.videoFile.name
                this.videoSize = (this.videoFile.size/_1M).toFixed(2)

                console.log(this.videoFile);
            },

            //删除视频
            deleteVideo(){

                //清空input里面的数据
                var file = document.getElementById('file');
                file.value = '';

                this.videoFile = ''
                this.videoName = ''
                this.videoSize = ''

            },

            //对外接口
            getFilesFormData(){

                if(this.videoFile == ''){
                    return null
                }
                 var fd = new FormData();

                fd.append('videoFile',this.videoFile);
                fd.append('videoTitle',this.videoTitle);
                fd.append('videoDesc',this.videoDesc);

                return fd;
            }

        }
    }
</script>

<style scoped>

    .upload-container{
        background-color: #e9e9e9;
        min-width: 400px;
        min-height: 100px;

        position:absolute;
        z-index: 9999;

        border: 1px solid #ee9900;

    }

    .up_add {
        width: 30px;
        height: 30px;
        opacity: 0;
    }
    .upload-btn {
        width: 30px;
        height: 30px;
        background-image: url(/img/icon/timg.jpeg);
        background-size: 40px;

        float: left;

    }

    .upload-header{
        background-color: #fffdef;
        float: left;
        width: 100%;
    }

    .upload-msg{

        height: 70px;
        background-color: #b3d4fc;
        text-align: center;
    }

    .video-block-cover img{
        width:160px;
    }

    .delete-video-btn{
        float: right;
    }


</style>