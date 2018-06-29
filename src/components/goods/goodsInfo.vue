<template>
	<div class="goodsInfo-container">
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
					<p>
						<del>市场价：{{goodsInfo.price_old}}</del>&nbsp;&nbsp;
						<span class="price_now">销售价：{{goodsInfo.price_new}}</span>
					</p>
					<numbox></numbox>
					<p>
						<mt-button type="primary" @click="">立即购买</mt-button>
						<mt-button type="danger" @click="">加入购物车</mt-button>
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
				<mt-button type="primary" size="large" @click="" plain>图文介绍</mt-button>
				<mt-button type="danger" size="large" @click="" plain>商品评论</mt-button>
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
				url_id: this.$route.params.id,
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
				this.goodsInfo = this.goodsList[this.url_id]
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
		.price_now {
			font-size: 16px;
			color: red;
		}
		.buy-count {
			margin-bottom: 10px;
		}
	}
</style>