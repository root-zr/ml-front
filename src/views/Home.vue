<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <el-col style="margin-top:1%">机器学习--淘宝商家信用</el-col>
      </el-header>
      <el-container style="height:800px">
        <el-aside width='130px'>
          <el-menu 
            default-active="1" 
            text-color="white" 
            background-color="#3D515E" 
            style="height: 100%;" >
            <el-menu-item index="0" >
              <i class="el-icon-edit-outline"></i>
              数据清洗
            </el-menu-item>
            <el-menu-item index="1" @click="goScreen">
              <i class="el-icon-pie-chart"></i>
              数据展示
            </el-menu-item>
            <el-menu-item index="2" @click="goFeature">
              <i class="el-icon-document-add"></i>
              特征工程
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-data-line"></i>
              模型结果
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="background-color: #F5F5F5">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  },

  methods:{
    goScreen(){
      this.$router.push('/screenNew')
    },
    goFeature(){
      this.$router.push('/featureEngineering')
    }
  }
}
</script>

<style scoped>
.header{
  color:white;
  background-color:#30414C;
  text-align: center;
  
  font-size: 20px;
}
</style>
