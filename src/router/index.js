import Vue from 'vue'
import VueRouter from 'vue-router'
import x6p from '../views/X6Topo/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: x6p,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
