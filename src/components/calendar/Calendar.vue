
<template>

        <div class="calendar">
            <!--header-->
            <div class="calendar-header">
                <div>{{curPageYear}}年{{curPageMonth}}月 </div>
            </div>
            <div class="calendar-weekday">
                <ul>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                    <li>七</li>
                </ul>
            </div>

<!--square-inner grid-->
            <div class="calendar-content square-inner grid">
                <div v-for="(date,index) in dateDatas" :index="index" :class="{'act-date':actDateIndex==index}">{{date}}</div>
            </div>
            <div class="calendar-footer">
                <el-button id="preBtn" @click="preClick">上一月</el-button>
                <el-button id="nextBtn"  @click="nextClick">下一月</el-button>
            </div>

        </div>



</template>

<script>
    export default {

        data(){
            return{
                dateDatas: [],

                actDateIndex: "",

                actYear: "",
                actMonth: "",
                actDate: "",
                actWeedDay: "",

                //当前页
                curPageYear: "",
                curPageMonth: "",
                curPageDate: "",
                curPageWeedDay: "",
            }


        },

        methods:{

            init(){

                let date = new Date();
                this.actYear = date.getFullYear();
                this.actMonth = date.getMonth()+1;
                this.actDate = date.getDate();
                this.actWeedDay = date.getDay();

                this.curPageYear = this.actYear
                this.curPageMonth= this.actMonth
                this.curPageDate= this.actDate
                this.curPageWeedDay= this.actWeedDay

                console.log("actYear = "+this.actYear);
                console.log("actMonth = "+ this.actMonth);
                console.log("actDate = "+ this.actDate);
                console.log("actDay = "+ this.actWeedDay);

                this.calDateData()
                this.calActDateIndex();


            },

            calDateData(){

                this.dateDatas = []


                let offset =  new Date(this.curPageYear,this.curPageMonth-1,1).getDay()-1;

                //当前月的天数
                //由于JavaScript中day的范围为1~31中的值，所以当设为0时，会向前 一天，也即表示上个月的最后一天。
                let maxDay = new Date(this.curPageYear,this.curPageMonth,0).getDate()

                console.log("calDateData 当前月的天数:" + maxDay);


                let msg ="calDateData--" +  this.curPageYear+"年"+this.curPageMonth + "月"+"第一天是周" +  offset
                console.log(msg);
               console.log("calDateData-- offset = " + offset);


               if(offset == -1){
                    //周日
                   for (let i = 0; i < 6; i++) {
                       this.dateDatas.push('')
                   }

                   let day = 1;
                   for (let i = 6; i < 42; i++) {
                       this.dateDatas.push(day)
                       day++

                       if(day > maxDay){
                           return
                       }

                   }
               }
               else {
                   for (let i = 0; i < offset; i++) {
                       this.dateDatas.push('')
                   }

                   let day = 1;
                   for (let i = offset; i < 42; i++) {
                       this.dateDatas.push(day)
                       day++

                       if(day > maxDay){
                           return
                       }

                   }
               }



            },

            calActDateIndex(){

                if((this.curPageYear != this.actYear) || (this.curPageMonth != this.actMonth)){
                    this.actDateIndex = null
                    console.log(" this.actDateIndex = " +  this.actDateIndex);
                    return
                }

                let offset =  new Date(this.curPageYear,this.curPageMonth-1,1).getDay()-1;
                let index =  new Date(this.actYear,this.actMonth-1,this.actDate).getDate();

                let msg  = "offset = " + offset +  " index = " + index;
                console.log(msg);

                this.actDateIndex = offset + index - 1;

            },

            preClick(){
                this.curPageMonth--;
                if(this.curPageMonth < 1){
                    this.curPageMonth  = 12;
                    this.curPageYear--;
                }

                this.calDateData();
                this.calActDateIndex();
            },
            nextClick(){
                this.curPageMonth++;
                if(this.curPageMonth > 12){
                    this.curPageMonth  = 1;
                    this.curPageYear++;
                }

                this.calDateData();
                this.calActDateIndex();
            }
        },

        created(){
            this.init();
        },

    }
</script>


<style scoped src="./calendar.css">


</style>