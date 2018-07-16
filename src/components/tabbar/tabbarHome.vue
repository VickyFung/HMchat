<template>
	<div class="home-container">
		<!--这是轮播图组件-->
		<swiper :swiperList="swiperList" :isfull="true"></swiper>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="home/newslist">
					<img src="../../images/menu1.png" alt="" />
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="home/images">
					<img src="../../images/menu2.png" alt="" />
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="home/goodslist">
					<img src="../../images/menu3.png" alt="" />
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="home/comments">
					<img src="../../images/menu4.png" alt="" />
					<div class="mui-media-body">留言反馈</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="home/video">
					<img src="../../images/menu5.png" alt="" />
					<div class="mui-media-body">视频专区</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="#">
					<img src="../../images/menu6.png" alt="" />
					<div class="mui-media-body">联系我们</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	import swiper from '../subcomponents/swiper.vue'

	export default {
		data() {
			return {
				swiperList: []
			}
		},
		created() {
			this.getSwiper()
		},
		methods: {
			getSwiper() {
				this.$http.get('/api').then(Response => {
					if(Response.status == 200) {
						var result = JSON.parse(Response.bodyText)
						this.swiperList = result
					} else {
						Toast('获取轮播图失败。。')
					}
				})
			}
		},
		components:{
			swiper
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		img {
			height: 60px;
			width: 60px;
		}
	}
	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border: none;
		text-align: center;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
		width: 33%;
	}
</style>