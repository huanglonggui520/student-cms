//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.timeout = 10000;
//应用Vuex插件
Vue.use(Vuex)

//学生基本信息
const student = {
	namespaced:true,//开启命名空间
	actions:{
		getstudent(context,value){
			console.log(context)
			context.state.loading=true
			value=value || 1
			console.log('服务器异常',value)
			axios.post('http://localhost:8080/api/getstudent',{
				currentpag:value
			})
			.then((res)=>{
				// console.log(res.data)
			    
				setTimeout(()=>{
					context.commit('getstudent',res.data)
					context.state.loading=false
				},400)
			})
			.catch((err)=>{
				console.log(err)
				context.state.loading=false
				alert('数据请求失败')
			})
		},
		getstudenttotal(context){
			axios.post('http://localhost:8080/api/getstudenttotal')
			.then((res)=>{
				console.log(res.data[0].count)
				context.commit('getstudenttotal',res.data[0].count)
			})
			.catch((err)=>{
				console.log(err)
			})

		},
		
	},
	state:{
		studentNumbers:[],//存放学生数据
		total:0,//学生总数
		loading:false//是否处于加载
	},
	getters:{
		isshow(state){
			return state.studentNumbers.isshow
		}
	},
	mutations:{
		//更新表格
		updatedstudent(state,value) {
			state.studentNumbers.forEach(element => {
				// console.log(element)
				if(element.Snumber===value.snumber){
					console.log(element)
					element.name=value.name
					element.address=value.address
					element.birthdata=value.birthdata
					element.phone=value.phone
					element.sex=value.sex
				}
			});
		},
		changetotal(state,value){//当搜索后更新分页总页数
			state.total=value
		},
		getstudent(state,value){//获取学生所有数据
			state.studentNumbers=value
			console.log('@@',state.studentNumbers)
		},
		search(state,value){//搜索学生
			state.studentNumbers=value
		},
		changeloading(state,value){//更改表格加载状态
			state.loading=value
			
		},
		getstudenttotal(state,value){//获取学生总数，用于控制分页显示
			state.total=value || 1
			// console.log("666",value)
		},
		deletestudent(state,value){//删除数据库的同时也删除VUEX里的数据，保证页面能及时刷新
			for(let i=0;i<value.length;i++){
				state.studentNumbers=state.studentNumbers.filter((v)=>{
					return v.Snumber!==value[i].Snumber
				})
			}
			// console.log('123456789',value)
			
		}
	}
  }
  
  const personAbout = {
	namespaced:true,//开启命名空间
  }
  
  const store = new Vuex.Store({
	modules: {
	  student,
	
	}
  })
  export default store