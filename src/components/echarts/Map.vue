<template>
  <div class="com-comtainer" @dblclick="revertMap">
    <div class="com-chart" ref="map"></div>
  </div>

</template>

<script>

import axios from 'axios'
import { getProvinceMapInfo } from '@/utils/map_utils'
export default {
  data(){
    return{
      chartInstance: null,
      allData: [
        {'name':'大型网点',
          'children':[
            {'name':'大型网点1','value':[114.31,30.52]},
            {'name':'大型网点2','value':[116.39,39.91]},
            {'name':'大型网点3','value':[108.93,34.23]},
            {'name':'大型网点4','value':[113.27,23.15]},
            {'name':'大型网点5','value':[121.48,31.40]},
            {'name':'大型网点6','value':[112.98,28.25]},
          ],
          'itemStyle':{
            "shadowBlur": 10,
            "shadowColor": '#333'}
        },{'name':'中型网点',
          'children':[
            {'name':'中型网点1','value':[114.53,38.03]},
            {'name':'中型网点2','value':[106.24,38.47]},
            {'name':'中型网点3','value':[88.31,43.36]},
            {'name':'中型网点4','value':[106.39,26.50]},
            {'name':'中型网点5','value':[100.16,25.36]}
          ],
          'itemStyle':{
            "shadowBlur": 10,
            "shadowColor": '#333'}
        },{'name':'小型网点',
          'children':[
            {'name':'小型网点1','value':[115.00,25.51]},
            {'name':'小型网点2','value':[100.13,26.52]},
            {'name':'小型网点3','value':[104.06,30.39]},
            {'name':'小型网点4','value':[112.39,37.89]},
            {'name':'小型网点5','value':[111.80,40.77]},
            {'name':'小型网点6','value':[126.51,45.54]},
            {'name':'小型网点7','value':[105.06,38.39]},
            {'name':'小型网点8','value':[107.39,35.89]},
            {'name':'小型网点9','value':[90.31,37.36]},
            {'name':'小型网点10','value':[85.39,35.50]},
            {'name':'小型网点11','value':[100.16,25.36]}

          ],
          'itemStyle':{
            "shadowBlur": 10,
            "shadowColor": '#333'}
        }
      ],
    }
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    // 主动触发 响应式配置
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods:{
    async initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.map,'chalk')
      const ret = require('../../assets/data/china.json')
      // const ret = await axios.get('http://120.53.120.229:9997/map/china.json')

      this.$echarts.registerMap('china',ret)
      const initOption={
        title:{
          text: '▎中国网点分布',
          left:20,
          top:20
        },
        geo:{
          type: 'map',
          map: 'china',
          // top: '5%',
          // bottom: '5%'
          itemStyle: {
            // 地图的填充色
            areaColor: '#13b0de',
            // 省份的边框色
            borderColor: '#fad904',
          },
          label: {
            // show: true,
            color: 'white',
            formatter: `{a}`,
          },
        }
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('click',async arg=>{
        const provinceInfo = getProvinceMapInfo(arg.name)
        const ret = await axios.get('http://120.53.120.229:9997'+provinceInfo.path)
        this.$echarts.registerMap(provinceInfo.key,ret.data)
        const changeOption = {
          geo:{
            map: provinceInfo.key
          }
        }
        this.chartInstance.setOption(changeOption)
      })
    },
    async getData(){
      this.updateChart();
    },
    updateChart(){
      const legendArr = this.allData.map(item =>{
        return item.name
      })
      const seriesArr = this.allData.map(item =>{
        return{
          type: 'effectScatter',
          rippleEffect:{
            scale:7,
            brushType: 'stroke',
            period:4,
          },
          name: item.name,
          data: item.children,
          coordinateSystem: 'geo',
          itemStyle:item.itemStyle
        }
      })
      const dataOption={
        legend: {
          data: legendArr
        },
        series: seriesArr
      }
      this.chartInstance.setOption(dataOption)

    },
    screenAdapter() {
      // 当前比较合适的字体大小
      const titleFontSize = (this.$refs.map.offsetWidth / 100) * 3.6

      // 响应式的配置项
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        legend: {
          // 图例宽度
          itemWidth: titleFontSize / 2,
          // 图例高度
          itemHeight: titleFontSize / 2,
          // 间隔
          itemGap: titleFontSize / 2,
          textStyle: {
            fontSize: titleFontSize / 2,
          },
        },
      }

      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    revertMap(){
      const revertOption = {
        geo:{
          map:'china'
        }
      }
      this.chartInstance.setOption(revertOption)
    }
  }
}
</script>

<style scoped>

</style>