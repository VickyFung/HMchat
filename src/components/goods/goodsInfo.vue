<template>
	<div class="goodsInfo-container">
		<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
			<div class="cart-ball" ref="ball" v-show="ballFlag"></div>
		</transition>
		<div class="mui-card" id="card-first">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :swiperList="goodsList" :isfull="false"></swiper>
				</div>
			</div>
		</div>
		<div class="mui-card" id="card-second">
			<div class="mui-card-header">{{goodsInfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price-container">
						<del>市场价：{{goodsInfo.price_old}}</del>&nbsp;&nbsp;
						<span class="price_now">销售价：{{goodsInfo.price_new}}</span>
					</p>
					<p class="buy-count">
						<span>购买数量：</span>
						<numbox></numbox>
					</p>
					<p>
						<mt-button type="primary" @click="">立即购买</mt-button>
						<mt-button type="danger" @click="goCart()">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>
		<div class="mui-card" id="card-third">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{goodsInfo.id}}</p>
					<p>库存情况：{{goodsInfo.storage}}件</p>
					<p>上架时间：{{goodsInfo.storage}}件</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="goComts(id)">商品评论</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import swiper from '../subcomponents/swiper.vue'
	import numbox from '../subcomponents/numbox.vue'
	export default {
		data() {
			return {
				ballFlag: false,
				id: this.$route.params.id,
				goodsInfo: {},
				goodsList: [{
					"id": 0,
					"img": "https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg",
					"title": "Apple iPhone 8 (A1863) 64GB 深空灰色 移动联通电信4G手机",
					"price_old": "5599",
					"price_new": "4599",
					"storage": 66
				}, {
					"id": 1,
					"img": "https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg",
					"title": "Apple iPhone 8 (A1863) 64GB 手机",
					"price_old": "8999",
					"price_new": "7099",
					"storage": 66
				}, {
					"id": 2,
					"img": "https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg",
					"title": "Apple iPhone X (A1865) 256GB 银色 移动联通电信4G",
					"price_old": "9999",
					"price_new": "8799",
					"storage": 66
				}]
			}
		},
		created() {
			this.getGoodsInfo()
		},
		methods: {
			getGoodsInfo() {
				this.goodsInfo = this.goodsList[this.id]
			},
			goDesc(id) {
				this.$router.push({
					name: 'goodsDesc',
					params: {
						id
					}
				})
			},
			goComts(id) {
				this.$router.push({
					name: 'goodsComts',
					params: {
						id
					}
				})
			},
			goCart() {
				this.ballFlag = !this.ballFlag;
			},
			beforeEnter(el) {
				el.style.opacity = 1;
				el.style.transform = "translate(0, 0)";
			},
			enter(el, done) {
				el.offsetWidth;
				//获取小球所在的位置
				const ballPosition = this.$refs.ball.getBoundingClientRect();
				//获取徽标所在的位置
				const badgePosition = document.getElementById("badge").getBoundingClientRect();
				
				const xDist = badgePosition.left - ballPosition.left;
				const yDist = badgePosition.top - ballPosition.top;
				
				el.style.transform = `translate(${xDist}px, ${yDist}px)`;
				el.style.transition = "all 1s cubic-bezier(.49,-0.21,1,.53)";
				done()
			},
			afterEnter(el) {
				this.ballFlag = !this.ballFlag;
//				console.log(xDist);
			}
		},
		components: {
			swiper,
			numbox
		}
	}
</script>

<style lang="scss" scoped>
	.goodsInfo-container {
		position: relative;
		.price_now {
			font-size: 16px;
			color: red;
		}
		.buy-count {
			margin-bottom: 10px;
			span {
				font-size: 20px;
				color: #000;
			}
		}
		.cart-ball {
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-color: red;
			position: absolute;
			top: 340px;
			left: 180px;
			z-index: 99;
		}
	}
</style>