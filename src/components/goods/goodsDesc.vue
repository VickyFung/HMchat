<template>
	<div class="goodsDesc-container">
		<h1>商品--{{id}}--的图文介绍</h1>
		<div class="img-container">
			<ul class="photo-list">
  				<li v-for="item in list" :key="item.id">
  					<img v-lazy="item.scr">
  				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
	  list: [{id:0,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:1,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:2,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:3,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:4,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:5,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:6,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:7,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:8,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:9,scr:'https://img12.360buyimg.com/n7/jfs/t7582/66/3048380492/71753/acde79b5/59b85824N836bb714.jpg'},
		{id:10,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'},
		{id:11,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'},
		{id:12,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'},
		{id:13,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'},
		{id:14,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'},
		{id:15,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'},
		{id:16,scr:'https://img12.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg'}
	  ]
    }
  }
}
</script>

<style lang='scss' scoped>
.photo-list {
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
	li {
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		position: relative;
		img {
		width: 100%;
		vertical-align: middle;
		}
		img[lazy="loading"] {
		width: 40px;
		height: 300px;
		margin: auto;
		}
	}
}
</style>