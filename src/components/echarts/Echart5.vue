<!--库存销量分析-->
<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="echart5"></div>
     <!-- <div id="ece42ce5331742b682789a66d18a45e9" class="chart-container" style="width:950px; height:400px;"></div> -->
  </div>
</template>

<script>
export default {
  name: "Echart5",
  data(){
    return{
      // currentIndex:0,
      chartInstance:null,
      // allData:{
      //   'title':'系统主机在线情况',
      //   'data':[]
      // },
      // timeId:null
    }
  },
  mounted() {
    this.initChart()
    // this.getData()
    window.addEventListener('resize',this.screenAdapter)
    this.screenAdapter()

  },
  destroyed() {
    window.removeEventListener('resize',this.screenAdapter)
    clearInterval(this.timeId)
  },
  methods:{
    initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.echart5,'chalk')
      // const initOption = {
      //   title: {
      //     text:'▎系统主机在线情况',
      //     left:20,
      //     top:20,
      //   }
      // }

      var option = {
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
            "name": "\u7535\u5668\u7ea0\u7eb7\u9000\u8d27\u7387",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 124
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 4
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
            "name": "\u98df\u54c1\u7ea0\u7eb7\u9000\u8d27\u7387",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 141
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 9
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
            "name": "\u7535\u5668\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u7387",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 26
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 102
                }
            ],
            "radius": [
                30,
                70
            ],
            "center": [
                "20%",
                "75%"
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
            "name": "\u98df\u54c1\u9000\u6b3e\u81ea\u4e3b\u5b8c\u7ed3\u7387",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4f4e\u4e8e\u5747\u503c",
                    "value": 35
                },
                {
                    "name": "\u9ad8\u4e8e\u5747\u503c",
                    "value": 115
                }
            ],
            "radius": [
                30,
                70
            ],
            "center": [
                "50%",
                "75%"
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
        }
    ],
    "legend": [
        {
            "data": [
                "\u4f4e\u4e8e\u5747\u503c",
                "\u9ad8\u4e8e\u5747\u503c"
            ],
            "selected": {},
            "show": true,
            "orient": "horizontal",
            "padding": 25,
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
            "text": "\u552e\u540e\u6307\u6807\u4e0e\u884c\u4e1a\u5e73\u5747\u6bd4\u8f83\u72b6\u51b5",
            "padding": 5,
            "itemGap": 10
        }
    ]
      }

      this.chartInstance.setOption(option)
      // this.chartInstance.on('mouseover',() =>{
      //   clearInterval(this.timeId)
      // })
      // this.chartInstance.on('mouseout',() =>{
      //   this.startInterval()
      // })
    },
    // getData(){
        
    //   const {data: res} = await this.$http.get('http://192.168.43.73:9002/getEchart5Data')  //访问后台
    //   if(res.code==200){
    //     this.allData.data=res.data;

    //   }else{
    //     this.$message.success(res.msg);  //信息提示
    //   }
    //   this.updateChart()
    //   this.startInterval()
    // },
    // updateChart(){
    //   //圆环的中心点坐标值
    //   const centerArr =[
    //       ['18%','40%'],
    //       ['50%','40%'],
    //       ['82%','40%'],
    //       ['34%','75%'],
    //       ['66%','75%'],

    //   ]
    //   const colorArr = [
    //       ['#4FF778','#0BA82C'],
    //       ['#E5DD45','#E8B11C'],
    //       //['#E8821C','#E55445'],
    //       ['#5052EE','#AB6EE5'],
    //       ['#23E5E5','#2E72BF'],
    //       ['#8ef1a7','#31d78b'],
    //   ]
    //   const start =this.currentIndex * 5
    //   const end = (this.currentIndex+1) * 5
    //   const valueArr = this.allData.data.slice(start,end)
    //   const seriesArr = valueArr.map((item,index) => {
    //     return{
    //       type:'pie',
    //       radius:[60,55],//外圆半径，内圆半径
    //       center:centerArr[index],
    //       hoverAnimation:false,//鼠标效果的移除
    //       labelLine:{
    //         show: false //隐藏指示线
    //       },
    //       label:{
    //         position:'center',
    //         color:colorArr[index][0]
    //       },
    //       data:[
    //         {
    //           name:item.name + '\n'+item.online+'/'+(item.offline+item.online),
    //           value:item.online,
    //           itemStyle:{
    //             color:new this.$echarts.graphic.LinearGradient(0,1,0,0,[
    //               {
    //                 offset:0,
    //                 color:colorArr[index][0]
    //               },
    //               {
    //                 offset:1,
    //                 color:colorArr[index][1]
    //               }
    //             ])
    //           }
    //         },
    //         {
    //           name:item.name + '\n'+item.online+'/'+(item.offline+item.online),
    //           value:item.offline,
    //           itemStyle:{
    //             color:'#bbc9e8'
    //           }
    //         }

    //       ]
    //     }
    //   })
    //   const dataOption = {
    //     series:seriesArr
    //   }
    //   this.chartInstance.setOption(dataOption)
    // },
    screenAdapter(){
      this.titleFontSize = (this.$refs.echart5.offsetWidth / 100) * 4
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
            center:["25%" , "75%"],
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            center:["75%" , "75%"],
            label:{
              fontsize: this.titleFontSize
            }
          },
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    startInterval(){
      if (this.timeId){
        clearInterval(this.timeId)
      }
      this.timeId = setInterval(() => {
        this.currentIndex++
        if(this.currentIndex > 1){
          this.currentIndex = 0
        }
        this.updateChart()
      },5000)
    }
  }
}
</script>

<style scoped>

</style>