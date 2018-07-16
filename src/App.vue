<template>
	<div id="app" class="app-container">
		<mt-header fixed title="冯慧敏的vue项目">
			<span slot="left" @click="goBack()">
				<mt-button v-show="flag" icon="back">返回</mt-button>
			</span>
		</mt-header>
		<transition>
			<router-view></router-view>
		</transition>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label router-link-active">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getTotal}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	import mui from "./lib/mui/js/mui.min.js";
	mui('body').on('click','a',function(){document.location.href=this.href;});
	export default {
		name: 'App',
		data(){
			return {
				flag: false
			}
		},
		created(){
			this.flag=(this.$route.path == '/home')?false:true
		},
		methods: {
			goBack() {
				this.$router.back(-1)
			}
		},
		watch: {
			'$route.path': function(newVal){
				this.flag=newVal == '/home'?false:true
			}
		}

	}
</script>

<style lang="scss">
	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		.v-enter {
			opacity: 0;
			transform: translateX(100%);
		}
		.v-leave-to {
			opacity: 0;
			transform: translateX(-100%);
			position: absolute;
		}
		.v-enter-active,
		.v-leave-active {
			transition: all 0.5s ease;
		}
	}
</style>