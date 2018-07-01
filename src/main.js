// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//导入路由模块
import router from './router'
//导入vue-resource
import VueResource from 'vue-resource'

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


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  components: { App },
  template: '<App/>'
})
