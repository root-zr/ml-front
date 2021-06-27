<!--库存销量分析-->
<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="echart5"></div>
  </div>
</template>

<script>
export default {
  name: "Echart5",
  data(){
    return{
      currentIndex:0,
      chartInstance:null,
      allData:{
        'title':'系统主机在线情况',
        'data':[]
      },
      timeId:null
    }
  },
  mounted() {
    this.initChart()
    this.getData()
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
      const initOption = {
        title: {
          text:'▎系统主机在线情况',
          left:20,
          top:20,
        }
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('mouseover',() =>{
        clearInterval(this.timeId)
      })
      this.chartInstance.on('mouseout',() =>{
        this.startInterval()
      })
    },
    async getData(){
      const {data: res} = await this.$http.get('http://192.168.43.73:9002/getEchart5Data')  //访问后台
      if(res.code==200){
        this.allData.data=res.data;

      }else{
        this.$message.success(res.msg);  //信息提示
      }
      this.updateChart()
      this.startInterval()
    },
    updateChart(){
      //圆环的中心点坐标值
      const centerArr =[
          ['18%','40%'],
          ['50%','40%'],
          ['82%','40%'],
          ['34%','75%'],
          ['66%','75%'],

      ]
      const colorArr = [
          ['#4FF778','#0BA82C'],
          ['#E5DD45','#E8B11C'],
          //['#E8821C','#E55445'],
          ['#5052EE','#AB6EE5'],
          ['#23E5E5','#2E72BF'],
          ['#8ef1a7','#31d78b'],
      ]
      const start =this.currentIndex * 5
      const end = (this.currentIndex+1) * 5
      const valueArr = this.allData.data.slice(start,end)
      const seriesArr = valueArr.map((item,index) => {
        return{
          type:'pie',
          radius:[60,55],//外圆半径，内圆半径
          center:centerArr[index],
          hoverAnimation:false,//鼠标效果的移除
          labelLine:{
            show: false //隐藏指示线
          },
          label:{
            position:'center',
            color:colorArr[index][0]
          },
          data:[
            {
              name:item.name + '\n'+item.online+'/'+(item.offline+item.online),
              value:item.online,
              itemStyle:{
                color:new this.$echarts.graphic.LinearGradient(0,1,0,0,[
                  {
                    offset:0,
                    color:colorArr[index][0]
                  },
                  {
                    offset:1,
                    color:colorArr[index][1]
                  }
                ])
              }
            },
            {
              name:item.name + '\n'+item.online+'/'+(item.offline+item.online),
              value:item.offline,
              itemStyle:{
                color:'#bbc9e8'
              }
            }

          ]
        }
      })
      const dataOption = {
        series:seriesArr
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter(){
      this.titleFontSize = (this.$refs.echart5.offsetWidth / 100) * 3.6
      this.innerRadius = this.titleFontSize * 2.2
      this.outerRadius = this.innerRadius * 1.125
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
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
            label:{
              fontsize: this.titleFontSize
            }
          },
          {
            type:'pie',
            radius:[this.outerRadius,this.innerRadius],
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