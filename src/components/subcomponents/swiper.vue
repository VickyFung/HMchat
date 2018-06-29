<template>
	<mt-swipe :auto="4000" class="mint-swipe">
		<mt-swipe-item v-for="item in swiperList" :key="item.url">
			<img :class="{'full': isfull}" :src="item.img" />
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ["swiperList","isfull"]
	}
</script>

<style lang="scss">
	.mint-swipe {
		height: 200px;
		text-align: center;
		img {
			position: absolute;
			top:0;
			bottom:0;
			left:0;
			right:0;
			margin:auto;
		}
	}
	.full {
		width: 100%;
	}
</style>