<template>
    <div @click.stop>

        <div class="emotion">

            <div class="square">
                <div class="square-inner grid">
                    <!--表情列表-->
                    <div @click.self="addPhiz"
                         v-for="(item, index) in emojiList"
                         :index=index
                         :class="{'emoj-active':curIndex==index}"
                         @mouseover="curIndex=index"
                         @mouseout="curIndex=-1"
                    >{{ item }}</div>
                </div>
            </div>
            <div>
                <!--底部选项-->
                <el-row class="selector" :gutter="20">
                    <el-col :span="3" v-for="(option,index) in options"  >
                        <div class="grid-content bg-purple" v-on:click="selectEmojiMenu(index)">
                            {{ option }}
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

    </div>



</template>

<script>
    import emoji from '@/assets/emoji/emoji.json'
    export default {
        props: {
            showPhiz: {
                default: true
            },
            index:{
                default: 123
            }


        },
        data () {
            return {
                phiz: emoji,

                selectEmotion:"",
                emojiList: [],

                curIndex:'',

                emojMouseOnFlag:[],

                options:[

                    String.fromCodePoint('0x1F601'),
                    String.fromCodePoint('0x1F43C'),
                    String.fromCodePoint('0x1F372'),
                    String.fromCodePoint('0x1F3F0'),
                    String.fromCodePoint('0x1F4E6'),
                ],
            }
        },
        components: {},
        methods: {

            selectEmojiMenu (flag) {

               // console.log('flag = ' + flag)
                this.emojiList = []
                this.emojMouseOnFlag  = []
                switch (flag) {
                    case 0:
                        console.log('第一个菜单')
                        this.initEmoji('0x1F64F', '0x1F601')
                        break
                    case 1:
                        console.log('第二个菜单')
                        this.initEmoji('0x1F40C', '0x1F43C', true)
                        break
                    case 2:
                        console.log('第三个菜单')
                        this.initEmoji('0x1F354', '0x1F372', true)
                        break
                    case 3:
                        console.log('第四个菜单')
                        this.initEmoji('0x1F3E0', '0x1F3F0', true)
                        break
                    case 4:
                        console.log('第五个菜单')
                        this.initEmoji('0x1F48B', '0x1F4E6', true)
                        break
                }
            },
            /**
             * 表情的unicode
             * https://apps.timwhitlock.info/emoji/tables/unicode#
             * startUnicode 开始的编码
             * endUnicode 结束的编码
             * flag 相反
             */
            initEmoji (startUnicode, endUnicode, flag) {
                let start
                let end
                if (flag) {
                    start = startUnicode
                    end = endUnicode
                } else {
                    start = endUnicode
                    end = startUnicode
                }
                for (let i = start; i <= end; i++) {
                    // console.log(i)
                    let emoji = String.fromCodePoint(i)
                    //console.log("emoji = " + emoji)
                    this.emojiList.push(emoji)

                    this.emojMouseOnFlag.push(false)
                }
            },
            addPhiz (ev) {
                console.log('添加表情' + ev.target.innerText)
                this.selectEmotion = ev.target.innerText;
                this.$emit('emotionChildSelect',this.selectEmotion,this.index);

                //this.$electron.remote.getCurrentWebContents().insertText(ev.target.innerText)
            }
        },
        created () {
            //this.initEmoji('0x1F64F', '0x1F601')
            this.selectEmojiMenu(0);

        }
    }
</script>

<style scoped>
    .emotion{
        background-color: #F8F8FF;
        outline-style: solid;
        outline-color: #e9e9e9  ;
        width: 250px;
    }
    .emoj-active{
        background-color: #66c523;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(8, 1fr); /* 相当于 1fr 1fr 1fr */
        grid-template-rows: repeat(8, 1fr); /* fr单位可以将容器分为几等份 */
        grid-gap: 1%; /* grid-column-gap 和 grid-row-gap的简写 */
        grid-auto-flow: row;
    }
    .grid>div{
        color: #f5f2f0;
        font-size: 18px;
        width: 25px;
        height: 35px;
        margin-top: 0px;
        padding-top: 0px;
        text-align: center;

        line-height: 2;
        text-align: center;

        cursor: default;
        /*background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);*/
    }
    .square{

        height: 200px;

        overflow:auto;
        overflow-x: hidden;
    }

    .square::-webkit-scrollbar {
        /*滚动条整体样式*/
        width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .square::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius   : 10px;
        background-color: skyblue;
        background-image: -webkit-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.2) 75%,
                transparent 75%,
                transparent
        );
    }
    .square::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #ededed;
        border-radius: 10px;
    }

    .selector{
        position: relative;
        background-color: #FFDEAD;
        left: 8px;
        margin-top: 15px;
        margin-left: 0px;
        width: 100%;
        cursor: default;
    }
</style>