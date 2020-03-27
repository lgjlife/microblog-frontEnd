<template>
    <div >
        <i class="el-icon-s-home"></i>
        <el-col :span="12">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
       
        <i class="el-icon-search"></i>
        <i class="el-icon-user-solid"></i>
        <i class="el-icon-message-solid"></i>
        <i class="el-icon-setting"></i>   
        
    </div>
</template>

<script>
//import sidebarNav from './component/sidebar-nav'
//import mainContent from './component/main-content/index'
//import { mapState } from 'vuex'

export default {
    data() {
        return {
            input: '',
        }
    },
    computed: {
        //...mapState(['isSidebarNavCollapse'])
    },
    components: {
        //sidebarNav,
       // mainContent
    }
}
</script>

<style >

    el-input{
        width: 150px;
        height: 150px;
    }
    .el-icon-s-home{
        font-size: 50px;
    }
    .el-icon-search{
        font-size: 50px;
    }
    .el-icon-user-solid{
        font-size: 50px;
    }
    .el-icon-message-solid{
        font-size: 50px;
    }
    .el-icon-setting{
        font-size: 50px;
    }
</style>
