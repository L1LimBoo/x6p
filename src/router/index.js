import Vue from 'vue'
import VueRouter from 'vue-router'
import x6p from '../views/X6Topo/index.vue'
import Topo2 from '../views/X6Topo_2'
import test from '../views/Test.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Topo2,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
