<template>
    <div>
        <backgroundcard>
            <el-breadcrumb-item>班级管理</el-breadcrumb-item>
            <el-breadcrumb-item>666</el-breadcrumb-item>

        </backgroundcard>
        <div class="fclass">
           <el-empty description="描述文字" ref="em"></el-empty>
        </div>
        
    </div>
</template>

<script>
import backgroundcard from '../../components/backgroundcard.vue'
import classstudent from '../../components/classstudent.vue'
import axios from 'axios'
export default {
    components:{
        backgroundcard
    },
    mounted() {
        this.cout()
    },
    methods:{
        cout(){
            console.log('@@@',this.$refs.em)
        }
    }
    
}
</script>

<style scoped>
.el-button{
    margin-bottom: 10px;
}
.fclass{
    width: 82.5vw;
    height: 79.5vh;
    background-color: #fff;
    margin-top: 50px;
    padding-right: 5px;
    margin-left: 10px;
    padding-top: 10px;
    padding-left: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>