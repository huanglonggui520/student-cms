<template>
  <div>
     <showstudent/>
      <el-table
    :data="tablenumbers"
    v-loading="loading"
    border
    stripe
     @selection-change="handleSelectionChange"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      align='center'
      
      prop="Snumber"
      label="学号"
      width="130">
      
    </el-table-column>
    <el-table-column
      align='center'
      prop="name"
      label="姓名"
      width="120">
      <!-- <input type="text" v-model="input" v-if="isshow" class="input"> -->
      
    </el-table-column>
    <el-table-column
      align='center'
      prop="sex"
      width="110"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="birthdata"
      align='center'
      width="140"
    
      label="出生日期">
    </el-table-column>
    <el-table-column
      prop="phone"
      align='center'
      width="130"
      label="手机">
    </el-table-column>
    <el-table-column
      prop="address"
      align='center'
      width="130"
      label="地址">
    </el-table-column>
    <el-table-column
      align='center'
       prop="caoz"
      label="操作">
      <template slot-scope="scope">
        <el-button  type="primary" size="mini" @click="revise(scope.row)">编辑</el-button>
        <el-button size="mini" @click="show(scope.row)">查看</el-button>
        <el-button size="mini" type="danger" @click="handleClick(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
  <bj_box/>
  </div>
</template>

<script>
import showstudent from './showstudent.vue'
import bj_box from './bj_box.vue'
import axios from 'axios'
  export default {
    components:{
      showstudent,
      bj_box
    },
    watch:{
      input(){
        console.log(this.input)
      }
    },
    data() {
      return {
        // tableData: this.studentNumbers,
        multipleSelection: [],//需要删除的数据
        input:'方法',
       
      }
    },
    computed:{
        tablenumbers(){//获取vuex里学生数据
            return this.$store.state.student.studentNumbers
        },
        loading(){
            return this.$store.state.student.loading
        },
        // isshow(){
        //   return this.$store.state.student.studentNumbers.isshow
        // }
   
    },
    
    methods:{
        handleSelectionChange(val){//多选触发
            this.multipleSelection = val;
            this.$bus.$emit('gets',this.multipleSelection)
            // console.log("66666666666",this.multipleSelection)
        },
       handleClick(row) {//获取删除的行,row为一行的对象
        this.$confirm('删除该学生, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          lockScroll:false
        }).then(() => {
           this.multipleSelection=[row]
        axios.post('http://localhost:8080/api/deletestudent',{//删除单个学生
            student:this.multipleSelection
        })
        .then((res)=>{
            if(res.data.code){
                 this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.$store.commit('student/deletestudent',[row])

            }
        })
        .catch((err)=>{
            alert('失败')
        })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      },
       revise(row){
        this.$bus.$emit('get',row)
        console.log(row)
          
    },
    show(row){
      this.$bus.$emit('show',row)
     
    }
    },
   
        
    }
  
</script>
<style scoped>
.input{
  width: 95px;
  height: 20px;
  /* border-radius: 2px; */
 
}
</style>