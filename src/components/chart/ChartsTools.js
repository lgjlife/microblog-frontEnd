/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const line = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                smooth: true
                            }]
                        };

                        this.chart.setOption(optionData);
                    },
                }
            }
        }
    })
}

const line1 = function(id){

    console.log("line1....");

    this.chart = echarts.init(document.getElementById(id));
    this.chart.clear();

    const optionData = {
        title: {
            text: 'ECharts'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data:['销量','销量1']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: "销量",
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            },
            {
                name: "销量1",
                data: [82, 93, 90, 93, 129, 133, 1392],
                type: 'line',
                smooth: true
            },
        ]
    };

    this.chart.setOption(optionData);

}


export default {
    line,
    line1,
}