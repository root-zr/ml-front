import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Screen from "@/views/Screen";
import Map from "@/components/echarts/Map";
import Example from "@/components/echarts/Example";
import screenNew from "@/views/screen_new";
import echart5 from "@/components/echarts/Echart5";
import feature from "@/views/featureEngineer";
import nlp from "@/components/feature/nlp";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/home',
    redirect: '/screenNew',
    component: Home,
    children:[
      {path: '/screenNew',component: screenNew},
      {path: '/featureEngineering', component: feature},
    ]
  },{
    path: '/',
    redirect: '/home'
  },{
    path: '/screen',
    component: Screen
  },{
    path: '/map',
    component: Map
  },{
    path: '/example',
    component: Example
  },{
    path: '/5',
    component: echart5
  },{
    path: '/nlp',
    component: nlp
  },

]

const router = new VueRouter({
  routes
})

//重复点击导航控制台出错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}



export default router
