<template>
  <div>
      <el-table
    :data="tableData"
    height="360"
    border
    style="width: 100%">
    <el-table-column
      prop="snumber"
      label="日期"
      align='center'
      width="160">
    </el-table-column>
    <el-table-column
      prop="name"
      align='center'
      label="姓名"
      width="160">
    </el-table-column>
    <el-table-column
      align='center'
      prop="totalm"
      width="160"
      label="学费">
    </el-table-column>
    <el-table-column
      align='center'
      prop="paym"
      width="160"
      label="已交学费">
    </el-table-column>
    <el-table-column
      align='center'
      prop="money"
      label="校园卡余额">
    </el-table-column>
    <el-table-column
      align='center'
      prop="isban"
      label="校园卡状态">
    </el-table-column>
    
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted(){
        this.$bus.$on('getmoney',(data)=>{
            this.tableData=data
        })
    }
  }
</script>