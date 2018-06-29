<template>
	<div class="news-container">
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media" v-for="item in newslists" :key="item.img">
				<router-link class='mui-navigate-right' :to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img">
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
						<p class='mui-ellipsis'>
							<span>发表时间：{{item.time | dateFormat()}}</span>
							<span>点击{{item.clickT}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newslists: []
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.$http.get('/api/newslist').then(Response => {
					if(Response.status == 200) {
						var result = JSON.parse(Response.bodyText)
						this.newslists = result
					} else {
						Toast('获取新闻列表信息失败。。')
					}
				})
			}
		}
	}
</script>

<style>
	.mui-table-view li h1 {
		font-size: 14px;
	}
	
	.mui-table-view li .mui-ellipsis {
		font-size: 12px;
		color: #226aff;
		display: flex;
		justify-content: space-between;
	}
</style>