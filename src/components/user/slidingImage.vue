//整个页面是个弹窗 visible 控制弹窗的显示关闭 默认打开

<template>
    <div id="captchaContainer" >


        <!-- 标题栏　-->
        <div class="header">
            <span class="headerText">图片滑动验证</span>
            <span class="closeIcon" @click="closeCaptchaContainer()"/>
            <span class="refreshIcon" @click="refreshImage"/>
        </div> 

        <!-- 图片显示区域　-->
        <div id="captchaImg" >
            <img id="oriImg" :src="imageMsg.oriImageSrc" alt="原图"/>
            <img id="cutImg" :src="imageMsg.cutImageSrc" alt="抠图" :style="cutImgStyle"/>
        </div>
        <!--滑块显示区域-->
            <div class="sliderContainer" 
            :class='{"sliderContainer_success":verifiFlag === "success",
            sliderContainer_fail:verifiFlag === "fail"}'>
            <div class="sliderMask">
                <div class="slider" :style="sliderStyle" 
                    @mousedown="sliderMousedown"
                    @mouseup="sliderMouseup"
                    @mousemove="sliderMousemove">
                    
                    <span class="sliderIcon"></span>
                </div>
            </div>
            <span class="sliderText" :class='{"slider_success":verifiFlag === "success",slider_fail: verifiFlag === "fail"}'>向右滑动填充拼图</span>
            
        </div> 

        
    </div>
</template>


<script>

import "@/components/user/assets/css/slidingImage.scss"
import axios from 'axios'

//图片显示使用base64时的前缀,src=base64PrefixPath + imgBase64Value
var base64PrefixPath="data:image/png;base64,";

var IMAGE_WIDTH = 300;
//初始化
//滑块初始偏移量
var sliderInitOffset = 0;
//滑块移动的最值
var MIN_MOVE = 0;
var MAX_MOVE = 0;
//鼠标按下标志
var mousedownFlag=false;

//滑块位置检测允许的误差，正负２
var MOVE_CHECK_ERROR = 2;
//滑块滑动使能
var moveEnable = true;

 


export default {


    data() {
        return{
            dialogVisible: true,
            //滑动图片验证结果
            //success fail ""
            verifiFlag: "",
            cutImgStyle:{
                width: "",
                height: "",
                left: "",
                top: "",
                
            },
            
            sliderStyle:{
                left: "",   
            },


            //滑块移动的距离
            movex: 0,

            imageMsg: {
                //抠图的坐标
                xpos: "179",
                ypos: "5",
                //抠图的大小
                cutImageWidth: "60",
                cutImageHeight: "75",
                //原图的base64
                oriImageSrc: "/img/user/ori.png",
                //抠图的base64
                cutImageSrc: "/img/user/cut.png",
            },


        }


    },

    
    
    methods: {

        closeCaptchaContainer(){

            console.log("close")
            this.$emit('imageclose');
        },

        　//加载页面时进行初始化
        init(){

            console.log("子组件初始化init")

            moveEnable = true;
            mousedownFlag=false;

            this.verifiFlag = "";
            this.$data.sliderStyle.left = "0px";
            //initClass();

            MAX_MOVE = IMAGE_WIDTH - this.$data.imageMsg.cutImageWidth;


            this.$data.oriImgSrc = this.$data.imageMsg.oriImageSrc;
            this.$data.cutImgSrc = this.$data.imageMsg.cutImageSrc;

            this.$data.cutImgStyle.width = this.$data.imageMsg.width + "px";
            this.$data.cutImgStyle.height = this.$data.imageMsg.height + "px";
            this.$data.cutImgStyle.top = this.$data.imageMsg.ypos + "px";
            this.$data.cutImgStyle.left = "0px";


        },

         //刷新图片操作
        refreshImage(){
            this.init();
            return;
            axios({
                method: 'get',
                url: "slider/image",

            })
            .then((response) =>{          //这里使用了ES6的语法
                console.log(response)       //请求成功返回的数据

                console.log(data)
                console.log(data.message);

                if(data.data != null){

                    this.$data.imageMs.oriImageSrc = base64PrefixPath + data.data.oriImage;
                    this.$data.imageMs.cutImageSrc = base64PrefixPath + data.data.cutImage;
                    this.$data.imageMs.xpos = data.data.xpos;
                    this.$data.imageMs.ypos = data.data.ypos;
                    this.$data.imageMs.cutImageWidth = data.data.cutImageWidth;
                    this.$data.imageMs.cutImageHeight = data.data.cutImageHeight;

                    init();
                }

            })
            .catch((error) =>
                console.log(error)       //请求失败返回的数据
            )
        },

        requestVerification(){

            axios({
                method: 'get',
                url: "slider/verification",

            })
            .then((response) =>{          //这里使用了ES6的语法
                console.log(data)
                console.log(data.code);
                console.log(data.message);

                if(data.data == true){
                    checkSuccessHandle();
                }
                else{
                    checkFailHandle();
                }

            })
            .catch((error) =>
                console.log(error)       //请求失败返回的数据
            )
        },
        
       
    

            //滑块鼠标按下
        sliderMousedown(event){
            console.log("鼠标按下mousedown:"+event.clientX + " " + event.clientY);
            sliderInitOffset = event.clientX;  
            mousedownFlag = true;
        },
        //滑块绑定鼠标滑动事件
        sliderMousemove(event){
            if(mousedownFlag  == false){
            return;
            }
            if(moveEnable == false){
            return
            }

            this.movex = event.clientX - sliderInitOffset;

           // console.log("MAX_MOVE = " + MAX_MOVE);
           // console.log("this.movex = " + this.movex);

            this.movex<MIN_MOVE?this.movex=MIN_MOVE:this.movex=this.movex;
            this.movex>MAX_MOVE?this.movex=MAX_MOVE:this.movex=this.movex;

            this.$data.cutImgStyle.left = this.movex + "px";
            this.$data.sliderStyle.left = this.movex + "px";

        },
        //滑块鼠标弹起操作
        sliderMouseup(event){
            console.log("mouseup:"+event.clientX + " " + event.clientY);
            sliderInitOffset = 0;
        // $(this).off("mousemove");
            mousedownFlag=false;
            console.log("this.movex　＝　" + this.movex)
            this.checkLocation();
            
        },
        //检测滑块　位置是否正确
        checkLocation(){

            moveEnable = false;
            //后端请求检测滑块位置
            //this.requestVerification();
            if(( this.imageMsg.xpos > ( this.movex - MOVE_CHECK_ERROR))
            && (this.imageMsg.xpos < ( this.movex + MOVE_CHECK_ERROR))){
                console.log("验证成功");
                this.$data.verifiFlag = "success"
            }
            else{
                console.log("验证失败");
                this.$data.verifiFlag = "fail"

            }

        },
   
    },

    mounted() {
       // h ttpRequest.requestImage.request();
        console.log("mounted========================================================");
       this.init();
    },
    


}



   
</script>

<style lang="scss" scoped>

/*@import "@/components/user/assets/css/slidingImage.css";*/

</style>