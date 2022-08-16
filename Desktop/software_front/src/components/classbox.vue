<template>
  <div>
      <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

<el-dialog
:lock-scroll='false'
  title="编辑班级"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  
                <el-select  placeholder="请选择你的班级" v-model="value">
                <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
                <el-option label="大数据" value="大数据"></el-option>
                <el-option label="汉语言文学" value="汉语言文学"></el-option>
                <el-option label="软件工程" value="软件工程"></el-option>
                <el-option label="土木工程" value="土木工程"></el-option>
                <el-option label="物理" value="物理"></el-option>
                </el-select>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>


<style>

</style>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        dialogVisible: false,
        value:'',
        snumber:null
      };
    },
    mounted(){
        this.$bus.$on('classbj',(row)=>{
            this.dialogVisible=true
            this.value=row.class
            this.snumber=row.snumber
            // console.log('row',row)
        })
    },
    methods: {
      handleClose(done) {
        
            done();
         
      },
      dialogVisible1(){
          this.dialogVisible=false
          console.log(this.value)
          axios.post('http://localhost:8080/api/sub',{
              class:this.value,
              snumber:this.snumber
          })
          .then((res)=>{
              if(res.data.code){
                  this.$message({
                message: '修改成功',
                type: 'success'
            });
              }
          })

      },
      open(){
          this.dialogVisible=true
          console.log('row',row)
      }
    }
  };
</script>