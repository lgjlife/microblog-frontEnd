<template>
    <div>
        ============================77、动态添加不同组件============================
        <!--
         :is="item.type" 根据当前类型加载不同的组件
        -->
        <component v-for="(item,index) in componentData" :key="index" :is="item.type" :data="item.itemData"></component>
    </div>
</template>

<script>
    import component1 from './component1.vue'
    import component2 from './component2.vue'
    export default {
        name: "DynamicAdditionOfDifferentComponents_77",
        data(){
            return {
               // currentView:'component1',
                componentData:[],
            }
        },
        components:{
            component1,
            component2,
        },
        created(){
            for (let i = 0; i <10 ; i++) {
                let type = i === 3?'component1':'component2';
                this.componentData.push({
                    type:type,
                    itemData:i+''
                })
            }
        }
    }
</script>

<style scoped>

</style>