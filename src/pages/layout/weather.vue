<!--
天气组件

https://cj.weather.com.cn/plugin/pc/view


-->

<template>
    <div id='weather-view-he' style="position: fixed; left:10px;background-color: red;height: 30px;width: 30px;background-color: #66c523"></div>
</template>

<script>

    window.WIDGET = {FID: 'ThvW1Fol2H'}

    export default {
        mounted() {


            var d = document;
            var cs = d.createElement("link");
            cs.rel = "stylesheet";
            cs.href = "https://apip.weatherdt.com/view/static/css/tqw_widget_view.css?v=0101";
            var s = d.createElement("script");
            s.src = "https://apip.weatherdt.com/float/static/js/r.js?v=1111";
            var sn = d.getElementsByTagName("script")[0];
             sn.parentNode.insertBefore(cs, sn);
            sn.parentNode.insertBefore(s, sn);
        },
    }
</script>