<template>
  <el-switch
        v-model="value2"
        disabled
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="正常"
        inactive-text="禁用">
    </el-switch>
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
        value2:true
        
    }
},
computed:{
    
},
mounted(){
    this.$bus.$on('getisban',(data)=>{
        console.log('77',data)
        // this.value2=data.isban
    })
}
}
</script>

<style>

</style>