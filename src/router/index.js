import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tabbarHome from '../components/tabbar/tabbarHome'
import tabbarMember from '@/components/tabbar/tabbarMember'
import tabbarCart from '@/components/tabbar/tabbarCart'
import tabbarSearch from '@/components/tabbar/tabbarSearch'
import newsList from '@/components/news/newsList'
import newsInfo from '@/components/news/newsInfo'
import goodsList from '@/components/goods/goodsList'
import goodsInfo from '@/components/goods/goodsInfo'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect:'/home' },
    { path: '/home', name: 'tabbarHome', component: tabbarHome },
    { path: '/member', name: 'tabbarMember', component: tabbarMember },
    { path: '/cart', name: 'tabbarCart', component: tabbarCart },
    { path: '/search', name: 'tabbarSearch', component: tabbarSearch },
    { path: '/home/newslist', name: 'newsList', component: newsList },
    { path: '/home/newsinfo/:id', name: 'newsInfo', component: newsInfo },
    { path: '/home/goodslist', name: 'goodsList', component: goodsList },
    { path: '/home/goodslist/:id', name: 'goodsInfo', component: goodsInfo }
  ],
  linkActiveClass: 'mui-active'  //覆盖默认的路由高亮类
})
