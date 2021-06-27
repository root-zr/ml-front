import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'



//引入全局样式
import "./assets/css/global.css"
//引入iconfont
import './assets/font/iconfont.css'
Vue.prototype.$echarts =window.echarts


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
