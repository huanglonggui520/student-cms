<template>
    <div class="middle">
        <leftmenu/>
        <router-view></router-view>
        <!-- <fclass/> -->
        
    </div>
</template>


<script>
import formdata from '../pages/index/formdata.vue'
import leftmenu from './leftmenu.vue'
import student from '../pages/index/student.vue'
import echart from '../pages/index/echart.vue'
import backgroundcard from './backgroundcard.vue'
import fclass from '../pages/index/fclass.vue'
export default {
  
    name:'middle',
    components:{
        leftmenu,
        backgroundcard,
        fclass,
        echart,
        student,
        formdata
    }
}
</script>

<style scoped>
    .middle{
        display: flex;
        /* overflow: aotu; */
        
        /* flex: 1; */
        /* float: left; */
    }
</style>