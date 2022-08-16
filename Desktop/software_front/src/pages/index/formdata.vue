<template>
        <div class="form">
          
            <backgroundcard>
              <el-breadcrumb-item :to="{ path: '/student' }">学生管理</el-breadcrumb-item>
              
              <el-breadcrumb-item>添加学生</el-breadcrumb-item>
            </backgroundcard>
            <div class="formdata">
              <!-- <fclass/> -->
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="学号" prop="snumber" >
                <el-input v-model="ruleForm.snumber" type='number' @blur="submitform"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
             <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            
            
            <el-form-item label="出生日期">
                <el-col :span="20">
                <el-date-picker
                v-model="ruleForm.birthdata"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
                </el-col>
               
            </el-form-item>
            <el-form-item label="所在地址" prop="address">
                <el-select v-model="ruleForm.address" placeholder="请选择你的地址">
                <el-option label="贵州" value="贵州"></el-option>
                <el-option label="北京" value="北京"></el-option>
                <el-option label="云南" value="云南"></el-option>
                <el-option label="山东" value="山东"></el-option>
                <el-option label="广东" value="广东"></el-option>
                <el-option label="四川" value="四川"></el-option>
                <el-option label="台湾" value="台湾"></el-option>
                <el-option label="河南" value="河南"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="手机" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="所在班级" prop="class">
                <el-select v-model="ruleForm.class" placeholder="请选择你的班级">
                <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
                <el-option label="大数据" value="大数据"></el-option>
                <el-option label="汉语言文学" value="汉语言文学"></el-option>
                <el-option label="软件工程" value="软件工程"></el-option>
                <el-option label="土木工程" value="土木工程"></el-option>
                <el-option label="物理" value="物理"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="辅导员" prop="teacher">
                <el-input v-model="ruleForm.teacher"></el-input>
            </el-form-item>
            <el-form-item label="学年学费" prop="totalm">
                <el-input v-model="ruleForm.totalm"></el-input>
            </el-form-item>
            <el-form-item label="已交学费" prop="paym">
                <el-input v-model="ruleForm.paym"></el-input>
            </el-form-item>
            <el-form-item label="寝室楼号" prop="floor">
                 <el-input-number v-model="ruleForm.floor" :min='1' :max='18' :step="1"></el-input-number>
                
            </el-form-item>
            <el-form-item label="寝室号" prop="bedroom">
                 <el-input v-model="ruleForm.bedroom"></el-input>
                  <!-- <selects/> -->
            </el-form-item>
            <el-form-item label="饭卡余额" prop="money">
                 <el-input v-model="ruleForm.money"></el-input>
            </el-form-item>
            <el-form-item label="饭卡状态">
                <!-- <el-switch v-model="ruleForm.delivery"></el-switch> -->
                <el-switch
                v-model="ruleForm.isban1"
                active-text="正常"
                inactive-text="禁用">
              </el-switch>
            </el-form-item>
           
           
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加学生</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
            </div>
        </div>
</template>
<script>
// import backgroundcard from '../../components/backgroundcard.vue';
import selects from '../../components/selects.vue'
import fclass from './fclass.vue'
import backgroundcard from '../../components/backgroundcard.vue'
import axios from 'axios'
  export default {
  components: { backgroundcard,fclass },
    data() {
      var ageValidate = (rule, value, callback) => {
      if (this.smsMsg) {
        callback(new Error(this.smsMsg));
      }else{
        callback();
      }
    }
      return {
        
        ruleForm: {
          snumber: '',
          name: '',
          sex: '男',
          birthdata: '',
          address:'',
          // delivery: false,
          phone:'',
          floor:1,
          bedroom:null,
          class:'',
          teacher:'',
          totalm:5600,
          paym:0,
          money:100,
          isban1:true,
          isban:'正常'
       
        },
        rules: {
          snumber: [
            { required: true, message: '学号不能为空', trigger: 'blur' },
           
            { min: 12, max: 12, message: '学号必须为12位', trigger: 'blur' }
          ],
          money: [
            { required: true, message: '饭卡余额不能为空', trigger: 'blur' },
            
            
          ],
           paym: [
            { required: true, message: '已交学费号不能为空', trigger: 'blur' },
            
            
          ],
          teacher: [
            { required: true, message: '辅导员不能为空', trigger: 'blur' },
            
            
          ],
          phone: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
          ],
         bedroom: [
            { required: true, message: '寝室号不能为空', trigger: 'blur' },
            
          ],
         
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '姓别不能为空', trigger: 'blur' }
          ],
          birthdata: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
          ],
           address: [
            { required: true, message: '请选择地址', trigger: 'blur' }
          ],
           class: [
            { required: true, message: '请选择班级', trigger: 'blur' }
          ],
          
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'blur' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'blur' }
          ],
          
        },
       
      };
    },
    methods: {
      submitform(){
       if(this.ruleForm.snumber!==''){
         axios.post('http://localhost:8080/api/check',{
         snumber:this.ruleForm.snumber
       })
       .then((res)=>{
         console.log(res.data.length)
         if(res.data.length){
           alert('该账号有了')
         }
       })
       }
     },
      submitForm(formName) {
        // console.log(this.$refs.f)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.ruleForm.isban1===true){
              this.ruleForm.isban='正常'
            }
            else{
              this.ruleForm.isban='禁用'
            }
            console.log(this.ruleForm)
            axios.post('http://localhost:8080/api/insert',{
              ruleForm:this.ruleForm
            })
            .then((res)=>{
              if(res.data.code){
                this.ruleForm.phone=''
                this.ruleForm.class=''
                this.ruleForm.paym=0
                this.ruleForm.teacher=''
                this.ruleForm.birthdata=''
                this.ruleForm.snumber=''
                this.ruleForm.name=''
                this.ruleForm.address=''
                this.$message({
                message: '插入成功',
                type: 'success'
              });
              this.$router.push({
                path:'/student'
              })
              }
            })
            .catch((err)=>{
              this.$message({
                message: '插入失败',
                type: 'success'
              });
              
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      
    },
   
    }
  
</script>
<style scoped>
    .formdata{
        background-color: #fff;
        width: 82vw;
        padding-bottom: 15px;
        padding-right: 53vw;
        padding-top: 15px;
        margin-left: 15px;
        /* overflow-y:scroll; 
         overflow-x: none; */
        /* width: 80vw; */
        margin-top: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        /* overflow-y: auto;
        overflow-x: hidden; */
    }
    .form{
        overflow-y:scroll; 
         overflow-x: none;
         height: 90vh;
    }
.form::-webkit-scrollbar {
            width: 10px;    
            height: 1px;
        }
        .form::-webkit-scrollbar-thumb {
            border-radius: 3px;
            -webkit-box-shadow: inset 0 0 5px rgb(242, 248, 248);
            background: #363E4F;
        }
      .form::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgb(252, 249, 249);
            border-radius: 2;
            background: rgba(233, 231, 231, 0.1);

        }
</style>