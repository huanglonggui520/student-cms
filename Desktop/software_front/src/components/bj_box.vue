<template>
    <div class="bj-box">
        <el-dialog
        title="编辑学生"
        :lockScroll='false'
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <span>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="学号">
                <el-input v-model="formLabelAlign.snumber"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="formLabelAlign.sex"></el-input>
            </el-form-item>
             <el-form-item label="出生日期">
                <el-input v-model="formLabelAlign.birthdata"></el-input>
            </el-form-item> <el-form-item label="手机">
                <el-input v-model="formLabelAlign.phone"></el-input>
            </el-form-item> <el-form-item label="地址">
                <el-input v-model="formLabelAlign.address"></el-input>
            </el-form-item> 
            </el-form>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit1">确 定</el-button>
        </span>
</el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        dialogVisible: false,
          labelPosition: 'right',
        formLabelAlign: {
          name: '',
          snumber: '',
          birthdata: '',
          sex:'',
          phone:'',
          address:''
        }
      }
      },
    
    mounted(){
        this.$bus.$on('get',(row)=>{
            // console.log('')
            this.dialogVisible=true
            this.formLabelAlign.name=row.name
            this.formLabelAlign.snumber=row.Snumber
            this.formLabelAlign.address=row.address
            this.formLabelAlign.sex=row.sex
            this.formLabelAlign.phone=row.phone
            this.formLabelAlign.birthdata=row.birthdata
        })
    },
    methods: {
      handleClose(done) {
       
            done();
         
      },
    
    submit1(){
        console.log('mmp')
        axios.post('http://localhost:8080/api/submit',{
            student:this.formLabelAlign
        })
        .then((res)=>{
            if(res.data.code){
                this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
                
             });
             this.$store.commit('student/updatedstudent',this.formLabelAlign)
              this.dialogVisible=false
            }
           
        })
    }
    }
  };
</script>