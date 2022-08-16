<template>
    <div>
        <backgroundcard>
            <el-breadcrumb-item>财务管理</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>{{xclass}}</el-breadcrumb-item> -->

        </backgroundcard>
        <div class="fclass">
            <div id="search" @keyup.enter="search">
                <el-input 
                size="small" 
                v-model="input" 
                clearable
                placeholder="姓名关键词搜索">
                </el-input>
                <el-button 
                size="small" 
                type="primary" 
                @click="search"
                icon="el-icon-search">搜索</el-button>
            </div>
            <moneytable/>
        </div>
        
        
    </div>
</template>

<script>
import backgroundcard from '../../components/backgroundcard.vue'
import classstudent from '../../components/classstudent.vue'
import moneytable from '../../components/moneytable.vue'
import axios from 'axios'
export default {
    name:'fclass',
    components:{
        backgroundcard,
        moneytable,
        // table_student,
        classstudent
    },
    data() {
        return {
            input:''
        }
    },
    mounted(){
        this.getmoney()
    },
    methods: {
        getmoney(){
            axios.post('http://localhost:8080/api/getmoney')
            .then((res)=>{
                console.log(res.data)
                this.$bus.$emit('getmoney',res.data)
                setTimeout(()=>{
                this.$bus.$emit('getisban',res.data)
                })
            })
        },
        search(){

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
    padding-right: 7px;
    margin-left: 10px;
    padding-top: 10px;
    padding-left: 15px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
 .search{
        color: #4A4F5D;
        margin-right: 5px;
        display: flex;
    }
    .el-input{
        width: 200px;
        margin-right: 7px;
    }
    #search{
        padding-top: 10px;
        padding-left: 10px;
        /* width: 200px; */
    }
</style>