<template>
	<div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change = 'countChanged'/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
	import mui from "../../lib/mui/js/mui.min.js";

	export default {
		data(){
			return {
				boxNumber:0
			}
		},
		props: ["max"],
		created(){
				
		},
		mounted() {
			mui(".mui-numbox").numbox();
		},
		methods: {
			countChanged(){
//				console.log(typeof(this.$refs.numbox.value))
				this.$emit("getCount", parseInt(this.$refs.numbox.value))
			}
		},
		watch: {
			max: function(newVal,oldVal){
				mui(".mui-numbox").numbox().setOption("max",newVal)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.numbox-container {
		margin-bottom: 10px;
	}
</style>