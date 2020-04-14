<template>
    <div >
        <!--页头-->
        <HeaderNav ></HeaderNav>

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
            <div style="clear:both;"></div>

        </div>
    </div>
</template>

<script>

    import HeaderNav from '@/pages/layout/Header-nav.vue'
    import axios from 'axios'

    export default {

        data(){
            return{

                userId: "",
                curItem: 0,
                title: "",
                options:[
                    {name: "我的信息",index:0,path: '/setting/user/info',},
                    {name: "头像",index:1,path: '/setting/header/img',},
                    {name: "隐私设置",index:2,path: '/setting/user/privater',},
                    {name: "消息设置",index:3,path: '/setting/user/message',},
                    {name: "屏蔽设置",index:4,path: '/setting/screen',},
                    {name: "偏好设置",index:5,path: '/setting/preference',},
                    {name: "帐号绑定",index:6,path: '/setting/bind',},

                ],

            }
        },
        methods:{
            optionSelect(index){
                this.curItem = index;
                this.title = this.options[index].name;

                this.$router.push({path: this.options[index].path,query:  { userId: this.userId}})
            },

        },

        components:{
            HeaderNav,
        },

        created(){
            this.userId = this.$route.query.userId;

            console.log("userId = " + this.userId)
        }


    }

</script>

<style scoped src="./setting.css"/>

<style scoped>

</style>