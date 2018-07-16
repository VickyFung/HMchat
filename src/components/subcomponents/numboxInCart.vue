<template>
	<div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input class="mui-input-numbox" ref="numbox" type="number" :value="initCount" @change = "updateSelectedCount"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
	import mui from "../../lib/mui/js/mui.min.js";

	export default {
		props: ["initCount", "goodId"],
		mounted() {
			mui(".mui-numbox").numbox();
		},
		methods: {
			updateSelectedCount(){
				this.$store.commit("updateGoodsInCart",{id: this.goodId, count: this.$refs.numbox.value})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.numbox-container {
		margin-bottom: 10px;
	}
</style>