import VueRouter from "vue-router"
import login from '../pages/login/login.vue'
import index from '../pages/index'
import student from '../pages/index/student.vue'
import echart from '../pages/index/echart.vue'
import formdata from '../pages/index/formdata.vue'
import fclass from '../pages/index/fclass.vue'
import money from '../pages/index/money.vue'
import room from '../pages/index/room.vue'
import kong from '../pages/index/kong.vue'


const router=new VueRouter({
    routes:[
        {
            path:'/login',
            name:'login',
            component:login,
            meta:{
                title:'登录'
            }
        },
        {
            path:'/',
            name:'index',
            component:index,
            meta:{
                isAuth:true
            },
            children:[
                {
                name:'student',
                path:'student',
                component:student,
                meta:{
                    isAuth:true,
                    title:'学生管理'

                },
            },
            {
                name:'echart',
                path:'/',
                component:echart,
                meta:{
                    isAuth:true
                },
            },
            {
                name:'fclass',
                path:'class',
                component:fclass,
                meta:{
                    isAuth:true,
                    title:'班级管理'
                }
            },
            {
                name:'room',
                path:'room',
                component:room,
                meta:{
                    isAuth:true,
                    title:'寝室管理'
                }
            },
            {
                name:'money',
                path:'money',
                component:money,
                meta:{
                    isAuth:true,
                    title:'财务管理'
                }
            },
            {
                name:'formdata',
                path:'formdata',
                component:formdata,
                meta:{
                    isAuth:true,
                    title:'添加学生'
                },
            },
            {
                name:'error',
                path:'error',
                component:kong,
                meta:{
                    isAuth:true,
                    title:'错误'
                },
            }
        ]
        }
    ]
    
})
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.getItem("token")){
            next()
        }else{
            alert('请先登录哦！')
            next({
                name:'login'
            })
        
        }
    }else{
        next()
    }
})
router.afterEach((to,from)=>{
	// console.log('afterEach',to,from)
	if(to.meta.title){ 
		document.title = to.meta.title //修改网页的title
	}else{
		document.title = '贵州师范大学'
	}
})
export default router