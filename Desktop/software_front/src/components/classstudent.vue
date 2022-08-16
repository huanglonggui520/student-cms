<template>
  <div>
    <el-table
    :data="tableData"
    height="350"
    v-loading="loading"
    border
    style="width: 100%">
    <el-table-column
      prop="snumber"
      label="学号"
      align='center'
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align='center'
      >
    </el-table-column>
    <el-table-column
      prop="class"
      label="班级"
      align='center'
      >
    </el-table-column>
    <el-table-column
      prop="teacher"
      label="辅导员"
      align='center'
      >
    </el-table-column>
    <el-table-column
      prop="address"
      align='center'
      width="150"
      label="操作">
      <template slot-scope="scope">
        <!-- <el-button  type="primary" size="mini" @click="revise(scope.row)">编辑</el-button>
        <el-button size="mini" @click="show(scope.row)">查看</el-button>
        <el-button size="mini" type="danger" @click="handleClick(scope.row)">删除</el-button> -->
        <el-button type="text" @click="revise(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <classbox/>
  </div>
</template>

<script>
import classbox from './classbox.vue'
  export default {
    
    data() {
      return {
        tableData: [],
        loading:false
      }
    },
    components:{
      classbox
    },
    methods: {
      revise(row){
        console.log(row)
        this.$bus.$emit('classbj',row)
      },

    },
    mounted(){
      this.$bus.$on('getclass',(data)=>{
        this.tableData=data || null
        console.log(data)
      }),
       this.$bus.$on('changeloading',(data)=>{
      this.loading=data
    })
    },
   
    
  }
</script>
<style scoped>

</style>