import Vue from 'vue'
import VueRouter from 'vue-router'
import Trends from '../views/Trends.vue'
import Market from '../views/Market.vue'
import MyTrades from '../views/MyTrades.vue'
import MyPortfolio from '../views/MyPortfolio.vue'
import Trading from '../views/Trading.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Trends',
    component: Trends
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/mytrades',
    name: 'MyTrades',
    component: MyTrades
  },
  {
    path: '/myportfolio',
    name: 'MyPortfolio',
    component: MyPortfolio
  },
  {
    path: '/trading',
    name: 'Trading',
    component: Trading
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
