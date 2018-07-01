<template>
	<h1>我的商品{{id}}的评论</h1>
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