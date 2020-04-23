<template>
    <div id="acticle-container">
        <!--页头-->
        <div>
            <HeaderNav></HeaderNav>
        </div>

        <div class="article-block">

            <!--预览界面-->
            <div class="pre-view-block" v-show="preViewFlag==true">
                <div >
                    <svg  aria-hidden="true" class="pre-view-return-icon" @click="closePreView" style="cursor: default">
                        <use xlink:href="#element-icon-aliguanbi1" style="cursor: default" ></use>
                    </svg>
                </div>
                <div class="pre-view-title">{{curEditorArticleTitle}}</div>
                <div ref="preViewRef" class="pre-view-content"></div>
            </div>
            <div v-show="preViewFlag==false">
                <!--选项标题栏-->
                <div class="option-header">
                    <el-tabs v-model="curOptionHeaderMode" @tab-click="handleClick">
                        <el-tab-pane label="草稿箱" :name="optionHeaderMode.DRAFT_LIST_MODE"></el-tab-pane>
                        <el-tab-pane label="已发布" :name="optionHeaderMode.PUBLISH_LIST_MODE"></el-tab-pane>
                        <el-tab-pane label="编辑/新增文章" :name="optionHeaderMode.EDIT_MODE"></el-tab-pane>
                    </el-tabs>
                </div>
                <!--操作区-->
                <div class="handle-block" >
                    <!--文章显示列表-->
                    <div v-show="curOptionHeaderMode==optionHeaderMode.DRAFT_LIST_MODE | curOptionHeaderMode==optionHeaderMode.PUBLISH_LIST_MODE">

                        <div class="title-block">
                            <ul class="title-ul">
                                <li>标题</li>
                                <li>时间</li>
                                <li>发布状态</li>
                                <li>评论数</li>
                                <li>阅读数</li>
                                <li>操作</li>
                                <li>操作</li>
                            </ul>
                        </div>

                        <div class="article-list-block">
                            <div v-for="(article,index) in articleList" >
                                <ul class="title-ul">
                                    <li class="article-list-item">{{article.title}}</li>
                                    <li class="article-list-item">{{new Date(article.createTime).format('yyyy-MM-dd hh:mm:ss')}}</li>
                                    <li class="article-list-item">{{article.state}}</li>
                                    <li class="article-list-item">{{article.commentCount}}</li>
                                    <li class="article-list-item">{{article.readCount}}</li>
                                    <li class="article-list-item" style="color: blue" @click="editArticleClick(article.articleId)">编辑</li>
                                    <li class="article-list-item" style="color: blue" @click="deleteArticle(article)">删除</li>
                                </ul>
                            </div>
                        </div>

                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :page-size='10'
                                @current-change="pageChange"
                                :total="pages">
                        </el-pagination>

                    </div>
                    <!--编辑区-->
                    <div v-show="curOptionHeaderMode==optionHeaderMode.EDIT_MODE">
                        <div>
                            <el-input
                                    type="text"
                                    placeholder="请输入标题"
                                    v-model="curEditorArticleTitle"
                                    maxlength="50"
                                    show-word-limit>
                                <template slot="prepend">标题</template>
                            </el-input>
                        </div>

                        <div class="tips">
                            {{tips}}
                        </div>
                        <div>
                            <Editor :catchData="catchData" :content="curEditorArticleContent" ></Editor>
                        </div>

                        <div>
                            <el-button type="info" @click="quitEditorArticle">取消</el-button>
                            <el-button type="info" @click="saveDraftClick">保存草稿</el-button>
                            <el-button type="info" @click="publishArticleClick">发表</el-button>
                            <el-button type="info" @click="openPreView">预览</el-button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import UploadImg from '@/components/common/UploadImg.vue'

    import HeaderNav from '@/pages/layout/HeaderNav.vue'

    import Editor from "@/components/edit/Edit.vue";

    import Log from "@/assets/js/util/log/Log";
    import ActicleAPI from "@/apis/modules/acticle/acticle-api.js"

    export default {

        data(){
            return{

                optionHeaderMode:{
                    //草稿箱列表模式
                    "DRAFT_LIST_MODE": "DRAFT_LIST_MODE",
                    //已发布文章列表
                    "PUBLISH_LIST_MODE": "PUBLISH_LIST_MODE",
                    //编辑模式
                    "EDIT_MODE": "EDIT_MODE",
                },
                //当前标题栏模式
                curOptionHeaderMode: '',


                //正在自动保存
                avilableSaveFlag: true,
                //自动保存间隔
                AUTOSAVE_INTERVAL: 30000,
                //提示
                tips:"",
                //
                articleList: [],
                curPage: 1,
                pages: 1,

                //显示内容控制 1:文章列表，2：编辑区，３：预览区
                displayIndex: 1,

                //当前操作的文章id
                curHandleArticleId: "",
                //当前操作的文章信息
                curHandleArticleInfo: {},

                //文章类型
                articleType:{
                    //草稿类型
                    DRAFT_TYPE: "DRAFT_TYPE",
                    //发布类型　
                    PUBLISH_TYPE: "PUBLISH_TYPE",
                },

                curEditorArticleTitle: "",
                curEditorArticleContent:"",

                //预览窗口打开标志位
                preViewFlag:false,
            }
        },

        methods:{

            //初始化
            init(){

                this.curOptionHeaderMode = this.optionHeaderMode.PUBLISH_LIST_MODE
                this.getActicleList(1,"publishedType")
            },

            /*
            * 草稿箱　已发布　发布新文章　选项
            */
            handleClick(target){
                Log.info("Acticle.vue","[]-[]",[target.name]);
                if(target.name == this.optionHeaderMode.DRAFT_LIST_MODE){
                    //获取草稿箱的文章列表
                    this.getActicleList(1,this.articleType.DRAFT_TYPE)
                }
                else if(target.name == this.optionHeaderMode.PUBLISH_LIST_MODE){
                    //获取已发布的文章列表
                    this.getActicleList(1,this.articleType.PUBLISH_TYPE)

                }
                else if(target.name == this.optionHeaderMode.EDIT_MODE){
                    //编辑栏
                }
            },

            /*
            * 编辑文章
            */
            editArticleClick(articleId){
                Log.info("Acticle.vue","操作文章[]",[articleId])
                this.curHandleArticleId = articleId

                this.curOptionHeaderMode = this.optionHeaderMode.EDIT_MODE

                ActicleAPI.GetActicleById({articleId:articleId}).then((result)=>{

                    this.curHandleArticleInfo = result.data.data;
                    //打开编辑栏
                    this.displayIndex=2
                    this.curEditorArticleTitle =  this.curHandleArticleInfo.title;
                    this.curEditorArticleContent =  this.curHandleArticleInfo.content;


                }).catch((error)=>{

                })
                ;
            },
            /*
            * 删除文章
            */
            deleteArticle(article){

                var result = confirm("是否删除文章:" + article.title)

                if(result == true){
                    //删除文章操作
                    ActicleAPI.DeleteArticleById({articleId:article.articleId}).then((result)=>{

                        Log.info("Article.vue","删除文章操作[]",[result.data.msg])
                    }).catch((error)=>{

                    })

                }
                else {
                    return
                }
            },

            /*
            * 离开文章编辑页面
            */
            quitEditorArticle(){

               var result =  confirm("确定取消编辑文章?")
                if(result ==  true){
                    //取消文章编辑
                    this.curEditorArticleTitle =  '';
                    this.curEditorArticleContent =  '';
                    this.curOptionHeaderMode = this.optionHeaderMode.PUBLISH_LIST_MODE
                }
                else {
                    //不取消文章编辑
                    return
                }
            },


            /*
            * 输入栏更新数据
            */
            catchData(html){
                this.curEditorArticleContent = html
                //检测是否定时保存
                //this.autoSave()
            },

            /**
             * 保存草稿事件
             */
            saveDraftClick(){
                let that = this
                //保存草稿
                this.postArticle('draft').then((result) =>{

                    console.log(result);
                    Log.info("Article.vue",result.data.msg)
                    that.tips = "草稿保存成功"


                }).catch((error)=>{
                    Log.error(error)
                })
            },
            /*
            * 发布文章事件
            */
            publishArticleClick(){
                let that = this


                if(this.curEditorArticleTitle.trim() == ""){
                    that.tips = "请输入文章标题"
                    return
                }
                if(this.curEditorArticleContent.trim() == ""){
                    that.tips = "请输入文章内容"
                    return
                }
                //发布文章
                ActicleAPI.PublishArticle({
                    articleId:'',
                    title:this.curEditorArticleTitle,
                    content: this.curEditorArticleContent,
                    type:this.articleType.PUBLISH_TYPE})
                    .then((result) =>{

                        Log.info("Article.vue",result.data.msg)
                        alert("文章[" + that.curEditorArticleTitle + "]发布成功" )
                        that.curEditorArticleTitle = ''
                        that.curEditorArticleContent = ''
                        that.curOptionHeaderMode = that.optionHeaderMode.PUBLISH_LIST_MODE
                }).catch((error)=>{
                    Log.error(error)
                })
            },
            /*
            * 发布文章　
            * _type：　文章类型: publish 发布，draft　草稿
            * articleId: 文章id,
            */
            postArticle(articleId,_type){
                return ActicleAPI.PublishArticle({articleId:articleId,title:this.articleTitle,content: this.content,type:_type})
            },


            /*
            * 自动保存
            */
            autoSave(){
                let that = this

               // Log.info("Article.vue",'avilableSaveFlag=[]',[that.avilableSaveFlag])

                if(that.avilableSaveFlag == true){
                    that.avilableSaveFlag = false

                    if(this.articleTitle.trim() == ""){
                        this.articleTitle = "未命名"
                    }
                    //保存草稿
                    this.postArticle('draft').then((result) =>{

                        console.log(result);
                        Log.info("Article.vue",result.data.msg)

                        that.tips = new Date().format("yyyy-MM-dd hh:mm:ss")+"自动保存"
                    }).catch((error)=>{
                      Log.error(error)
                    })

                    setTimeout(function () {
                        that.avilableSaveFlag = true
                        Log.info("Article.vue","定时时间到")

                    },that.AUTOSAVE_INTERVAL)
                }

            },

            /**
             * 打开预览窗口
             */
            openPreView(){
                if((this.curEditorArticleContent == "") || (this.curEditorArticleTitle == "")){
                    return
                }
                this.preViewFlag = true;
                this.$refs.preViewRef.innerHTML =  this.curEditorArticleContent
            },

            /*
            * 关闭预览窗口
            */
            closePreView(){
                this.preViewFlag = false;

            },

            /**
             *
             * @param _page 所在的页
             * @param _acticleTYpe [draftType｜publishedType] 草稿列表|已经发布
             */
            getActicleList(_page,_acticleTYpe){

                let that =  this
                ActicleAPI.GetActicleList({page: _page,acticleTYpe:_acticleTYpe}).then((result)=>{

                    result = result.data
                    Log.info("Article.vue","请求结果:[],数据:[]",[result.msg,JSON.stringify(result.data)])
                    that.articleList = result.data.articles;

                    that.curPage  =  result.data.curPage
                    that.pages  =  result.data.pages


                }).catch((error)=>{
                    Log.error("Article.vue","请求失败"+error)
                })

            },

            pageChange(page){

                let articleType = ''
                if(this.curOptionHeaderMode == this.optionHeaderMode.DRAFT_LIST_MODE){
                    articleType  = this.articleType.DRAFT_TYPE
                }
                else if(this.curOptionHeaderMode == this.optionHeaderMode.PUBLISH_LIST_MODE){
                    articleType  = this.articleType.PUBLISH_TYPE
                }
                this.getActicleList(page,articleType)


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