<template>
    <div>
        <div class="top">
        <div class="logo">
            <h2>新生管理系统</h2>
        </div>
        <div class="login-logn">
            <a href="javascript:void(0)" @click="changeshow">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

            </a>
        </div>
    </div>
    <!-- 个人信息面板 -->
    <div class="user-card" v-show="isshow">
            <p class="admin">{{name}}</p>
            <p id="admain-id">账号ID：{{id}}</p>
            <hr>
            <p 
                class="height el-icon-setting" 
                :style="style1" 
                @click="getbox">
                    <a href="javascript:void(0)"> 
                        修改账号
                    </a>
            </p>
            <p 
                class="height el-icon-switch-button" 
                :style="style2"
                @click="outlogin">
                    <a  href="javascript:void(0)"> 
                    退出登录
                    </a>
            </p>

    </div>
    <!-- 修改信息弹出框 -->
    <box>
        姓名：<el-input v-model="inputname" placeholder="请输入姓名" :style="style3"></el-input> <br><br>
        密码：<el-input v-model="inputpassword" placeholder="请输入密码" minlength='5' :style="style3"></el-input> 
    </box>
    
    </div>
    
</template>

<script>
import box from './box.vue'
import axios from 'axios'
export default {
    name:'top',
    components:{
        box
    },
    data() {
        return {
            style1:{
                marginTop:'10px',
                color:'#DFE1E2',
                fontSize:'13px'

            },
            style3:{
                width:'90%',
            },
            style2:{
                // paddingTop:'-8px',
                color:'#DFE1E2',
                fontSize:'13px',
            },
            isshow:false,
            name:'',
            id:'',
            inputname:'',
            inputpassword:''
            
        }
    },
    methods:{
        // 展示个人信息面板
        changeshow(){
            this.isshow=!this.isshow
        },
        // 退出登录
        outlogin(){
            localStorage.removeItem("token")
            this.$router.replace({
                name:'login'
            })
        },
        // 弹出修改框
        getbox(){
            this.$bus.$emit('getbox','修改账号')
                
        }
    },
    mounted(){
        // 挂载时发送请求获取用户基本信息
        axios.defaults.headers.common["token"]=localStorage.getItem("token")
        axios.get('http://localhost:8080/api/getuser')
        .then((res)=>{
            // 验证token过期
            if(res.data.code===0){
                this.$message.error(res.data.msg);
                // 跳转登录页
                setTimeout(()=>{
                    this.$router.replace({
                    name:'login'
                })
                },3000)
                
            }
            // token验证通过，设置的获取信息
            else{
                this.name=res.data[0].name
                this.id=res.data[0].userid
                this.inputpassword=res.data[0].password
                this.inputname=this.name
                
            }
        })
        .catch((err)=>{
            console.log(err)

        }),
        this.$bus.$on('changebox',()=>{
            console.log(this.inputid,this.inputpassword,this.inputname)
            // 发送请求，修改用户信息，每次发送请求前都要携带token
            axios.defaults.headers.common["token"]=localStorage.getItem("token")
            axios.post('http://localhost:8080/api/changeuser',{//将修改后的信息发送给服务器
                
                password:this.inputpassword,
                name:this.inputname
            })
            .then((res)=>{
                if(res.data.code===0){//验证token过期
                    this.$message.error(res.data.msg);
                    setTimeout(()=>{
                    this.$router.replace({
                    name:'login'
                })
                 },3000)
                }
                else{
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        

                });
                    this.name=this.inputname//修改成功后，重新设置个人面板信息
                    
                    
                }
            })
        })
    }
}
</script>

<style scoped>
.height:hover{
    background-color: #394860;
    
}
a{
    color: #DFE1E2;
    text-decoration: none;
    
}
hr{
    width: 270px;
    /* height: 0.1px; */
   
    border: 0.3px solid #3E4F6A;
}
.admin{
    color: #C1C6C8;
    font-size: 17px;
    padding-top: 20px;
    margin-bottom: 12px;
}
#admain-id{
    color: #9e9e9e;
    font-size: 12px;
}
p{
    padding-left: 20px;
    
    margin-bottom: 8px;
    width: 270px;
    height: 30px;
    line-height: 30px;
}
.user-card{
    width: 270px;
    background-color: #1E222D;
   position: absolute;
   right: 0px;
    /* text-align: center; */
    color: #fff;
    z-index: 999;
}
    .top{
        height: 50px;
        width: 100vw;
        background-color: #262F3E;
        display: flex;
        justify-content: space-between;
        align-items:center
    }
    .logo{
        color: #fff;
        margin-left: 17px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .el-avatar{
        color: red;
        width: 33px;
        height: 33px;
        margin-right: 15px;
        
    }
   
   span{
       color: #C1C6C8;
   }
   

</style>