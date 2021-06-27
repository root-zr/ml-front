import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Screen from "@/views/Screen";
import Map from "@/components/echarts/Map";
import Example from "@/components/echarts/Example";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/home',
    component: Home
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
