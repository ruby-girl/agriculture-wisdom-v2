<!-- 引导页 -->
<template>
	<div class=''>
		<Home v-if="footerIndex===0"></Home>
		<Hacienda v-if="footerIndex===1"></Hacienda>
		<Market v-if="footerIndex===3"></Market>
		<User v-if="footerIndex===4"></User>
		<FooterNav :footerIndex="footerIndex" @FooterOnClick="FooterOnClick"></FooterNav>
	</div>
</template>
<script>
	import Home from "./home.vue" //首页
	import Hacienda from "./hacienda.vue" //农场
	import Market from "./market.vue" //集市
	import User from "./user.vue" //个人中心
	import FooterNav from "@/components/FooterNav.vue" //个人中心
	export default {
		components: {
			Home,
			Market,
			Hacienda,
			User,
			FooterNav
		},
		data() {
			//这里存放数据
			return {
				footerIndex: 0,
			}
		},
		//加载
		onLoad() {},
		//显示
		onShow() {},
		//页面初次显示
		onReady() {},
		//方法集合
		methods: {
			FooterOnClick(val) {
				this.footerIndex = val
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
</style>
