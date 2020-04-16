<template>
    <div id="blog-display">

        <div class="blog-content" v-for="blog in blogDatas">

            <el-container>
                <!--头像显示-->
                <el-aside width="10%">
                    <img  :src=blog.user.headerImgUrl width="100%" >
                </el-aside>
                <el-container>

                    <!--用户名显示-->
                    <el-header >
                        <span
                                @click="openUserPage(blog.user.userId)"
                                style="cursor: default;color: black;font-weight: 800"
                        >{{blog.user.name}}</span>
                        <span>

                        </span>
                    </el-header>
                    <!--内容显示-->
                    <el-container >
                        <el-main>
                            <div >
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

                        </el-main>
                        <!--底部评论功能-->
                        <el-footer>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <div class="grid-content bg-purple">
                                        <svg class="iconfont" aria-hidden="true">
                                            <use xlink:href="#element-icon-alishoucang1" ></use>
                                        </svg>
                                        收藏
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple">
                                        <svg class="iconfont" aria-hidden="true">
                                            <use xlink:href="#element-icon-alizhuanfa-" ></use>
                                        </svg>
                                        转发
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple">
                                        <svg class="iconfont" aria-hidden="true">
                                            <use xlink:href="#element-icon-alipinglun" ></use>
                                        </svg>
                                        评论
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content bg-purple">
                                        <svg class="iconfont" aria-hidden="true">
                                            <use xlink:href="#element-icon-alidianzan" ></use>
                                        </svg>
                                        点赞
                                    </div>
                                </el-col>
                            </el-row>
                        </el-footer>
                    </el-container>
                </el-container>
            </el-container>


        </div>
    </div>

</template>

<script>

    import Video from '@/components/video/Video.vue'
    import  * as pathRouter  from "@/apis/common/pathRouter.js"


    export default {
        data(){
            return{
                activeIndex: '1',
                input3: "",


                blogDatas: [

                    {
                        user:{
                            headerImgUrl: "/img/user/ori.png",
                            name: "李白",
                            userId: "123",
                        },
                        content: "一早随郁荣誉主席到慈湖谒陵\n" +
                            "纪念先总统蒋介石先生逝世日\n" +
                            "这个曾经游客如织的地方 \n" +
                            "自从蔡当局借口泼漆事件后维安需要\n" +
                            "从此被半封闭了起来\n" +
                            "加上大陆观光团减少",
                        collect: "",
                        repost: "",
                        comment: "",
                        like: "",
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
                        content: "一早随郁荣誉主席到慈湖谒陵\n" +
                            "纪念先总统蒋介石先生逝世日\n" +
                            "这个曾经游客如织的地方 \n" +
                            "自从蔡当局借口泼漆事件后维安需要\n" +
                            "从此被半封闭了起来\n" +
                            "加上大陆观光团减少",
                        collect: "",
                        repost: "",
                        comment: "",
                        like: "",

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
<style scoped>
    .blog-content{
        margin-top: 20px;
        border: solid 1px red;
        background-color: #fffdef;

    }
    .iconfont{
        width: 30px;
        height: 30px;
        margin-top: 10px;
    }
    .Video{
        width: 100px;
    }

.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 相当于 1fr 1fr 1fr */
    grid-template-rows: repeat(3, 1fr); /* fr单位可以将容器分为几等份 */
    grid-gap: 1%; /* grid-column-gap 和 grid-row-gap的简写 */
    grid-auto-flow: row;
    width: 480px;

}
.grid>div{
    color: #f5f2f0;
    font-size: 20px;
    width: 20px;

    line-height: 0;
    text-align: center;
    /*background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);*/
}
</style>
