import Vue from 'vue'
import Router from 'vue-router'
import PcIndex from '@/components/pc/pcindex'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'PcIndex',
    component: PcIndex
  }]
})
