<template>
<div class="echart">
  <backgroundcard/>
  <div class="echart-top">
    <div class="wai"><img src="../../assets/人数.png"><div><span class="numbers"> 6520<br></span><span class="number">新生人数</span></div></div>
    <div class="wai"><img src="../../assets/我的寝室.png"><div><span class="numbers"> 1290<br></span><span class="number">寝室数量</span></div></div>
    <div class="wai"><img src="../../assets/辅导员.png"><div><span class="numbers"> 132<br></span><span class="number">辅导员数量</span></div></div>
    <div class="wai"><img src="../../assets/班级1.png"><div><span class="numbers"> 4760<br></span><span class="number">班级数量</span></div></div>
  </div>
  <div id="main1">
  </div>
  <div id="main2">
  </div>
  <div id="main3"></div>
  
</div>
  
</template>

<script>
import backgroundcard from '../../components/backgroundcard.vue'
import * as echarts from 'echarts';
import axios from 'axios'
export default {
  name:'echart',
  components:{
    backgroundcard
  },
  methods:{
    main1(){
       var chartDom = document.getElementById('main1');
      var myChart = echarts.init(chartDom,null,{
        // width:1000,
        // height:230,
        // top:'-430'
      });
      var option;
      
      option = {
         title:{
        text:'历届新生人数',
        textStyle:{
          color:'#5C5C5E'
        }
      },
         grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top:'20%',
    containLabel: true
  },
        xAxis: {
          type: 'category',
          data: ['18级学生', '19级新生', '20级新生', '21级新生']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [15, 55, 37, 60],
            type: 'line'
          }
        ]
      };

      option && myChart.setOption(option);
    },
    main2(){
      var chartDom = document.getElementById('main2');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
       color: [
         '#0083D0'
  ],
  
      title:{
        text:'新生分布',
        textStyle:{
          color:'#5C5C5E'
        }
      },
       grid: {
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true
  },
  tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: '人数',
        }
      ]
};option && myChart.setOption(option);
    },
    main3(){
      var chartDom = document.getElementById('main3');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '男女比例',
    // subtext: 'Fake Data',
    left: 'center',
    textStyle:{
      color:'#555656'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '男' },
        { value: 735, name: '女' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);

    }
  },
  mounted(){
     this.main1(),
     this.main2(),
     this.main3()

          },
          
        
        
}
</script>

<style scoped>
#main2{
  width:36vw;
  margin-top: 20px;
  margin-left: 70px;
  /* padding-top: 10px; */
  height: 250px;
  position: relative;
  top: 180px;
  background-color: #fff;
}
#main3{
  width:36vw;
  float: left;
  margin-top: 10px;
  margin-left: 557px;
  /* padding-top: 10px; */
  height: 250px;
  position: relative;
  top: -79px;
  background-color: #fff;
}
#main1{
  width:74vw;
  margin-left: 70px;
  /* padding-top: 10px; */
  height: 250px;
  position: relative;
  top: 180px;
  background-color: #fff;
}
.wai div{
    width: 120px;
    padding-top: 12px;
    text-align: center;
    /* padding-bottom: 10px; */
    /* background-color: red; */
    height: 100px;
    position:absolute;
    top:0px;
    right: 17px;
}
.number{
   top: 60px;
  font-size: 12px;
  color: #9E9E9E;
  left: 110px;
  /* position: absolute; */
  
}
.numbers{
  /* padding-bottom: 20px; */
  /* top: 15px; */
  font-size: 35px;
  color: #656567;
  /* left: 105px; */
  /* position: absolute; */
  
}
.echart .echart-top .wai{
  text-align: left;
  position: relative;
  top: 20px;
  float: left;
  /* line-height: 100px; */
  width: 220px;
  height: 100px;
  margin-left: 20px;
  padding-top: 15px;
  /* padding-left: 5px; */
  background-color: #fff;
  /* margin-bottom: 20px; */
}
.echart{
  overflow-y:scroll;
  overflow-x: none;
  width: 85vw;
  height: 91vh;
}
.echart::-webkit-scrollbar {
            width: 10px;    
            height: 1px;
        }
        .echart::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgb(169, 170, 170);
            background: #363E4F;
        }
      .echart::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgb(138, 137, 137);
            border-radius: 2;
            background: rgba(233, 231, 231, 0.1);

        }
img{
  width: 64px;
  margin-left: 20px;
  height: 64px;
}
.echart .echart-top{
  /* width: 100vw; */
  /* flex: 1; */
  text-align:center;
  /* margin: 0 auto; */
  padding-left: 4vw;
}


</style>