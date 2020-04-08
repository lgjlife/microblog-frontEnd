<template>
    <div class="video-cantainer">
        <span class="displayCount" v-if="playFlag">播放次数:1234次</span>
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
                       @ready="playerReadied"

        ></video-player>


    </div>

</template>

<script>
    //引入video样式
    //import 'video.js/dist/video-js.css'
    //import 'vue-video-player/src/custom-theme.css'
    //引入hls.js
    import 'video.js/dist/video.js'


    export default {
        data () {

            return {

                playFlag: "true",


                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: "/video/1.mp4" //url地址
                    }],
                    poster: "/img/user/ori.png", //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: true,
                        fullscreenToggle: true  //全屏按钮
                    },
                    width: "200px",
                }
            }
        },
        methods: {
            // listen event
            onPlayerPlay(player) {
                this.playFlag = false;
                 console.log('player play!', player)
            },
            onPlayerPause(player) {
                 console.log('player pause!', player)
            },
            // ...player event

            //播放时触发　  <!--@statechanged="playerStateChanged($event)"-->
            playerStateChanged(playerCurrentState) {
                 console.log('player current update state', playerCurrentState)
            },

            // player is ready
            playerReadied(player) {
                console.log('the player is readied', player)
                // you can use it to do something...
                // player.[methods]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .video-cantainer{
        width: 500px;
    }
    .displayCount{
        position: relative;
        top: 270px;
        color: red;
        left: 10px;
        z-index: 9999;
    }
</style>
