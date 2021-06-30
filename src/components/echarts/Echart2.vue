<template>
  <div class="com-comtainer">
    <!-- <div class="title">
      <span>{{showTitle}}</span>
      <span class="iconfont title-icon" @click="showChoice = !showChoice">&#xe6eb</span>
      <div class="select-con" v-show="showChoice">
        <div class="select-item" v-for="item in selectType" :key="item.key" @click="handleSelect(item.key)">
          {{ item.text }}
        </div>
      </div>
    </div> -->
    <div class="com-chart" ref="echart2"></div>
  </div>
</template>

<script>

export default {
  name: "Echart2",
  data(){
    return{
      chartInstance: null,
      // allData: {
      //   "mem": {
      //     "title": "▎近15分钟最高内存使用百分比",
      //     "unit": "%",
      //     "data": [],
      //   },
      //   "desk": {
      //     "title": "▎近15分钟最高磁盘使用百分比",
      //     "unit": "%",
      //     "data": [],
      //   },
      //   "type": [{
      //     "key": "mem",
      //     "text": "近15分钟最高内存使用百分比"
      //   }, {
      //     "key": "desk",
      //     "text": "近15分钟系统最高磁盘使用百分比"
      //   }]
      // },
      // showChoice:false,
      // choiceType:'mem',
      // y:['15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
    }
  },
  mounted() {
    this.initChart()
    // this.getData()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  // computed:{
  //   selectType(){
  //     if(!this.allData){
  //       return []
  //     }else {
  //       return this.allData.type.filter(item =>{
  //         return item.key != this.choiceType
  //       })
  //     }
  //   },
  //   showTitle(){
  //     if(!this.allData){
  //       return []
  //     }else{
  //       return this.allData[this.choiceType].title
  //     }
  //   }
  // },
  methods:{
    async initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.echart2,'chalk')
      const initOption={
        "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "funnel",
            "name": "\u5546\u54c1",
            "data": [
                {
                    "name": "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e100000\u5143",
                    "value": 13
                },
                {
                    "name": "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e50000\u5143\u5c0f\u4e8e60000\u5143",
                    "value": 120
                },
                {
                    "name": "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e60000\u5143\u5c0f\u4e8e100000\u5143",
                    "value": 5
                },
                {
                    "name": "\u4fdd\u8bc1\u91d1\u5c0f\u4e8e50000\u5143",
                    "value": 5
                }
            ],
            "sort": "ascending",
            "gap": 0,
            "label": {
                "show": true,
                "position": "inside",
                "margin": 8
            }
        }
    ],

// label显示
    "legend": [
        {
            "data": [
                "\u4fdd\u8bc1\u91d1\u5c0f\u4e8e50000\u5143",
                "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e50000\u5143\u5c0f\u4e8e60000\u5143",
                "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e60000\u5143\u5c0f\u4e8e100000\u5143",
                "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e100000\u5143"
            ],
            "selected": {
                "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e100000\u5143": true,
                "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e50000\u5143\u5c0f\u4e8e60000\u5143": true,
                "\u4fdd\u8bc1\u91d1\u5927\u4e8e\u7b49\u4e8e60000\u5143\u5c0f\u4e8e100000\u5143": true,
                "\u4fdd\u8bc1\u91d1\u5c0f\u4e8e50000\u5143": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    //        鼠标移到上面的阴影
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding":14
    },
    "title": [
        {
            "text": "\u7535\u5668\u5e97\u94fa\u4fdd\u8bc1\u91d1\u5206\u5e03",
            "padding":50,
            "itemGap": 10
        }
    ]
      }
      this.chartInstance.setOption(initOption)
      window.addEventListener('resize', this.screenAdapter)
      // 主动触发 响应式配置
      this.screenAdapter()
    },
    // async getData(){
    //   const {data: res1} = await this.$http.get('http://192.168.43.73:9002/getMemStateByTimeSeries/2021-06-25_14:00:00/2021-06-25_14:15:00')  //访问后台
    //   const {data: res2} = await this.$http.get('http://192.168.43.73:9002/getDeskStateByTimeSeries/2021-06-25_14:00:00/2021-06-25_14:15:00')  //访问后台
    //   if(res1.code==200){
    //     this.allData.mem.data = res1.data;
    //     this.allData.desk.data = res2.data;
    //   }else{
    //     this.$message.error(res1.msg);  //信息提示
    //   }
    //   this.updateChart();
    // },
    // updateChart(){
    //   // 半透明的颜色值
    //   const colorArr1 = ['rgba(11, 168, 44, 0.5)', 'rgba(44, 110, 255, 0.5)', 'rgba(22, 242, 217, 0.5)', 'rgba(254,33,30,0.5)', 'rgba(250, 105, 0, 0.5)','rgba(250, 105, 0, 0.5)','rgba(44, 110, 255, 0.5)', 'rgba(22, 242, 217, 0.5)', 'rgba(254, 33, 30, 0.5)', 'rgba(250, 105, 0, 0.5)']
    //   // 全透明的颜色值
    //   const colorArr2 = ['rgba(11, 168, 44, 0)', 'rgba(44, 110, 255, 0)', 'rgba(22, 242, 217, 0)', 'rgba(254, 33, 30, 0)', 'rgba(250, 105, 0, 0)','rgba(11, 168, 44, 0)', 'rgba(44, 110, 255, 0)', 'rgba(22, 242, 217, 0)', 'rgba(254, 33, 30, 0)', 'rgba(250, 105, 0, 0)']

    //   const timeArr = this.y
    //   const valueArr = JSON.parse(this.allData[this.choiceType].data)
    //   const seriesArr = valueArr.map((item, index) =>{
    //     return{
    //       name:item.name,
    //       type: 'line',
    //       data: item.data,
    //       stack: this.choiceType,
    //       areaStyle:{
    //         color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //           // 0% 颜色
    //           {
    //             offset: 0,
    //             color: colorArr1[index],
    //           },
    //           // 100% 颜色
    //           {
    //             offset: 1,
    //             color: colorArr2[index],
    //           },
    //         ]),
    //       }
    //     }
    //   })
    //   const legendArr = valueArr.map(item => {
    //     return item.name
    //   })
    //   const dataOption = {
    //     xAxis: {
    //       data: timeArr,
    //     },
    //     legend: {
    //       data: legendArr,
    //     },
    //     series: seriesArr,

    //   }
    //   this.chartInstance.setOption(dataOption)
    // },
    screenAdapter() {
      // 测试算出来的 合适的字体大小
      this.titleFontSize = (this.$refs.echart2.offsetWidth / 100) * 3.6

      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize/3,
          itemHeight: this.titleFontSize/3,
          // 间距
          itemGap: this.titleFontSize,
          textStyle: {
            fontSize: this.titleFontSize / 1.3,
          },
        },
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    handleSelect(currentType){
      this.choiceType = currentType
      this.updateChart()
      this.showChoice = false
    }
  }
}
</script>

<style scoped>
.title{
  position: absolute;
  left:20px;
  top:20px;
  z-index: 10;

}
.title-icon{
  margin-left: 10px;
  cursor: pointer;
}

</style>