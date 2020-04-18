<!--
名称: 上传图片组件

使用:

父组件: <UploadImg v-show="uploadDisplay" ref="UploadImgRef"></UploadImg>
获取照片,为FormData格式
this.$refs.UploadImgRef.getFilesFormData()

fileList[
    {
        name: "",
        data: "",
    }
]

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
                           class="up_add"
                           @change="change"
                           id="exampleInputFile"
                           accept="image/gif,image/jpeg,image/jpg,image/png"
                    />
                </div>
                <!--上传提示-->
                <div class="upload-point">
                    <span style="color: #ee9900;font-weight: 300">仅限gif,jpeg,jpg,png格式文件</span>
                </div>

            </div>
            <!--提示-->
            <div style="color: #55a532;font-weight: 900">
                已经上传{{fileList.length}}张，还能上传{{MAX_IMAGE_COUNT-fileList.length}}张
            </div>

            <!--图片列表-->

            <div class="img-block">
                <ul>
                    <li v-for="(image,index) in fileList" :index="index">
                        <img :src="image.data"/>
                        <span class="image-name">{{image.name}}</span>
                        <el-button @click="deleteImg(index)">删除</el-button>
                    </li>
                </ul>

            </div>

        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

                MAX_IMAGE_COUNT: 9,

                fileList: [

                ]
            };
        },
        methods: {

            //选择照片事件
            change(ev){
                let that = this
                if(this.fileList.length == this.MAX_IMAGE_COUNT){
                    alert("最多上传9张图片")
                    return;
                }
                var fileData = {name:'',data:''}
                fileData.name = ev.target.files[0].name
                var reader = new FileReader();
                reader.onload = (function (file) {
                    return function (e) {

                        console.log(this);
                        //这个就是base64的数据了
                        fileData.data = this.result
                        that.fileList.push(fileData)

                        //console.log("fileData = " + fileData.data);
                    };
                })(ev.target.files[0]);
                reader.readAsDataURL(ev.target.files[0]);
            },

            //删除照片
            deleteImg(index){
                this.fileList.splice(index,1)
            },

            //图片base数据转化成FormData数据
            //data:image/jpeg;base64,/9j/4VOYRXhpZgAAS
            //返回　{blog:"",suffix: ""}
            base64ToFormBlog(base64Data){

                var fileBlogData={blog:"",suffix: ""}
                //文件类型
                var mimeType = base64Data.split(':')[1].split(';')[0];
                //实际的base 数据
                var base64Byte = window.atob(base64Data.split(',')[1]);

                var array = [];
                for(var i = 0; i < base64Byte.length; i++){
                    array.push(base64Byte.charCodeAt(i));
                }
                var blob = new Blob([new Uint8Array(array)], {type: mimeType});

                fileBlogData.blog = blob;
                fileBlogData.suffix = mimeType.split('.')[1];

                return fileBlogData;
            },

            //对外接口
            getFilesFormData(){

                if(fileList.length == 0){
                    return null;
                }

                var fd = new FormData();

                var files = []

                for(file in fileList){
                    var fileBlogData = this.base64ToFormBlog(file.data);

                    files.push(fileBlogData.blob)

                }
                //FormData对象接受三个参数，第三个参数为文件名，通常我们只传前两个参数，第三个参数不传则使用默认文件名，这里使用的Blob对象，所以需要一个文件名，用时间戳代替。
                fd.append('imges',files);

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

    .img-block ul{
        margin-left: 0px;
        padding-left: 0px;
        list-style: none;
    }
    .img-block li{

        border: 1px sienna solid;
    }
    .img-block img{
        width: 50px;
        height: 50px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    .img-block .el-button{
        float: right;
        margin-top: 5px;
    }
    .img-block .image-name{
        position: relative;
        margin-left: 10px;
        bottom: 20px;
    }

</style>