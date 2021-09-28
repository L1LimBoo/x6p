import Vue from 'vue'
import VueRouter from 'vue-router'
import x6p from '../views/X6Topo/index.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/x6_1'
  },
  {
    path: "/x6_1",
    name: "x6_1",
    component: x6p
  },
  {
    path: '/x6_2',
    name: "x6_2",
    component: () => import("@/views/X6Topo_2")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
