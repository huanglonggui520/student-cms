<template>
    <div>
        <backgroundcard>
            <el-breadcrumb-item>班级管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{xclass}}</el-breadcrumb-item>

        </backgroundcard>
        <div class="fclass">
            <el-dropdown @command="handleCommand" trigger="click">
            <el-button type="primary" size="medium">
                {{xclass}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="p.class" v-for="(p,index) in classs" :key="index">{{p.class}}</el-dropdown-item >
                <!-- <el-dropdown-item command="大数据">大数据</el-dropdown-item>
                <el-dropdown-item command="汉语言文学">汉语言文学</el-dropdown-item>
                <el-dropdown-item command="软件工程">软件工程</el-dropdown-item>
                <el-dropdown-item command="土木工程">土木工程</el-dropdown-item>
                <el-dropdown-item command="物理">物理</el-dropdown-item> -->
            </el-dropdown-menu>
            </el-dropdown>
            <!-- <table-student/> -->
            <classstudent/>
        </div>
        
    </div>
</template>

<script>
import backgroundcard from '../../components/backgroundcard.vue'
import classstudent from '../../components/classstudent.vue'
import axios from 'axios'
export default {
    name:'fclass',
    components:{
        backgroundcard,
        // table_student,
        classstudent
    },
    data() {
        return {
            xclass:'请选择班级',
            classs:[],

        }
    },
    mounted(){
        this.getclasstoal()
    },
    methods: {
        getclasstoal(){
            axios.post('http://localhost:8080/api/getclasstoal')
            .then((res)=>{
                // console.log(res.data)
                this.classs=res.data
                console.log(this.classs)
            })
        },
      handleCommand(command) {
          this.$bus.$emit('changeloading',true)
          this.xclass=command
        this.getclass(command)
      },
      getclass(){
          axios.post('http://localhost:8080/api/getclass',{
              class:this.xclass
          })
          .then((res)=>{
            //   console.log(res.data)
              setTimeout(()=>{
                  this.$bus.$emit('changeloading',false)
              },200)
              this.$bus.$emit('getclass',res.data)
          })
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