<template>
  <div class="screen-container" >
    <header class="screen-header">
      <div>
        <img src="../assets/images/header_border_dark.png" alt="" />
      </div>
      <span class="logo">
      </span>
      <span class="title">实时监控大屏</span>
      <div class="title-right">
        <div class="datetime">2021-07-02</div>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top" :class="[fullScreenStatus.echart2 ? 'fullscreen':'']">
<!--          <Echart2 ref="echart2"></Echart2>-->
<!--          <div class="resize">-->
<!--            <span @click="changeSize('echart2')" :class="['iconfont', fullScreenStatus.echart2 ? 'icon-compress-alt' : 'icon-expand-alt']"></span>-->
<!--          </div>-->
        </div>
        <div id="left-bottom" :class="[fullScreenStatus.echart1 ? 'fullscreen':'']">
<!--          <Echart1 ref="echart1"></Echart1>-->
<!--          <div class="resize">-->
<!--            <span @click="changeSize('echart1')" :class="['iconfont', fullScreenStatus.echart1 ? 'icon-compress-alt' : 'icon-expand-alt']"></span>-->
<!--          </div>-->
        </div>
      </section>
      <section class="screen-middle" >
        <div id="middle-top" :class="[fullScreenStatus.map ? 'fullscreen':'']">
          <Map ref="map"></Map>
          <div class="resize">
            <span @click="changeSize('map')" :class="['iconfont', fullScreenStatus.map ? 'icon-compress-alt' : 'icon-expand-alt']"></span>
          </div>
        </div>
        <div id="middle-bottom" :class="[fullScreenStatus.echart4 ? 'fullscreen':'']">
<!--          <Echart4 ref="echart4"></Echart4>-->
<!--          <div class="resize">-->
<!--            <span @click="changeSize('echart4')" :class="['iconfont', fullScreenStatus.echart4 ? 'icon-compress-alt' : 'icon-expand-alt']"></span>-->
<!--          </div>-->
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top" :class="[fullScreenStatus.echart6 ? 'fullscreen':'']">
<!--          <Echart6 ref="echart6"></Echart6>-->
<!--          <div class="resize">-->
<!--            <span @click="changeSize('echart6')" :class="['iconfont', fullScreenStatus.echart6 ? 'icon-compress-alt' : 'icon-expand-alt']"></span>-->
<!--          </div>-->
        </div>
        <div id="right-bottom" :class="[fullScreenStatus.echart5 ? 'fullscreen':'']">
<!--          <Echart5 ref="echart5"></Echart5>-->
<!--          <div class="resize">-->
<!--            <span @click="changeSize('echart5')" :class="['iconfont', fullScreenStatus.echart5 ? 'icon-compress-alt' : 'icon-expand-alt']"></span>-->
<!--          </div>-->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Echart1 from "@/components/echarts/Echart1";
import Echart2 from "@/components/echarts/Echart2";
import Map from "@/components/echarts/Map";
import Echart4 from "@/components/echarts/Echart4";
import Echart5 from "@/components/echarts/Echart5";
import Echart6 from "@/components/echarts/Echart6";

export default {
  name: 'Screen',
  components: {
    Echart5,
    Echart1,
    Echart2,
    Map,
    Echart4,
    Echart6,
  },
  data() {
    return {
      fullScreenStatus: {
        echart1: false,
        echart2: false,
        map: false,
        echart4: false,
        echart5: false,
        echart6: false,
      },
    }
  },
  created() {
  },
  methods: {
    changeSize(chartName){
      this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
      this.$nextTick(()=>{
        this.$refs[chartName].screenAdapter()
      })

    }
  },
}
</script>
<style lang="less" scoped>
// 全屏样式的定义
.fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 9999;
}

.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #0f151d;
  color: #fff;
  box-sizing: border-box;
}
.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  > div {
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
  .title-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-80%);
  }
  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }
  .datetime {
    font-size: 15px;
    margin-left: 10px;
  }
  .logo {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-80%);
    a {
      text-decoration: none;
    }
  }
}
.screen-body {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10px;
  .screen-left {
    height: 100%;
    width: 27.6%;
    #left-top {
      height: 53%;
      position: relative;
    }
    #left-bottom {
      height: 31%;
      margin-top: 25px;
      position: relative;
    }
  }
  .screen-middle {
    height: 100%;
    width: 41.5%;
    margin-left: 1.6%;
    margin-right: 1.6%;
    #middle-top {
      width: 100%;
      height: 56%;
      position: relative;
    }
    #middle-bottom {
      margin-top: 25px;
      width: 100%;
      height: 28%;
      position: relative;
    }
  }
  .screen-right {
    height: 100%;
    width: 27.6%;
    #right-top {
      height: 46%;
      position: relative;
    }
    #right-bottom {
      height: 38%;
      margin-top: 25px;
      position: relative;
    }
  }
}
.resize {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
