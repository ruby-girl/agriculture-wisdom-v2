<!-- 地块列表 -->
<template>
	<div class="hacienda_list_html">
		<div class="tab_bar">地块列表</div>
		<scroll-view scroll-y>
			<ListSlot v-for="(item, index) in haciendaData" :key="index" :value="item"></ListSlot>
		</scroll-view>
	</div>
</template>
<script>
	import ListSlot from "../components/listSlot";
	import {
		Hacienda
	} from "@/api/api";
	export default {
		//import引入的组件需要注入到对象中才能使用
		props: {},
		components: {
			ListSlot
		},
		data() {
			//这里存放数据
			return {
				haciendaData: [

				],
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		onReady() {
			this.getSoilList()
		},
		//方法集合
		methods: {
			getSoilList() {
				let params = {
					pageNum: 1,
					pageSize: 10,
				};
				Hacienda.getSoilList(params).then((res) => {
					this.haciendaData = res.data.data.records
				});
			},
		},
	};
</script>
<style lang='less' scoped>
	.tab_bar {
		position: fixed;
		top: 0rpx;
		width: 100vw;
		padding-top: var(--status-bar-height);
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: calc(var(--status-bar-height) + 88rpx);
		box-sizing: border-box;
		background: #ffffff;
	}

	.hacienda_list_html {
		padding-top: calc(var(--status-bar-height) + 88rpx);
		background: #eeeeee;
		height: 100vh;
	}
</style>
