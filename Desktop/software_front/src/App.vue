<template>
  <div id="app">
   

    <router-view></router-view>
  </div>
</template>

<script>
// import index from './pages/index/index.vue'
export default {
  name: 'App',
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  /* overflow: hidden; */
}
html{
  height: 100vh;
  width: 100vw;
}
body{
  background-color: #EAEBEE;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

</style>
