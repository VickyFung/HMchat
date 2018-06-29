<template>
	<div id="app" class="app-container">
		<mt-header fixed title="冯慧敏的vue项目"></mt-header>
		<span class="back" @click="goBack()">
			<i class="mintui mintui-back"></i>
			返回
		</span>
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
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
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
	export default {
		name: 'App',
		methods: {
			goBack() {
				this.$router.back(-1)
			}
		}

	}
</script>

<style lang="scss">
	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		.back {
			position: absolute;
			left: 10px;
			top: 10px;
			color: #fff;
			font-size: 15px;
			z-index: 99;
		}
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