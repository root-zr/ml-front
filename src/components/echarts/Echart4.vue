<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="echart4"></div>
  </div>
</template>

<script>

export default {
  name: "Echart4",
  data(){
    return{
      chartInstance: null,
      allData: [],
      startValue:0,
      endValue:9,
      timeId: null
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
    clearInterval(this.timerId)
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    // 主动触发 响应式配置
    this.screenAdapter()
  },

  methods:{
    initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.echart4,'chalk')
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
                19,
                3,
                11,
                2,
                26,
                17,
                10,
                13,
                5,
                3,
                3
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
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u98df\u54c1",
            "legendHoverLink": true,
            "data": [
                23,
                25,
                29,
                10,
                22,
                10,
                7,
                7,
                7,
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
                "position": "top",
                "margin": 8
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
        "formatter": "{a}\n\u5f00\u4e1a{b}\u5e74\uff1a{c}\u95f4\u5e97\u94fa",
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "name": "\u5f00\u5e97\u65f6\u957f\uff08\u5e74\uff09",
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
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13
            ]
        }
    ],
    "yAxis": [
        {
            "name": "\u5e97\u94fa\u6570\u91cf\uff08\u95f4\uff09",
            "show": true,
            "scale": true,
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
    "title": [
        {
            "text": "\u5f00\u5e97\u65f6\u957f\u6570\u91cf\u7edf\u8ba1",
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
};
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })
      // 鼠标离开 开启动画效果
      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
    },
    // async getData(){
    //   const {data: res} = await this.$http.get('http://192.168.43.73:9002/getEchart4Data')  //访问后台
    //   if(res.code==200){
    //     this.allData=res.data;
    //   }else{
    //     this.$message.success(res.msg);  //信息提示
    //   }
    //   this.allData.sort((a,b)=>{
    //     return b.value - a.value
    //   })
    //   this.startInterval()
    //   this.updateChart();
    // },
    // async updateChart(){
    //   const colorArr = [
    //     ['#2e02f3', '#454b78'],
    //     ['#2E72BF', '#23E5E5'],
    //     ['#5052EE', '#AB6EE5'],
    //   ]
    //   const provinceArr = this.allData.map(item => {
    //     return item.name
    //   })
    //   const valueArr = this.allData.map(item => {
    //     return item.value
    //   })
    //   const dataOption={
    //     xAxis: {
    //       data: provinceArr
    //     },
    //     dataZoom: {
    //       // 区域缩放组件
    //       show: false,
    //       startValue: this.startValue,
    //       endValue: this.endValue,
    //     },
    //     series: [
    //       {
    //         data: valueArr,
    //         itemStyle: {
    //           barBorderRadius: [0, 20, 20 ,0],
    //           color: arg => {
    //             let targetColorArr = null

    //             if (arg.value > 300) {
    //               targetColorArr = colorArr[0]
    //             } else if (arg.value > 200) {
    //               targetColorArr = colorArr[1]
    //             } else {
    //               targetColorArr = colorArr[2]
    //             }

    //             return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               // 0%
    //               { offset: 0, color: targetColorArr[0] },
    //               // 100%
    //               { offset: 1, color: targetColorArr[1] },
    //             ])
    //           },
    //         },
    //       },
    //     ],
    //   }
    //   this.chartInstance.setOption(dataOption)
    // },
    screenAdapter() {
      const titleFontSzie = (this.$refs.echart4.offsetWidth / 100) * 3

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSzie,
          },
        },
        series: [
          {
            barWidth: titleFontSzie-1,
            itemStyle: {
              barBorderRadius: [titleFontSzie / 2, titleFontSzie / 2, 0, 0],
            },
          },
          {
            barWidth: titleFontSzie-1,
            itemStyle: {
              barBorderRadius: [titleFontSzie / 2, titleFontSzie / 2, 0, 0],
            },
          },
        ],
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    startInterval() {
      // 如果存在则关闭
      this.timerId && clearInterval(this.timerId)
      this.timerId = setInterval(() => {
        this.startValue++
        this.endValue++
        if (this.endValue > this.allData.length - 1) {
          this.startValue = 0
          this.endValue = 9
        }
        this.updateChart()
      }, 2000)
    },
  }
}
</script>

<style scoped>

</style>