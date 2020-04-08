<template>
    <p>我是d标签,数据为：{{data}}</p>
</template>

<script>

    export default {
        props: {
            data: {
                type: String,
                default: ''
            }
        },
        mounted() {

        },
        methods: {

        }
    };
</script>

<style scoped>

</style>