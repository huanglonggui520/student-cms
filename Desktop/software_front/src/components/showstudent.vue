<template>
  <div>
      <!-- Table -->

    <el-dialog title="学生详情" :visible.sync="dialogTableVisible" :lock-scroll="false" >
        <div class="student1">
            <div>
                <span class="value">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</span> <span class="houm">{{row.Snumber}}</span>
                <span class="key">
                    <span class="value">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span> <span class="houm">{{row.name}}</span>
                </span>
            </div>
            <div>
                <span class="value">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span> <span class="houm">{{row.sex}}</span>
                <span class="key">
                    <span class="value">出生日期</span> <span class="houm">{{row.birthdata}}</span>
                </span>
            </div>
            <div>
                <span class="value">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</span> <span class="houm">{{row.phone}}</span>
                <span class="key">
                    <span class="value">所属地址</span> <span class="houm">{{row.address}}</span>
                </span>
            </div>
            <div>
                <span class="value">所在班级</span> <span class="houm">{{jb_value.class}}</span>
                <span class="key">
                    <span class="value">辅&nbsp;&nbsp;导&nbsp;&nbsp;员</span> <span class="houm">{{jb_value.teacher}}</span>
                </span>
            </div>
            <div>
                <span class="value">寝室楼号</span> <span class="houm">{{jb_value.floor}}</span>
                <span class="key">
                    <span class="value">寝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室</span> <span class="houm">{{jb_value.bedroom}}</span>
                </span>
            </div>
            <div>
                <span class="value">学年学费</span> <span class="houm">{{jb_value.totalm}}</span>
                <span class="key">
                    <span class="value">已付学费</span> <span class="houm">{{jb_value.paym}}</span>
                </span>
            </div>
            <div>
                <span class="value">饭卡余额</span> <span class="houm">{{jb_value.money}}</span>
                <span class="key">
                    <span class="value">饭卡状态</span> <span class="houm">{{jb_value.isban}}</span>
                </span>
            </div>
             
            
           
        </div>
          
    </el-dialog>



  


  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        jb_value:{},
        row:{}
      };
    },
    methods:{
        show(row){//获取学生总人数
            this.jb_value={}
            this.row=row
            axios.post('http://localhost:8080/api/getall',{
                snumber:row.Snumber
            })
            .then((res)=>{
                console.log('收到',res.data)
                this.jb_value=res.data[0]
            })
            .catch((err)=>{
                console.log(err)
            })
            this.dialogTableVisible=true
        }
    },
    mounted(){
        this.$bus.$on('show',this.show)
    }
  };
</script>

<style scoped>
    .key{
       
        /* display: block; */
        /* margin-right: 150px; */
        position:absolute;
        left: 270px;
        /* right: 200px; */
       
        
    }
    .houm{
        font-size: 14px;
    }
    .value{
        /* position:absolute;
        left: 110px; */
        color: #99a9bf;
         font-size: 15px;
        /* color: #99a9bf; */
        margin-right: 15px;
    }
    .student1 div{
        margin-bottom: 15px;
        
        
    }
    .student1{
        position: relative;
        
    }
    
</style>