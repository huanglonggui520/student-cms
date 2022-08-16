<template>
    <div>
        <el-pagination
        background
         @current-change="handleCurrentChange"
        :page-size="5"
        layout="prev, pager, next"
        :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'pag',
    computed:{
        total(){
            return this.$store.state.student.total
        }
    },
    methods:{
         handleCurrentChange(val) {
        this.$store.dispatch('student/getstudent',val)
        // this.$bus.$emit('get')
        
      }
    },
   
}
</script>

<style scoped>
    div{
        margin-left: 300px;
        margin-top: 5px;
    }
</style>