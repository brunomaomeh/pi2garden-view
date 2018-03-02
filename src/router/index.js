import Vue from 'vue'
import Router from 'vue-router'
import Garden from '@/components/garden/Garden'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Garden',
      component: Garden
    }
  ]
})
