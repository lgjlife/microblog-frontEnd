<template>
    <div id="acticle-container">
        <!--页头-->
        <div>
            <HeaderNav></HeaderNav>
        </div>
        <!--左侧-->
        <div class="left-container">
            <div>
                <el-tabs v-model="articleListType" @tab-click="handleClick">
                    <el-tab-pane label="草稿箱" name="draftType"></el-tab-pane>
                    <el-tab-pane label="已发布" name="publishedType"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="article-list">
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </div>

        <!--编辑区-->
        <div class="right-container">
            <div v-show="!preViewFlag">
                <div>
                    <el-input
                            type="text"
                            placeholder="请输入标题"
                            v-model="articleTitle"
                            maxlength="15"
                            show-word-limit>
                        <template slot="prepend">标题</template>
                    </el-input>
                </div>

                <!--<div class="setting">-->
                <!--<UploadImg ref="UploadImgRef"></UploadImg>-->
                <!--</div>-->
                <div>
                    <Editor :catchData="catchData" :content="content" ></Editor>
                </div>

                <div>
                    <el-button type="info" @click="saveDraft">保存草稿</el-button>
                    <el-button type="info" @click="publishArticle">发表</el-button>
                    <el-button type="info" @click="openPreView">预览</el-button>
                </div>
            </div>

            <div class="pre-view-block" v-show="preViewFlag">
                <div  >
                    <svg  aria-hidden="true" class="pre-view-return-icon" @click="closePreView" style="cursor: default">
                        <use xlink:href="#element-icon-aliguanbi1" style="cursor: default" ></use>
                    </svg>
                </div>
                <div class="pre-view-title">{{articleTitle}}</div>
                <div ref="preViewRef" class="pre-view-content"></div>
            </div>
        </div>




    </div>
</template>

<script>

    import UploadImg from '@/components/common/UploadImg.vue'

    import HeaderNav from '@/pages/layout/HeaderNav.vue'

    import Editor from "@/components/edit/Edit.vue";

    import Log from "@/assets/js/util/log/Log";
    import ActicleAPI from "@/apis/modules/acticle/acticle.js"

    export default {

        data(){
            return{

                articleTitle: "",
                content:"content",
                articleListType: "draftType",

                preViewFlag:false,
            }
        },

        methods:{

            handleClick(targetName){
                Log.info("Acticle.vue","[]-[]",[targetName.name]);
            },

            catchData(html){
                this.content = html
            },

            saveDraft(){

            },
            publishArticle(){

            },

            openPreView(){
                this.preViewFlag = true;


                console.log( this.$refs.preViewRef);
                this.$refs.preViewRef.innerHTML =  this.content


            },

            closePreView(){
                this.preViewFlag = false;
            },

            //初始化
            init(){

               // Acticle.GetActicleList().;
            },
        },
        created(){
            this.init()
        },

        components:{
            HeaderNav,
            Editor,
            UploadImg,
        }


    }
</script>


<style scoped src="./css/acticle.css">

</style>