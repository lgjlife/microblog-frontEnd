<template>
    <div class="hello">
        <div id="chart1"></div>
    </div>
</template>

<script>

    import ChartsTools from "./ChartsTools"

    export default {

        data(){
            return {

            }
        },

        methods:{

        },
        mounted() {
            ChartsTools.line1('chart1');
        }


    }

</script>


<style scoped>
    #chart1 {
        width: 300px;
        height: 300px;
    }
</style>