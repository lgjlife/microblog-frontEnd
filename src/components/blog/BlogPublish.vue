<template>
    <div id="BlogPublish">
        <h3>发布内容</h3>

        <!--输入框-->
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="blogData.content"
            maxlength="120"
            show-word-limit
            autosize

        >
        </el-input>

        <!--工具-->
        <div class="tools-block">
            <ul>
                <!--表情-->
                <li>
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alibiaoqing" @click="emotionDisplay = !emotionDisplay"></use>
                    </svg>
                    <Emotion v-if="emotionDisplay" ref="emotionChild" style="position:absolute; z-index: 9999;" @emotionChildSelect="emotionChildSelect"></Emotion>
                </li>

                <!--图片-->
                <li>
                    <svg class="iconfont" aria-hidden="true" @click="uploadImageDisplay = !uploadImageDisplay">
                        <use xlink:href="#element-icon-alitupian1" ></use>
                    </svg>

                    <UploadImg v-show="uploadImageDisplay" ref="UploadImgRef"></UploadImg>
                </li>

                <!--视频-->
                <li>
                    <svg class="iconfont" aria-hidden="true"  @click="uploadVideoDisplay = !uploadVideoDisplay">
                        <use xlink:href="#element-icon-alishipin1"></use>
                    </svg>
                    <UploadVideo v-show="uploadVideoDisplay" ref="UploadVideoRef"></UploadVideo>

                </li>

                <!--话题-->
                <li>
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alichuangjianhuati" @click="hotTopicDisplay = !hotTopicDisplay"></use>
                    </svg>
                    <HotTopic v-if="hotTopicDisplay" ref="topicChild" style="position:absolute; z-index: 9999;" @submit="topicChildSubmit"></HotTopic>
                </li>

                <!--文章-->
                <li>
                    <svg class="iconfont" aria-hidden="true" @click="articleIconClick">
                        <use xlink:href="#element-icon-aliwenzhang2-copy-copy"></use>
                    </svg>
                    <HotTopic v-if="hotTopicDisplay" ref="topicChild" style="position:absolute; z-index: 9999;" @submit="topicChildSubmit"></HotTopic>
                </li>


                <!--微博类型-->
                <li>
                    <div >
                        <el-dropdown @command="handleBlogTypeSelectCommand" >
                        <span class="el-dropdown-link">
                            {{ blogData.type.name }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="公开">公开</el-dropdown-item>
                                <el-dropdown-item command="私密">私密</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </li>
            </ul>

            <!--发布按钮-->
            <div >
                <el-button type="success">发布</el-button>
            </div>

        </div>


    </div>

</template>

<script>

import Emotion from '@/components/common/Emotion.vue'
import UploadImg from '@/components/common/UploadImg.vue'
import UploadVideo from '@/components/common/UploadVideo.vue'
import HotTopic from '@/components/blog/HotTopic.vue'

var blogType = {

    publicType: {
        code: 0,
        name: "公开",
    },
    privateType: {
        code: 1,
        name: "私密",
    }
}


export default {

    data(){
        return{

            emotionDisplay: false,
            uploadImageDisplay: false,
            uploadVideoDisplay: false,
            hotTopicDisplay: false,

            blogData:{
                //内容
                content: '',
                //类型,  0-公开，１－私有
                type: blogType.publicType,
                //图片
                imageLists: "",
                //视频
                video: "",
            }

        }
    },
    methods: {
        //微博类型选择
        handleBlogTypeSelectCommand(command){
            console.log(command);
            if(command == blogType.publicType.name){
                console.log("publicType");
                this.blogData.type = blogType.publicType;
            }
            else if(command == blogType.privateType.name){

                console.log("privateType");
                this.blogData.type = blogType.privateType
            }
        },

        /**
        表情包子组件选择表情
         */
        emotionChildSelect(emotion){
          console.log("子组件选择表情：" + emotion);
            this.blogData.content += emotion;
        },
        //话题确认
        topicChildSubmit(){
            this.hotTopicDisplay = false;
            this.blogData.content += this.$refs.topicChild.topic;
        },

        /*
        *点击文章图标，跳转到文章页面
        */
        articleIconClick(){
            this.$router.push('/article')
        }
    },
    components:{
        //表情包
        Emotion,
        //上传
        UploadImg,
        //热门话题
        HotTopic,
        //视频上传
        UploadVideo,
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#BlogPublish{
    background-color: #fffdef;
}

    .iconfont{
        width: 30px;
        height: 30px;

    }

    .tools-block{

    }
    .tools-block ul{
        margin-left: 0px;
        padding-left: 0px;

        list-style: none;
    }
    .tools-block li{
        float: left;
        width: 40px;
    }

</style>
