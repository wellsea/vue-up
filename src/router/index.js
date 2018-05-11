import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import About from '@/pages/about/About'
import Slots from '@/pages/slot/slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/slot',
      name: 'Slots',
      component: Slots
    }
  ]
})
