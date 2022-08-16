
<template>
  <div class="leftmenu">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
       unique-opened
       router
       :default-active='student'
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#363E4F"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          
          <template slot="title">
            <i><img src="../assets/学生1.png"/></i>
            <span> 学生数据</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/student"> <img src="../assets/学生数据分析.png"/> 学生管理</el-menu-item>
            <el-menu-item index="/class" ><img src="../assets/学生统计3.png"/> 班级管理</el-menu-item>
            <el-menu-item index="/money"><img src="../assets/财务流水1.png"/> 财务信息</el-menu-item>
            <el-menu-item index="/room"><img src="../assets/寝室管理.png"/> 寝室管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
              <i><img src="../assets/教师.png"/></i>

            <span> 教师信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/error" >选项1</el-menu-item>
            <!-- <el-menu-item index="/error">选项2</el-menu-item> -->
          </el-menu-item-group>
          
         
        </el-submenu>
        
 
        
      </el-menu>
    </el-scrollbar>
    
  </div>
</template>
 
<script type="text/ecmascript-6">
export default {
  name:'leftmenu',
  data() {
    return {
      student:this.$router.history.current.path
    }
  },
  components: {},
  
  mounted(){
    // console.log(this.$router.history.current.path)
    // this.student
    // this.student
    console.log(this.student)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
 
 watch:{
        // 监听 this.$route.path     watch监听非DOM元素的改变
        '$route.path':function(newVal,oldVal){
          this.student=newVal
          
        }
      }
}
</script>
 
<style lang="css" scoped>
*{
  font-size: 16px;
    overflow-x: hidden;

  /* color: #fff; */
}
.leftmenu{
    /* x轴的滚动条隐藏 */
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    width: 200px;
    background-color: #363E4F;
    /* padding-left: 5px; */
}
/* 设置滚动条样式 */
.leftmenu::-webkit-scrollbar {
            width: 6px;    
            /*height: 4px;*/
        }
        div::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgb(20, 19, 19);
            background: rgb(147, 148, 147);
        }
        div::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgb(201, 200, 200);
            border-radius: 0;
            background: rgba(233, 231, 231, 0.1);

        }
 .el-scrollbar{
          width: 200px;
        }
.el-menu-item{
          background-color: #1E222D !important;
        } 
.is-active{
          background-color: #006EFF !important;
          color:#fff !important;

        }
.el-menu-item:hover{
          background-color: #646767 !important;
        }
  .el-submenu__title{
    font-size: 20px !important;
    background-color: red !important;
  }
  img{
    margin-left: 5px;
    width: 14px;
    height: 14px;
  }
  
</style>
