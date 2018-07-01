<template>
	<div class="goodsDesc-container">
		<h1>我的商品{{id}}图文介绍</h1>
		<div class="img-container">
			<img src="https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg"/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id: this.$route.params.id
			}
		}
	}
</script>

<style>
</style>