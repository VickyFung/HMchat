<template>
	<div class="goods-container">
		<div class="goods-item" @click="getGoodsDetail(item.id)" v-for="item in goodsList" :key="item.id">
			<img :src="item.img" />
			<h3>{{item.title}}</h3>
			<div class="goodsItem-bottom">
				<p class="price">
					<span class="now">￥{{item.price_new}}</span>
					<span class="old">￥{{item.price_old}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩余{{item.storage}}件</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				goodsList: []
			}
		},
		created() {
			this.getGoodsList()
		},
		methods: {
			getGoodsList() {
				this.$http.get('/api/goodslist').then(Response => {
					if(Response.status == 200) {
						var result = JSON.parse(Response.bodyText)
						this.goodsList = result
					} else {
						Toast('获取商品信息失败。。')
					}
				})
			},
			getGoodsDetail(id){
//				this.$router.push('/home/goodslist/'+id)
				this.$router.push({path:'/home/goodslist/'+id})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-container {
		padding: 7px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.goods-item{
			width: 49%;
			height: 305px;
			margin: 3px 0;
			padding: 0 1px;
			border: 1px solid #ccc;
			box-shadow: 0px 0px 8px #ccc;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			img {
				width: 100%;
			}
			h3 {
				font-size: 14px;
				line-height: 20px;
			}
			.goodsItem-bottom {
				background-color: #eee;
				margin: 1px;
				padding: 2px;
				
				.price {
					
					.now {
						color: red;
						font-size: 16px;
						font-weight: bold;
					}
					.old {
						text-decoration: line-through;
						font-size: 12px;
						margin-left: 5px;
					}
				}
				.sell {
					font-size: 14px;
					margin-bottom: 0;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>