<template>
    <div id="card">
        <!-- <el-tag color="red">标签一</el-tag> -->
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }" class="el-icon-s-fold">首页</el-breadcrumb-item>
        <slot></slot>
        
        </el-breadcrumb>
    </div>
</template>

<script>
// import chart from './echart.vue'
export default {
    name:'backgroundcard',
    components:{
        
    }
}
</script>

<style scoped>
    #card{
        float: left;
        /* width: 82vw; */
         box-shadow: 0 3px 5px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        height: 40px;
        /* margin-left: 15px; */
        /* width: 100%; */
        /* margin-bottom: 15px; */
        flex: 1;
        width: 84vw;
        /* margin-right: 15px; */
        /* margin-top: 15px; */
        background-color: #fff;
        /* line-height: 40px; */

    }
    .el-breadcrumb{
        line-height: -1 !important;
        padding-top: 10px;
        font-size: 15px;
        margin-left: 5px;
    }
</style>