// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由模块
import router from './router'
//导入vue-resource
import VueResource from 'vue-resource'

//vuex
import Vuex from 'vuex'

////按需导入mint-ui组件，按需导入是不支持懒加载图标，所以全部导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import {  Button, Header, Swipe, SwipeItem, Lazyload } from 'mint-ui'

//按需导入mui组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

//安装vue-resource
Vue.use(VueResource)

//绑定mint-ui
Vue.use(MintUI)
//Vue.use(Lazyload)
//Vue.component(Header.name, Header)
//Vue.component(Swipe.name, Swipe)
//Vue.component(SwipeItem.name, SwipeItem)
//Vue.component(Button.name, Button)

Vue.use(Vuex)

var cartCount = JSON.parse(localStorage.getItem('cartCount') || '[]')

var store = new Vuex.Store({
	state: {
		cartCount: cartCount
	},
	mutations: {
		addToCart(state, goodInfo){
			var flag = false
			state.cartCount.some(item => {
				if(item.id == goodInfo.id){
					item.count += parseInt(goodInfo.count)
					flag = true
					return true
				}
			})
			if(!flag){
				state.cartCount.push(goodInfo)
			}
			localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
		},
		updateGoodsInCart(state, goodInfo){
			state.cartCount.some(item => {
				if(item.id == goodInfo.id){
					item.count = parseInt(goodInfo.count)
					return true
				}
			})
			localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
		},
		removeGood(state,id){
			state.cartCount.some((item,i) => {
				if(item.id == id){
					state.cartCount.splice(i,1)
					return true
				}
			})
			localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
		},
		selectedChanged(state,info){
			state.cartCount.forEach(item => {
				if(item.id == info.id){
					item.selected = info.selected
					return true
				}
			})
			localStorage.setItem('cartCount', JSON.stringify(state.cartCount))
		}
	},
	getters: {
		getTotal(state){
			var total = 0
			state.cartCount.forEach(item => {
				total += parseInt(item.count)
			})	
			return total
		},
		getGoodsCount(state){
			var o = {}
			state.cartCount.forEach(item => {
				o[item.id] = item.count	
			})
			return o
		},
		getGoodsSelected(state){
			var o = {}
			state.cartCount.forEach(item => {
				o[item.id] = item.selected	
			})
			return o
		},
		getTotalCount(state){
			var o = {
				count: 0,
				account: 0
			}
			state.cartCount.forEach(item => {
				if(item.selected){
					o.count += item.count
					o.account += item.count*item.price
				}
			})
			return o
		}

	}
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
