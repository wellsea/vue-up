import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import About from '@/pages/about/About'
import Slots from '@/pages/slot/slot'
import slotScope from '@/pages/slotSCope/slotSCope'
import activeCompent from '@/pages/activeCompent/activeCompent'
import Fade from '@/pages/transition/fade'
import Animate from '@/pages/transition/animate'

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
    }, {
      path: '/slotScope',
      name: 'slotScope',
      component: slotScope
    }, {
      path: '/activeCompent',
      name: 'activeCompent',
      component: activeCompent
    }, {
      path: '/fade',
      name: 'Fade',
      component: Fade
    }
    , {
      path: '/animate',
      name: 'Animate',
      component: Animate
    }
  ]
})
