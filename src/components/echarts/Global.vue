<template>
  <div class="com-comtainer">
    <div class="com-chart"></div>
  </div>
</template>

<script>

export default {
  name: "Echart1",
  data(){
    return{
      chartInstance: null,
      allData: [
      ],
    }
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods:{
    async initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.map_ref,'chalk')
      this.$echarts.registerMap('china',ret)
      const initOption={
      }
      this.chartInstance.setOption(initOption)
    },
    async getData(){
      this.updateChart();
    },
    updateChart(){
      const dataOption={
      }
      this.chartInstance.setOption(dataOption)

    },
  }
}
</script>

<style scoped>

</style>