<!--
组件名称表情选择组件

* 表情对应的unicode表: https://apps.timwhitlock.info/emoji/tables/unicode
* String.fromCodePoint(unicode)  即可获得unicode对应的表情

* 父组件中使用:

-->
<template>
    <div class="emotion">
        <div class="square">
            <div class="square-inner grid">
                <!--表情列表-->
                <div @click.self="addPhiz"
                     v-for="(item, index) in emojiList"
                     :index=index
                     :class="{'emoj-active':curEmojIndex==index}"
                     @mouseover="curEmojIndex=index"
                     @mouseout="curEmojIndex=-1"
                >{{ item }}</div>
            </div>
        </div>
        <!--底部选项-->
        <div class="selector">
            <ul>
                <li v-for="(option,index) in options"
                    :index=index
                    :class="{'emoj-active':curEmojTypeIndex==index}"
                    @click="selectEmojiMenu(index)"
                > {{ option }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    // import emoji from '@/assets/emoji/emoji.json'
    export default {
        data () {
            return {
                //表情列表
                emojiList: [],
                //当前鼠标所在表情位置
                curEmojIndex:'',
                //当前鼠标所在表情类型位置
                curEmojTypeIndex: "",
                //表情类型
                options:[
                    String.fromCodePoint('0x1F601'),
                    String.fromCodePoint('0x1F43C'),
                    String.fromCodePoint('0x1F372'),
                    String.fromCodePoint('0x1F3F0'),
                    String.fromCodePoint('0x1F4E6'),
                ],

                /**
                 * 表情范围
                 */
                emojiMenu: [
                    {startUnicode: '0x1F601',endUnicode: '0x1F64F'} ,
                    {startUnicode: '0x1F40C',endUnicode: '0x1F43C'} ,
                    {startUnicode: '0x1F354',endUnicode: '0x1F372'} ,
                    {startUnicode: '0x1F3E0',endUnicode: '0x1F3F0'} ,
                    {startUnicode: '0x1F48B',endUnicode: '0x1F4E6'} ,
                ],
            }
        },
        methods: {

            /*
            表情类型选择
            */
            selectEmojiMenu (index) {
                this.emojiList = []
                this.curEmojTypeIndex = index
                this.initEmoji(this.emojiMenu[index].startUnicode, this.emojiMenu[index].endUnicode)
            },
            /**
             * 表情的unicode
             * https://apps.timwhitlock.info/emoji/tables/unicode#
             * startUnicode 开始的编码
             * endUnicode 结束编码
             * flag 相反
             */
            initEmoji (startUnicode, endUnicode) {
                for (let i = startUnicode; i <= endUnicode; i++) {
                    // console.log(i)
                    let emoji = String.fromCodePoint(i)
                    //console.log("emoji = " + emoji)
                    this.emojiList.push(emoji)
                }
            },
            addPhiz (ev) {
                console.log('添加表情' + ev.target.innerText)
                this.selectEmotion = ev.target.innerText;
                this.$emit('emotionChildSelect',this.selectEmotion,this.index);
            }
        },
        created () {
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
        border: red 0px solid;
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
        cursor: default;
        text-align: center;
        width: 100%;
        height: 35px;
    }
    .selector ul{
        list-style: none;
        margin-left: 0px;
        padding-left: 0px;
    }
    .selector li{
        position: relative;
        float: left;
        margin: 0px 0px 0px 0px;
        padding-top: 9px;
        width: 30px;
        height: 28px;

    }
</style>