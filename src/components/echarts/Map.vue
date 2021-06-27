<template>
  <div class="com-comtainer">
    <div class="com-chart" ref="map"></div>
  </div>

</template>

<script>

import axios from 'axios'
import { getProvinceMapInfo } from '@/utils/map_utils'
export default {
  data(){
    return{
      chartInstance: null
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.screenAdapter)
    // 主动触发 响应式配置
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods:{
    init(){
      this.chartInstance = echarts.init(this.$refs.map);
      var option;

      const chinaJson = require('../../assets/data/china.json')

      this.$echarts.registerMap('china', chinaJson);

      option = {
        title: {
          text: '网店分布情况',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return params.seriesName + '<br/>' + params.name + ': ' + value;
          }
        },
        visualMap: {
          left: 'right',
          min: 500000,
          max: 38000000,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          },
          text: ['High', 'Low'],           // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            // name: '页面',
            type: 'map',
            roam: true,
            map: 'china',
            emphasis: {
              label: {
                show: true
              }
            },
            data:[
              {name: '广东', value: 4822023},
              {name: '黑龙江', value: 731449},
              {name: '广西', value: 6553255},
            ]
          }
        ]
      };

      this.chartInstance.setOption(option);

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
  }
}
</script>

<style scoped>

</style>