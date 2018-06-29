<template>
	<div class="comment-container">
		<h3>发表评论</h3>
		<hr />
		<textarea v-model="msg" placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		<div v-for="item in comments" :key="item.cmtdate">
			<p class="cmt-bar">第{{cmtLength}}楼</p>
			<p class="cmt-body">{{item.cmtcontent}}</p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			msg:'',
			comments: [],
			singlecmt: {},
			cmtLength: 0
		}
	},
	methods:{
		postComment(){
			this.singlecmt.ctmdate = Date.now()
			this.singlecmt.cmtcontent = this.msg
			this.comments.push(this.singlecmt)
			this.cmtLength++
			console.log(this.comments)
			console.log(this.singlecmt)
		}
	}
}
</script>

<style lang="scss" scoped>
.comment-container {
	/*padding: 0 2px;*/
	h3 {
		font-size: 18px;
	}
	textarea {
		height: 100px;
	}
	div {
		.cmt-body {
			font-size: 14px;
			line-height: 28px;
			padding: 2px;
			border: 1px solid #ccc;
			border-radius: 5px;
			background-color: #eee;
		}
		.cmt-bar {
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			padding: 0px 4px;
			border-radius: 3px;
			background-color: #555;
			margin:1px auto;
		}   
	} 
}
</style>