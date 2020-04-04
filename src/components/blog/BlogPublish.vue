<template>
    <div id="BlogPublish">
        <h1>发布微博</h1>
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="blogContent"
            maxlength="120"
            show-word-limit
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
                        <use xlink:href="#element-icon-alitupian1"></use>
                    </svg>
                </div>
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
                        <use xlink:href="#element-icon-alichuangjianhuati"></use>
                    </svg>
                </div>
            </el-col>
            <!--微博类型-->
            <el-col :span="2" :offset=6>
                <div class="grid-content bg-purple">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">公开<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">公开</el-dropdown-item>
                            <el-dropdown-item command="b">私有</el-dropdown-item>
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

export default {

    data(){
        return{

            emotionDisplay: false,
            blogContent: '',
        }
    },
    methods: {
        handleCommand(){

        },

        emotionChildSelect(emotion){
          console.log("子组件选择表情：" + emotion);
            this.blogContent += emotion;
        }
    },
    components:{
        Emotion,
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#BlogPublish{
    width: 100%;
    margin: 0px;
    padding: 0px;
}

.iconfont{
    width: 30px;
    height: 30px;
    margin-top: 10px;
}
</style>
