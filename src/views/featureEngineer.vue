<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="卖家服务状况" name="1">
            <feature1> </feature1>
        </el-tab-pane>
        <el-tab-pane label="卖家服务状况-衍生特征" name="2">
            <feature1_g> </feature1_g>
        </el-tab-pane>
        <el-tab-pane label="历史交易状况" name="3">
            <feature2> </feature2>
        </el-tab-pane>
        <el-tab-pane label="历史交易状况-衍生特征" name="4">
            <feature2_g> </feature2_g>
        </el-tab-pane>
        <el-tab-pane label="待交易商品特征" name="5">
            <feature3> </feature3>
        </el-tab-pane>
        <el-tab-pane label="待交易商品特征-衍生特征" name="6">
            <feature3_g> </feature3_g>
        </el-tab-pane>
        <el-tab-pane label="NLP" name="7">
            <nlp> </nlp>
        </el-tab-pane>
    </el-tabs>

      
  </div>
</template>

<script>
import feature1 from "@/components/feature/feature1"
import feature1_g from "@/components/feature/feature1_g"
import feature2 from "@/components/feature/feature2"
import feature2_g from "@/components/feature/feature2_g"
import feature3 from "@/components/feature/feature3"
import feature3_g from "@/components/feature/feature3_g"
import nlp from "@/components/feature/nlp"

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
      feature1,
      feature1_g,
      feature2,
      feature2_g,
      feature3,
      feature3_g,
      nlp,
  }
}
</script>

<style>

</style>
