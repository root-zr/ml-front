<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="异常值" name="1">
            <boxplot> </boxplot>
        </el-tab-pane>
        <el-tab-pane label="缺失值" name="2">
            <missPie> </missPie>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import boxplot from "@/components/cleaning/boxplot"
import missPie from "@/components/cleaning/missPie"

export default {
  data() {
    return {
        activeName: '1'
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  components: {
      boxplot,
      missPie,
  }
}
</script>

<style>

</style>
