import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import ShopTop from '@/components/shoppingTop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/shopMemo',
      name: 'ShopTop',
      component: ShopTop
    },
  ]
})
