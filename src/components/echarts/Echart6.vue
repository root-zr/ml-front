<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="echart6"></div>
    <span class="iconfont arr-left" @click="toLeft">&#xe6ef</span>
    <span class="iconfont arr-right" @click="toRight">&#xe6ed</span>
<!--    <span class="cat-name">{{  catName }}</span>-->
  </div>
</template>

<script>
export default {
  name: "Echart6",
  data(){
    return{
      chartInstance: null,
      allData: [
        { "name": "数据库分布情况",
          "children": [
            {
              "name": "东北地区",
              "value": 150443,
              "children": [
                {
                  "name": "MySQL",
                  "value": 1023
                },
                {
                  "name": "Redis",
                  "value": 40000
                },
                {
                  "name": "CouchDB",
                  "value": 96000
                },{
                  "name": "MongoDB",
                  "value": 3420
                }
              ]
            },
            {
              "name": "华东地区",
              "value": 115759,
              "children": [
                {
                  "name": "MySQL",
                  "value": 963
                },
                {
                  "name": "Redis",
                  "value": 42356
                },
                {
                  "name": "CouchDB",
                  "value": 31205
                },{
                  "name": "MongoDB",
                  "value": 41235
                }
              ]
            },
            {
              "name": "华北地区",
              "value": 47692,
              "children": [
                {
                  "name": "MySQL",
                  "value": 8452
                },
                {
                  "name": "Redis",
                  "value": 12354
                },
                {
                  "name": "CouchDB",
                  "value": 23565
                },{
                  "name": "MongoDB",
                  "value": 3321
                }
              ]
            },
            {
              "name": "华中地区",
              "value": 70721,
              "children": [
                {
                  "name": "MySQL",
                  "value": 2351
                },
                {
                  "name": "Redis",
                  "value": 56495
                },
                {
                  "name": "CouchDB",
                  "value": 8425
                },{
                  "name": "MongoDB",
                  "value": 3450
                }
              ]
            },
            {
              "name": "华南地区",
              "value": 50064,
              "children": [
                {
                  "name": "MySQL",
                  "value": 5631
                },
                {
                  "name": "Redis",
                  "value": 25568
                },
                {
                  "name": "CouchDB",
                  "value": 12324
                },{
                  "name": "MongoDB",
                  "value": 6541
                }
              ]
            },
            {
              "name": "西南地区",
              "value": 96832,
              "children": [
                {
                  "name": "MySQL",
                  "value": 6542
                },
                {
                  "name": "Redis",
                  "value": 23568
                },
                {
                  "name": "CouchDB",
                  "value": 1235
                },{
                  "name": "MongoDB",
                  "value": 65487
                }
              ]
            },
            {
              "name": "西北地区",
              "value": 96105,
              "children": [
                {
                  "name": "MySQL",
                  "value": 2015
                },
                {
                  "name": "Redis",
                  "value": 65682
                },
                {
                  "name": "CouchDB",
                  "value": 21563
                },{
                  "name": "MongoDB",
                  "value": 6845
                }
              ]
            }
          ]},
        {"name": "服务器分布情况",
          "children": [
            {
          "name": "东北地区",
          "value": 168619,
          "children": [
            {
              "name": "red hat",
              "value": 23565
            },
            {
              "name": "ubuntu",
              "value": 76632
            },
            {
              "name": "centos",
              "value": 68422
            }
          ]
        },
            {
          "name": "华东地区",
          "value": 98414,
          "children": [
            {
              "name": "red hat",
              "value": 13320
            },
            {
              "name": "ubuntu",
              "value": 65221
            },
            {
              "name": "centos",
              "value": 19873
            }
          ]
        },
            {
          "name": "华北地区",
          "value": 159922,
          "children": [
            {
              "name": "red hat",
              "value": 35855
            },
            {
              "name": "ubuntu",
              "value": 98523
            },
            {
              "name": "centos",
              "value": 25544
            }
          ]
        },
            {
          "name": "华中地区",
          "value": 133235,
          "children": [
            {
              "name": "red hat",
              "value": 32211
            },
            {
              "name": "ubuntu",
              "value": 13568
            },
            {
              "name": "centos",
              "value": 87456
            }
          ]
        },
            {
          "name": "华南地区",
          "value": 91885,
          "children": [
            {
              "name": "red hat",
              "value": 23565
            },
            {
              "name": "ubuntu",
              "value": 58466
            },
            {
              "name": "centos",
              "value": 9854
            }
          ]
        },
            {
          "name": "西南地区",
          "value": 190862,
          "children": [
            {
              "name": "red hat",
              "value": 85412
            },
            {
              "name": "ubuntu",
              "value": 64215
            },
            {
              "name": "centos",
              "value": 41235
            }
          ]
        },
            {
          "name": "西北地区",
          "value": 121373,
          "children": [
            {
              "name": "red hat",
              "value": 21365
            },
            {
              "name": "ubuntu",
              "value": 12543
            },
            {
              "name": "centos",
              "value": 87465
            }
          ]
        }
      ]
    }
      ],
      currentIndex:0,
    }
  },
  // computed:{
  //   catName(){
  //     if(!this.currentIndex){
  //       return ''
  //     }else{
  //       return this.allData[this.currentIndex].name
  //     }
  //   }
  // },
  mounted() {
    this.initChart()
    this.getData()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods:{
    async initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.echart6,'chalk')
      const initOption={
        title:{
          text:'▎地区分布',
          left:20,
          top:10,
        },
        legend:{
          top:'8%',
          icon:'circle',
        },

        tooltip:{
          show:true,
          formatter: arg=>{
            const thirdCategory = arg.data.children
            let total = 0
            thirdCategory.forEach(item => {
              total += item.value
            })
            let retStr = ''
            thirdCategory.forEach(item =>{
              retStr += `
              ${item.name}:${parseInt(item.value / total *100)+'%'}
              <br/>
              `
            })
            return retStr
          }
        },
        series: [
          {
            type:'pie',
            label:{
              show:false,
            },
            emphasis:{
              label:{
                show:true,
              },
              labelLine:{
                show:false,
              }
            }
          }
        ]
      }
      this.chartInstance.setOption(initOption)
      window.addEventListener('resize', this.screenAdapter)
      // 主动触发 响应式配置
      this.screenAdapter()
    },
    async getData(){
      this.updateChart();
    },
    updateChart(){
      const legendArr = this.allData[this.currentIndex].children.map(item =>{
        return item.name
      })
      const valueArr = this.allData[this.currentIndex].children
      const seriesArr = valueArr.map((item, index) =>{
        return{
          name:item.name,
          value:item.value,
          children:item.children
        }
      })
      const dataOption = {
        legend:{
          data:legendArr
        },
        series:{
          data: seriesArr
        }
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      // 测试算出来的 合适的字体大小
      this.titleFontSize = (this.$refs.echart6.offsetWidth / 100) * 3.6

      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
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
    toLeft(){
      this.currentIndex--
      if(this.currentIndex < 0){
        this.currentIndex = this.allData.length-1
      }
      this.updateChart()
    },
    toRight(){
      this.currentIndex++
      if(this.currentIndex > this.allData.length-1){
        this.currentIndex = 0
      }
      this.updateChart()
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
  color: white;
}
.arr-right{
  position: absolute;
  right: 10%;
  top:50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
}
/*.cat-name{*/
/*  position: absolute;*/
/*  left: 80%;*/
/*  bottom: 10px;*/
/*  color: white;*/
/*}*/
</style>