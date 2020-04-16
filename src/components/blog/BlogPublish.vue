<template>
    <div id="BlogPublish">
        <h1>发布微博</h1>
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="blogData.content"
            maxlength="120"
            show-word-limit
            rows="4"

        >
        </el-input>

        <el-row :gutter="1">
            <el-col :span="2" :offset=0>
                <!--表情-->
                <div class="grid-content bg-purple">

                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alibiaoqing" @click="emotionDisplay = !emotionDisplay"></use>
                    </svg>

                </div>
                <Emotion v-if="emotionDisplay" ref="emotionChild" style="position:absolute; z-index: 9999;" @emotionChildSelect="emotionChildSelect"></Emotion>

            </el-col>


            <!--图片-->
            <el-col :span="2" :offset=0>
                <div class="grid-content bg-purple">
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alitupian1" @click="uploadDisplay = !uploadDisplay"></use>
                    </svg>
                </div>
                <Upload v-if="uploadDisplay" style="position:absolute; z-index: 9999;"></Upload>
            </el-col>
            <!--视频-->
            <el-col :span="2" :offset=0>
                <div class="grid-content bg-purple">
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alishipin1"></use>
                    </svg>
                </div>

            </el-col>
            <!--话题-->
            <el-col :span="2" :offset=0>
                <div class="grid-content bg-purple">
                    <svg class="iconfont" aria-hidden="true">
                        <use xlink:href="#element-icon-alichuangjianhuati" @click="hotTopicDisplay = !hotTopicDisplay"></use>
                    </svg>
                </div>
                <HotTopic v-if="hotTopicDisplay" ref="topicChild" style="position:absolute; z-index: 9999;" @submit="topicChildSubmit"></HotTopic>
            </el-col>
            <!--微博类型-->
            <el-col :span="2" :offset="0">
                <div class="grid-content bg-purple">
                    <el-dropdown @command="handleBlogTypeSelectCommand" style="margin-top: 10px">
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
            </el-col>
            <!--发布按钮-->
            <el-col :span="1" :offset="0">
                <div class="grid-content bg-purple">
                    <el-button type="success">发布</el-button>
                </div>
            </el-col>

        </el-row>

    </div>

</template>

<script>

import Emotion from '@/components/common/Emotion.vue'
import Upload from '@/components/common/Upload.vue'
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
            uploadDisplay: false,
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
        }
    },
    components:{
        //表情包
        Emotion,
        //上传
        Upload,
        //热门话题
        HotTopic,
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
    margin-top: 10px;
}
</style>
