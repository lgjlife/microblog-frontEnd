<template>
    <div id="blog-display">

        <div class="blog-content" v-for="(blog,index) in blogDatas" :index=index>
            <!--左侧-->
            <div class="header-block">
                <div class="header-img-div">
                    <!--头像显示-->
                    <el-avatar :size="60">
                        <img :src="blog.user.headerImgUrl"/>
                    </el-avatar>
                </div>

                <div class="user-name-div">
                    <!--用户名显示-->
                    <span   class="user-name"
                            @click="openUserPage(blog.user.userId)"
                            :class="{'user-name-active':curMouseoverUsernameIndex==index}"
                            @mouseover="curMouseoverUsernameIndex=index"
                            @mouseout="curMouseoverUsernameIndex=-1"

                    >{{blog.user.name}}</span>

                    <span class="publish-time">{{caculTime(blog.publishTime)}}</span>
                </div>
            </div>
            <div class="mid-block">
                <div>
                    <!--文字内容显示-->
                    <span>{{blog.content}}</span>
                    <!--图片显示-->
                    <div class="square-inner grid" v-if="blog.imageFlag">
                        <div @click.self="addPhiz" v-for="(url, index) in blog.images" :key="index">

                            <div class="demo-image_preview">
                                <el-image
                                        style="width: 160px; height: 120px"
                                        :src="url"
                                        :preview-src-list="blog.images">
                                </el-image>
                            </div>
                        </div>
                    </div>
                    <!--视频显示-->
                    <Video v-if="blog.videoFlag"></Video>
                </div>
            </div>

            <div class="footer-block">
                <ul>
                    <li @click="blogHandle('comment')">
                        <svg class="iconfont" aria-hidden="true">
                            <use xlink:href="#element-icon-alipinglun" ></use>
                        </svg>
                        评论<span v-if="blog.commentCount != 0">({{blog.commentCount}})</span>
                    </li>
                    <li @click="blogHandle('repost')">
                        <svg class="iconfont" aria-hidden="true">
                            <use xlink:href="#element-icon-alizhuanfa-" ></use>
                        </svg>
                        转发<span v-if="blog.repostCount != 0">({{blog.repostCount}})</span>
                    </li>
                    <li @click="blogHandle('collect')">
                        <svg class="iconfont" aria-hidden="true">
                            <use xlink:href="#element-icon-alishoucang1" ></use>
                        </svg>
                        收藏<span v-if="blog.collectCount != 0">({{blog.collectCount}})</span>
                    </li>
                    <li @click="blogHandle('like')">
                        <svg class="iconfont" aria-hidden="true">
                            <use xlink:href="#element-icon-alidianzan" ></use>
                        </svg>
                        点赞<span v-if="blog.likeCount != 0">({{blog.likeCount}})</span>
                    </li>
                </ul>
            </div>


        </div>
    </div>

</template>

<script>
    import {TIME_CHANGE} from "@/util/time/time.js"
    import Video from '@/components/video/Video.vue'
    import  * as pathRouter  from "@/apis/common/pathRouter.js"


    export default {
        data(){
            return{
                activeIndex: '1',
                input3: "",

                curMouseoverUsernameIndex: 0,


                blogDatas: [

                    {
                        user:{
                            headerImgUrl: "/img/user/ori.png",
                            name: "李白",
                            userId: "123",
                        },
                        publishTime: 1586867298000,
                        content: "一早随郁荣誉主席到慈湖谒陵\n" +
                            "纪念先总统蒋介石先生逝世日\n" +
                            "这个曾经游客如织的地方 \n" +
                            "自从蔡当局借口泼漆事件后维安需要\n" +
                            "从此被半封闭了起来\n" +
                            "加上大陆观光团减少",
                        collectCount: 1,
                        repostCount: 556,
                        commentCount: 1,
                        likeCount: 0,
                        imageFlag: true,
                        images: [
                            "/img/test/1.jpg",
                            "/img/test/2.jpg",
                            "/img/test/3.jpg",
                            "/img/test/4.jpg",
                            "/img/test/5.jpg",
                            "/img/test/6.jpg",
                            "/img/test/7.jpg",
                            "/img/test/8.jpg",
                            "/img/test/9.jpg",
                        ],

                        videoFlag: false,
                        video:{

                        }
                    },

                    {
                        user:{
                            headerImgUrl: "/img/user/ori.png",
                            name: "李白",
                            userId: "123",
                        },
                        publishTime: 1586867298000,
                        content: "一早随郁荣誉主席到慈湖谒陵\n" +
                            "纪念先总统蒋介石先生逝世日\n" +
                            "这个曾经游客如织的地方 \n" +
                            "自从蔡当局借口泼漆事件后维安需要\n" +
                            "从此被半封闭了起来\n" +
                            "加上大陆观光团减少",
                        collectCount: 1,
                        repostCount: 0,
                        commentCount: 2,
                        likeCount: 3,

                        imageFlag: false,
                        images: [
                            "/img/test/1.png",
                            "/img/test/2.png",
                            "/img/test/3.png",
                            "/img/test/4.png",
                            "/img/test/5.png",
                            "/img/test/6.png",
                            "/img/test/7.png",
                            "/img/test/8.png",
                            "/img/test/9.png",
                        ],
                        videoFlag: true,
                        video:{

                        }
                    }
                ],


            }

        },
        methods:{

            caculTime(time){
                return TIME_CHANGE(time)
            },

            blogHandle(type){

                console.log("type = " + type);

                if(type == "comment"){
                    this.$router.push("/blog/"+1 + "/"  + "123")
                }
            },

            openUserPage(userId){
                pathRouter.openOtherUserPage(this,userId)
            }
        },

        components:{
            Video,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped　src="./css/BlogDisplay.css">
<style scoped>

</style>
