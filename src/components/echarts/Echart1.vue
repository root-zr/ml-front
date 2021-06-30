<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="echart1"></div>
  </div>
</template>

<script>

export default {
  name: "Echart1",
  data(){
    return{
      chartInstance: null,
      // allData: null,
      // currentPage: 1,
      // totalPage: 0,
      // timeId: null //定时器标识
    }
  },
  mounted() {
    this.initChart()
    // this.getData()
    // 在界面加载完成时，主动对屏幕进行适配
    this.screenAdapter()
    window.addEventListener('resize', this.screenAdapter)
  },
  destroyed() {
    clearInterval(this.timeID)
    // 在组件销毁的时候，把监听器取消掉
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods:{
    initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.echart1,'chalk')

      //鼠标事件的监听
      this.chartInstance.on('mouseover',()=>{
        clearInterval(this.timeId)
      })
      this.chartInstance.on('mouseout',()=>{
        this.startInterval()
      })

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
            "type": "bar",
            "name": "\u7535\u5668",
            "legendHoverLink": true,
            "data": [
                24,
                37,
                23,
                7,
                8,
                10,
                11,
                5,
                1,
                2,
                0,
                0
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "right",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "bar",
            "name": "\u98df\u54c1",
            "legendHoverLink": true,
            "data": [
                7,
                3,
                2,
                8,
                8,
                28,
                62,
                23,
                4,
                1,
                2,
                2
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "right",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u7535\u5668",
                "\u98df\u54c1"
            ],
            "selected": {
                "\u7535\u5668": true,
                "\u98df\u54c1": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
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
        "formatter": "{a}\n30\u5929\u9500\u91cf\u5728{b}\u533a\u95f4\u5185\uff1a{c}\u95f4\u5e97\u94fa",
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "name": "\u5e97\u94fa\u6570\u91cf\uff08\u95f4\uff09",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "yAxis": [
        {
            "name": "30\u5929\u9500\u91cf\uff08\u4e07\uff09",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10"
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "10",
                "50",
                "100",
                "200",
                "300",
                "400",
                "500"
            ]
        }
    ],
    "title": [
        {
            "text": "30\u5929\u9500\u91cf\u7edf\u8ba1",
            "padding": 5,
            "itemGap": 10
        }
    ],
    "brush": {
        "toolbox": [
            "rect",
            "polygon",
            "keep",
            "clear"
        ],
        "brushType": "rect",
        "brushMode": "single",
        "transformable": true,
        "brushStyle": {
            "borderWidth": 1,
            "color": "rgba(120,140,180,0.3)",
            "borderColor": "rgba(120,140,180,0.8)"
        },
        "throttleType": "fixRate",
        "throttleDelay": 0,
        "removeOnClick": true
    }
      }
      this.chartInstance.setOption(initOption)
    },
    // async getData(){
    //   const {data: res} = await this.$http.get('http://192.168.43.73:9002/getEchart1Data')  //访问后台
    //   if(res.code==200){
    //     this.allData=res.data;
    //   }else{
    //     this.$message.success(res.msg);  //信息提示
    //   }

    //   //排序
    //   this.allData.sort((a,b)=>{
    //     return a.value - b.value
    //   })
    //   //每五个元素展示一页
    //   this.totalPage = this.allData.length % 5 === 0 ? this.allData.length/5 :this.allData.length/5 + 1
    //   this.updateChart()
    //   this.startInterval() //开启定时器
    // },
    // updateChart(){
    //   const start = (this.currentPage-1)*5
    //   const end = this.currentPage*5
    //   const showData = this.allData.slice(start, end)
    //   const names = showData.map((item) =>{
    //     return item.name
    //   })
    //   const values = showData.map((item) =>{
    //     return item.value
    //   })
    //   const dataOption={
    //     title: {
    //       text: '▎主机弱报警次数',
    //       left: 20,
    //       top: 20,
    //     },
    //     grid: {
    //       top: '20%',
    //       left: '3%',
    //       right: '6%',
    //       bottom: '3%',
    //       // 默认grid不包含坐标轴文字，改为true
    //       containLabel: true,
    //     },
    //     xAxis: {
    //       type: 'value',
    //     },
    //     yAxis: {
    //       type: 'category',
    //       data: names
    //     },
    //     tooltip: {
    //       // 当鼠标移入axis(坐标轴)时展示 底层的背景色
    //       trigger: 'axis',
    //       axisPointer: {
    //         // 展示的类型是线条类型
    //         type: 'line',
    //         lineStyle: {
    //           color: this.axisPointerColor,
    //         },
    //         // 相等于 z-index 将层级调低
    //         z: 0,
    //       },
    //     },
    //     series: [
    //       {
    //         type: 'bar',
    //         data: values,
    //         label: {
    //           show: true,
    //           position: 'right',
    //           textStyle: {
    //             color: 'white',
    //           },
    //         },
    //         // 每一个柱的样式
    //         itemStyle: {
    //           barBorderRadius: [0, 20, 20 ,0],
    //           // new 出 echarts 全局对象的一个线性渐变方法
    //           // 指明方向(第四象限坐标轴),不同百分比之下颜色的值
    //           color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
    //             // 0% 状态时的颜色
    //             { offset: 0, color: '#5052EE' },
    //             // 100% 的颜色
    //             { offset: 1, color: '#AB6EE5' },
    //           ]),
    //         },
    //       },
    //     ],
    //   }
    //   this.chartInstance.setOption(dataOption)
    // },
    // startInterval(){
    //   if(this.timeId){
    //     clearInterval(this.timeId)
    //   }
    //   this.timeId = setInterval(()=>{
    //     this.currentPage++
    //     if(this.currentPage>this.totalPage)
    //       this.currentPage=1
    //     this.updateChart()
    //   },3000)
    // },
    screenAdapter() {
      const titleFontSize = (this.$refs.echart1.offsetWidth / 100) * 3.6
      // 浏览器分辨率大小相关的配置项
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize,
            },
          },
        },
        series: [
          {
            label:{
              show:false,
            },
            barWidth: titleFontSize / 5,
            itemStyle: {
              barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0],
            },
          },
          {
            label:{
              show:false,
            },
            barWidth: titleFontSize / 5,
            itemStyle: {
              barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0],
            },
          },
        ],
      }
      this.chartInstance.setOption(adapterOption)
      // 手动调用图表的 resize 才能产生效果
      this.chartInstance.resize()
    },
  }
}
</script>

<style scoped>

</style>