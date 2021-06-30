<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="echart6"></div>
    <span class="iconfont arr-left" @click="toLeft">＜</span>
    <!-- &#xe6ef -->
    <span class="iconfont arr-right" @click="toRight">＞</span>
    <!-- &#xe6ed -->
   <span class="cat-name">{{  catName }}</span>
  </div>
</template>

<script>
export default {
  name: "Echart6",
  data(){
    return{
      chartInstance: null,
      currentIndex: 0 ,
    }
  },
  computed:{
    catName(){
      if(!this.currentIndex){
        return ''
      }else{
        return this.allData[this.currentIndex].name
      }
    }
  },
  mounted() {
    this.initChart()
    // this.getData()
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods:{
    initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.echart6,'chalk')
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
            "type": "pie",
            "name": "\u7535\u5668\u63cf\u8ff0",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 39
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 71
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 18
                }
            ],
            "radius": [
                30,
                70
            ],
            "center": [
                "20%",
                "30%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u7535\u5668\u670d\u52a1",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 38
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 66
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 24
                }
            ],
            "radius": [
                30,
                70
            ],
            "center": [
                "50%",
                "30%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        {
            "type": "pie",
            "name": "\u7535\u5668\u7269\u6d41",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 36
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 65
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 27
                }
            ],
            "radius": [
                30,
                70
            ],
            "center": [
                "80%",
                "30%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": "10",
                "formatter": "{b}: {d}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        },
        
        
    ],
    "legend": [
        {
            "data": [
                "\u4f4e\u4e8e\u5747\u503c",
                "\u9ad8\u4e8e\u5747\u503c",
                "\u4e0e\u5747\u503c\u6301\u5e73"
            ],
            "selected": {},
            "show": true,
            "orient": "horizontal",
            "padding": 30,
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
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "text": "评分与行业平均比较（电器）",
            "padding": 5,
            "itemGap": 10,
            
        }
    ]


        // title:{
        //   text:'▎地区分布',
        //   left:20,
        //   top:10,
        // },
        // legend:{
        //   top:'8%',
        //   icon:'circle',
        // },

        // tooltip:{
        //   show:true,
        //   formatter: arg=>{
        //     const thirdCategory = arg.data.children
        //     let total = 0
        //     thirdCategory.forEach(item => {
        //       total += item.value
        //     })
        //     let retStr = ''
        //     thirdCategory.forEach(item =>{
        //       retStr += `
        //       ${item.name}:${parseInt(item.value / total *100)+'%'}
        //       <br/>
        //       `
        //     })
        //     return retStr
        //   }
        // },
        // series: [
        //   {
        //     type:'pie',
        //     label:{
        //       show:false,
        //     },
        //     emphasis:{
        //       label:{
        //         show:true,
        //       },
        //       labelLine:{
        //         show:false,
        //       }
        //     }
        //   }
        // ]
      }
      this.chartInstance.setOption(initOption)
      window.addEventListener('resize', this.screenAdapter)
      // 主动触发 响应式配置
      
    },
    getData(){
      this.updateChart();
    },
    // updateChart(){
    //   const valueArr = this.allData[this.currentIndex].children
    //   const seriesArr = valueArr.map((item) =>{
    //     return{
    //       children: item.children
    //     }
    //   })
    //   console.log(valueArr)
    //   console.log(seriesArr[0])

    //   const dataOption = {
    //     // legend:{
    //     //   data:legendArr
    //     // },
    //     series:[
    //       {
    //         type:"pie",
    //         data: seriesArr[0]
    //     },
    //     {
    //       data: seriesArr[1]
    //     },
    //     {
    //       data: seriesArr[2]
    //     }
    //     ]
    //   }
    //   this.chartInstance.setOption(dataOption)
    // },
    screenAdapter() {
      // 测试算出来的 合适的字体大小
      this.titleFontSize = (this.$refs.echart6.offsetWidth / 100) * 4
      this.innerRadius = this.titleFontSize 
      this.outerRadius = this.innerRadius * 2.5
      const adapterOption = {
        title:{
          textStyle:{
            fontsize: this.titleFontSize
          }
        },
        series: [
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            center:["25%" , "30%"],
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            center:["75%" , "30%"],
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            center:["50%" , "75%"],
            label:{
              fontsize: this.titleFontSize
            }
          },
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    toLeft(){
      // this.updateChart()
      const dataOption = {
        title:[
          {
            "text": "评分与行业平均比较（电器）",
          }
        ],
        series:[
          {
            name: "电器描述",
            data: [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 39
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 71
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 18
                }
              ],
          },
          {
            name: "电器服务",
            data: [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 38
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 66
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 24
                }
            ],
          },
          {
            name: "电器物流",
            data: [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 36
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 65
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 27
                }
            ],
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    toRight(){
      // this.currentIndex++
      // if(this.currentIndex > this.allData.length-1){
      //   this.currentIndex = 0
      // }
      // this.updateChart()
      const dataOption = {
        title:[
          {
            "text": "评分与行业平均比较（食品）",
          }
        ],
        series:[
          {
            name: "食品描述",
            data: [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 18
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 113
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 19
                }
            ],
          },
          {
            name: "食品服务",
            data: [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 20
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 111
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 19
                }
            ],
          },
          {
            name: "食品物流",
            data: [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 22
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 110
                },
                {
                    "name": "\u4e0e\u5747\u503c\u6301\u5e73",
                    "value": 18
                }
            ],
          }
        ]
      }
      this.chartInstance.setOption(dataOption)

    }
  }
}
</script>

<style scoped>
.arr-left{
  position: absolute;
  left: 10%;
  top:50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: black;
}
.arr-right{
  position: absolute;
  right: 10%;
  top:50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: black;
}
/*.cat-name{*/
/*  position: absolute;*/
/*  left: 80%;*/
/*  bottom: 10px;*/
/*  color: white;*/
/*}*/
</style>