<template>
    <div>
        <!--页头-->
        <HeaderNav></HeaderNav>

        <div class="setting-container">
            <div class="left-nav">
                <div class="header">帐号设置</div>
                <div class="options-nav">
                    <ul>
                        <li class="options-item"
                            v-for="(option,index) in options"
                            :index=index
                            @click="optionSelect(index)"
                            :class="{'options-item-active':curItem == index}"
                        >
                            {{option.name}}
                        </li>
                    </ul>
                </div>

            </div>
            <div class="right-nav">
                <div class="title">
                    {{options[curItem].name}}
                </div>
                <router-view class="interface"></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    import "./setting.css"
    import HeaderNav from '@/pages/layout/Header-nav.vue'
    import axios from 'axios'

    export default {

        data(){
            return{

                curItem: 0,
                title: "",
                options:[
                    {
                        name: "我的信息",
                        index:0,
                        path: '/setting/user/info',
                    },
                    {
                        name: "头像",
                        index:1,
                        path: '/setting/header/img',
                    },
                    {
                        name: "隐私设置",
                        index:2,
                        path: '/setting/user/privater',
                    },
                    {
                        name: "消息设置",
                        index:3,
                        path: '/setting/user/message',
                    },
                    {
                        name: "屏蔽设置",
                        index:4,
                        path: '/setting/screen',
                    },
                    {
                        name: "偏好设置",
                        index:5,
                        path: '/setting/preference',
                    },
                    {
                        name: "帐号绑定",
                        index:6,
                        path: '/setting/bind',
                    },

                ],

                loginName: "用心良苦",
                phoneNum: "13925716532",
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        methods:{
            optionSelect(index){
                this.curItem = index;
                this.title = this.options[index].name;

                this.$router.push(this.options[index].path)
            },

            //上传文件
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }


        },

        components:{
            HeaderNav,
        },


    }

</script>


<style scoped>

</style>