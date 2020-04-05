<template>
    <div class="hot-topic">
        <h1>热门话题</h1>
        <div class="input">
            <el-input placeholder="请输入内容" v-model="topic">
                <div slot="append" @click="submit">确认</div>
            </el-input>
        </div>

        <div class="display">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">最近使用</el-menu-item>
                <el-menu-item index="2">热门</el-menu-item>
                <el-menu-item index="3">美食</el-menu-item>
                <el-menu-item index="4">旅游</el-menu-item>
            </el-menu>
        </div>
        <div>
            <div v-for="(item,index) in topicList" @click="topicSelect">{{item}}</div>
        </div>


    </div>

</template>

<script>
    export default {
        data() {
            return {
                topic: "",
                activeIndex: '1',
                topicList: "",
                topics:{
                    latelyUseTopics: ["鸡腿","鸭腿"],
                    hotTopics: ["鸡腿1","鸭腿1"],
                    deliciousFoodTopics: ["鸡腿2","鸭腿2"],
                    tourTopics: ["鸡腿3","鸭腿3"],
                },

            };
        },
        methods: {
            //话题类型选择
            handleSelect(key, keyPath) {
                console.log(key+ "  " + keyPath);

                this.displayTopicList(key);
            },
            //显示话题列表
            displayTopicList(index){
                if(index == 1){
                    this.topicList = this.topics.latelyUseTopics;
                }
                else if (index == 2){
                    this.topicList = this.topics.hotTopics;
                }
                else if (index == 3){
                    this.topicList = this.topics.deliciousFoodTopics;
                }
                else if (index == 4){
                    this.topicList = this.topics.tourTopics;
                }
            },
            //话题选择
            topicSelect(bk){
                console.log("选中的话题=" + bk.target.innerHTML);
                this.topic = this.createTopic(bk.target.innerHTML)
                this.submitToParent();
            },
            submit(){
                this.topic = this.createTopic(this.topic)
                this.submitToParent();
            },

            //
            submitToParent(){
                this.$emit('submit',this.topic);
            },

            //创建主题，添加#
            createTopic(topic){
                return "#"+topic+"#";
            }



        },


        mounted() {
            this.displayTopicList(1);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hot-topic{
    background-color: #f57a7a;
}
</style>
