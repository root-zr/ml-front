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
      allData: null,
      currentPage: 1,
      totalPage: 0,
      timeId: null //定时器标识
    }
  },
  mounted() {
    this.initChart()
    this.getData()
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

      const initOption={}
      this.chartInstance.setOption(initOption)
    },
    async getData(){
      const {data: res} = await this.$http.get('http://192.168.43.73:9002/getEchart1Data')  //访问后台
      if(res.code==200){
        this.allData=res.data;
      }else{
        this.$message.success(res.msg);  //信息提示
      }

      //排序
      this.allData.sort((a,b)=>{
        return a.value - b.value
      })
      //每五个元素展示一页
      this.totalPage = this.allData.length % 5 === 0 ? this.allData.length/5 :this.allData.length/5 + 1
      this.updateChart()
      this.startInterval() //开启定时器
    },
    updateChart(){
      const start = (this.currentPage-1)*5
      const end = this.currentPage*5
      const showData = this.allData.slice(start, end)
      const names = showData.map((item) =>{
        return item.name
      })
      const values = showData.map((item) =>{
        return item.value
      })
      const dataOption={
        title: {
          text: '▎主机弱报警次数',
          left: 20,
          top: 20,
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          // 默认grid不包含坐标轴文字，改为true
          containLabel: true,
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: names
        },
        tooltip: {
          // 当鼠标移入axis(坐标轴)时展示 底层的背景色
          trigger: 'axis',
          axisPointer: {
            // 展示的类型是线条类型
            type: 'line',
            lineStyle: {
              color: this.axisPointerColor,
            },
            // 相等于 z-index 将层级调低
            z: 0,
          },
        },
        series: [
          {
            type: 'bar',
            data: values,
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: 'white',
              },
            },
            // 每一个柱的样式
            itemStyle: {
              barBorderRadius: [0, 20, 20 ,0],
              // new 出 echarts 全局对象的一个线性渐变方法
              // 指明方向(第四象限坐标轴),不同百分比之下颜色的值
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                // 0% 状态时的颜色
                { offset: 0, color: '#5052EE' },
                // 100% 的颜色
                { offset: 1, color: '#AB6EE5' },
              ]),
            },
          },
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    startInterval(){
      if(this.timeId){
        clearInterval(this.timeId)
      }
      this.timeId = setInterval(()=>{
        this.currentPage++
        if(this.currentPage>this.totalPage)
          this.currentPage=1
        this.updateChart()
      },3000)
    },
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
            barWidth: titleFontSize,
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