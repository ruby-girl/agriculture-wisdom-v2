<!-- 底部导航栏 -->
<template>
	<div class='footer_nav_html'>
		<div class="footer_nav_list" v-for="(item,index) in list" :key="index" @click="FooterOnClick(index)">
			<image :class="[item.title?'footer_nav_icon':'footer_nav_sweep']" :src="footerIndex===index?item.icon_:item.icon"
			 mode=""></image>
			<div v-if="item.title" class="footer_nav_title">{{item.title}}</div>
		</div>
	</div>
</template>
<script>
	export default {
		components: {},
		props: {
			footerIndex: Number
		},
		data() {
			//这里存放数据
			return {
				list: [{
					title: '首页',
					icon: require("../assets/home.png"),
					icon_: require("../assets/home_.png"),
					path: ''
				}, {
					title: '农场',
					icon: require("../assets/hacienda.png"),
					icon_: require("../assets/hacienda_.png"),
					path: ''
				}, {
					title: "",
					icon: require("../assets/sweep.png"),
					icon_: require("../assets/sweep_.png"),
					path: ""
				}, {
					title: '集市',
					icon: require("../assets/market.png"),
					icon_: require("../assets/market_.png"),
					path: ''
				}, {
					title: '我的',
					icon: require("../assets/user.png"),
					icon_: require("../assets/user_.png"),
					path: ''
				}, ]
			}
		},
		//加载
		onLoad() {},
		//显示,
		onShow() {},
		//页面初次显示
		onReady() {},
		//方法集合
		methods: {
			FooterOnClick(val){
				this.$emit('FooterOnClick',val)
			}
		},
		//生命周期 - 挂载完成（可以访问DOM元素）
		onHide() {}, //页面隐藏
		onUnload() {}, //页面卸载
		onBackPress() {}, //页面返回
		onShareAppMessage() {}, //分享
		onReachBottom() {}, //下拉加载
		onPageScroll() {}, //页面滚动
		onPullDownRefresh() {} //上拉刷新
	};
</script>
<style lang='less' scoped>
	.footer_nav_html {
		position: fixed;
		width: 100vw;
		bottom: 0rpx;
		left: 0px;
		flex-direction: row;
		justify-content: space-around;
		align-self: center;
		background: #F8FAFB;
		padding: 12rpx 0px;
	}

	.footer_nav_list {
		flex-direction: column;
		height: 100%;
		padding: 0px 40rpx;
	}

	.footer_nav_icon {
		width: 32rpx;
		height: 30rpx;
		margin: 0rpx auto;
	}

	.footer_nav_sweep {
		position: absolute;
		left: calc(50% - 60rpx);
		top: -60rpx;
		padding: 40rpx;
		background: #F8FAFB;
		border-radius: 50%;
		box-shadow: 1px 1px 1px 1px #D4CFCF;
		width: 60rpx;
		height: 60rpx;
	}

	.footer_nav_title {
		font-size: 17rpx;
		margin-top: 14rpx;
	}
</style>
