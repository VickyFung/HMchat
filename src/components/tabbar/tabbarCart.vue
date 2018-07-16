<template>
	<div class="cart-container">
		<div class="goodslist">
			<div class="mui-card" v-for="(item,i) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch
							v-model="$store.getters.getGoodsSelected[item.id]"
							@change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
						<img :src="item.img" />
						<div>
							<h1>{{item.title}}</h1>
							<p>
								<span>￥{{item.price_new}}</span>
								<numbox :goodId="item.id" :initCount="$store.getters.getGoodsCount[item.id]"></numbox>
								<a href="#" @click="removeGood(item.id, i)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner account">
					<div class="left">
						<p>总计（不含运费）</p>
						<p>已勾选商品<span class="red">{{$store.getters.getTotalCount.count}}</span>件，总价￥<span class="red">{{$store.getters.getTotalCount.account}}</span></p>
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import numbox from '../subcomponents/numboxInCart.vue'
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
				var idArr = []
				this.$store.state.cartCount.forEach(item => {
					idArr.push(item.id)
				})
				this.$http.get('/api/goodslist').then(Response => {
					if(Response.status == 200) {
						var result = Response.data
						console.log(result)
						idArr.forEach(item => {
							//console.log(result[item])
							this.goodsList.push(result[item])
						})
						console.log(this.goodsList)
					} else {
						Toast('获取商品信息失败。。')
					}
				})
			},
			removeGood(id,index){
				this.goodsList.splice(index,1)
				this.$store.commit('removeGood',id)
			},
			selectedChanged(id,val){
				this.$store.commit('selectedChanged',{id:id,selected:val})
			}
		},
		components: {
			numbox
		}
	}
</script>

<style lang="scss" scoped>
	.cart-container {
		.goodslist {
			.mui-card-content-inner {
				display: flex;
				align-items: center;
			}
			img {
				width: 60px;
			}
			h1 {
				font-size: 13px;
			}
			span {
				font-size:16px;
				font-weight: bold;
				color: red;
			}
		}
		.account {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				.red {
					color: red;
					font-weight: bold;
					font-size: 16px;
				}
			}
		}	
	}
</style>