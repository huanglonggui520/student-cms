<template>
    <div class="login">
        <!-- 登录的卡片 -->
        <div class="login-card">
            <h3>用户登录</h3>
            <el-input   
                @input="removeErrmsg"
                type='text' 
                placeholder="请输入账号" 
                :style="style" 
                prefix-icon='el-icon-user' 
                v-model="number">
            </el-input>
             <el-input
                type='password' 
                @input="removeErrmsg"
                v-model="password"
                placeholder="请输入密码" 
                :style="style" 
                prefix-icon='el-icon-lock'>
            </el-input>
            <span class="error-msg" v-show="iserror">账号或者密码错误</span>
            <el-button type="primary" :loading="isloading" @click="submit" round>
                {{loading}}
            </el-button>
            
            


        </div>
       
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'login',
    data() { 
        return {
            style:{
                width:'80%',
                height:'30px'
            },
            number:'',
            password:'',
            iserror:false,
            isloading:false,
            loading:'登录',
            
            
        }
    },
    computed:{
        issubmit(){//检测登录账号和密码不为空
            if(this.password!='' && this.number!=''){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        removeErrmsg(){
            this.iserror=false//处理密码错误
        },
        submit(){
            console.log(this.issubmit)
            if(this.issubmit){//密码格式验证通过，向服务器发送请求
                this.loading='登录中'
                this.isloading=true
                this.password=this.password
                axios.post('http://localhost:8080/api/login',{//post请求登录
                    userid:this.number,
                    password:this.password
                })
                .then((res)=>{
                    if(res.data.code){
                        localStorage.setItem("token",res.data.token)//存放本地密钥
                        this.$message({
                            message: res.data.msg,
                            type: 'success',
                            center: true
                        });     
                    
                    setTimeout(()=>{//此处延迟一秒跳转首页
                    this.$router.replace({
                        path:'/'
                    })
                    },1000)

                    }
                    else{
                        this.iserror=true
                        this.loading='登录'
                        this.isloading=false
                    }
                })
                .catch((error)=>{
                    this.isloading=false
                    this.loading='登录'
                    console.log(error)

                })
                }else{
                    alert('账号或者密码不能为空')
                }
        },
        
    }

}
</script>

<style scoped>
.login-card{
    margin: 100px auto;
    position: relative;
    border-radius: 4px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 25px;
    width: 350px;
    /* height: px; */
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.el-input{
    margin-bottom: 35px;
}

.el-button{
    width: 70%;
    /* padding-top: 10px; */
}
h3{
    margin-bottom: 25px;
    color: #403D3D;
    /* background-color: red; */
}

.error-msg{
    color: red;
    font-size: 8px;
    display: block;
    position: absolute;
    left: 40px;
    bottom: 75px;
    /* margin-top: -90px; */
}
</style>