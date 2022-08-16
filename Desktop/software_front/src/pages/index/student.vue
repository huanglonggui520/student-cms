<template>
    <div class="student">
        <backgroundcard>
            <el-breadcrumb-item>学生管理</el-breadcrumb-item>
        </backgroundcard>
        <div class="table">
            
            <div id="search" @keyup.enter="search">
                <span class="search">姓名 </span>
                <el-input 
                size="small" 
                :style="search_input" 
                v-model="input" 
                clearable
                placeholder="请输入内容">
                </el-input>
                <el-button 
                size="small" 
                type="primary" 
                @click="search"
                icon="el-icon-search">搜索</el-button>
            </div>
            <div class="add">
                <el-button 
                size="medium" 
                type="primary" 
                @click="add"
                icon="el-icon-plus">添加学生</el-button>
                
                <el-popconfirm
                @confirm="del"
                confirm-button-text='好的'
                cancel-button-text='不用了'
                icon="el-icon-info"
                icon-color="red"
                title="你确实要删除选中信息吗？"
                >
                <el-button 
                size="medium" 
                icon="el-icon-delete-solid" 
                :disabled='isdisabled' 
                slot="reference">批量删除</el-button>
            </el-popconfirm>
            </div>
            <div class="table-student">
                <table_student/>
                <pag/>
            </div>

        </div>
    </div>  
</template>

<script>
import table_student from '../../components/table_student.vue'
import backgroundcard from '../../components/backgroundcard.vue'
import pag from '../../components/pag.vue'
import axios from 'axios'
export default {
    name:'student',
    components:{
        backgroundcard,
        table_student,
        pag
    },
    methods:{
        search(){//搜索学生
        
            if(this.input!==''){
                this.$store.commit('student/changeloading',true)//将表格加载状态该为真
                console.log(this.input)
            axios.post('http://localhost:8080/api/search',{
                name:this.input
            })
            .then((res)=>{
                setTimeout(()=>{
                    this.$store.commit('student/changeloading',false)
                },300)
                console.log(res.data)
            this.$store.commit('student/search',res.data)
            this.$store.commit('student/changetotal',res.data.length)

            })
            }
            else{
                this.$message({
                message: '请输入内容后再搜索',
                type: 'warning'
                });
            }
        },
        add(){
            this.$router.push({
                name:'formdata'
            })
        },
        del(){//删除学生
            axios.post('http://localhost:8080/api/deletestudent',{//删除单个学生
            student:this.multipleSelection
            })
            .then((res)=>{
                if(res.data.code){
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.$store.commit('student/deletestudent',this.multipleSelection)
                    

                }
            })
            .catch((err)=>{
                console.log(err)
            })

        },
        gets(value){//
            this.multipleSelection=value
            // console.log('123456',this.multipleSelection)
        }
    },
    watch:{
        input(){//监视搜索框，如果为空，则重新加载学生数据
            if(this.input===''){
                this.$store.dispatch('student/getstudent')
                this.$store.dispatch('student/getstudenttotal')
            }
        }
    },
    data() {
        return {
            input:'',
        
            multipleSelection:[],
            search_input:{
                width:'20%',
                
            }
        }
    },
    computed:{
        isdisabled(){//批量删除是否显示
           return !this.multipleSelection.length ? true : false
        }
    },
    mounted() {
        this.$store.dispatch('student/getstudent')
        this.$store.dispatch('student/getstudenttotal')
        this.$bus.$on('gets',this.gets)//获取table_student组件里的删除数据
    },

}
</script>

<style scoped>
    .table-student{
        margin-top: 15px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .add{
        margin-top: 12px;
    }
    #search{
        padding-top: 10px;
        padding-left: 20px;
    }
    .table{
        width: 83vw;
        margin-top: 50px;
        border-radius: 3px;
        padding-bottom: 5px;
        /* max-height: 80vh; */
        /* overflow: hidden; */
        /* height: 80vh; */
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-left: 13px;
        background-color: #fff;
    }
    /* .search_input{
        width: 20%;
        height: 33px;
        line-height: 33px;
    } */
    .search{
        color: #4A4F5D;
        margin-right: 5px;
    }
    .el-button{
        margin-left: 20px;
        
    }
    
    
    

</style>