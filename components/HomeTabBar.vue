<!-- 顶部自定义组件-首页 -->
<template>
	<div class="tabbar_html" :style="{'margin-top':`${customBar}rpx`}">
		<!-- 左边 -->
		<div class="box_left">
			<image class="orientation_icon" :src="orientationIcon" mode="widthFix"></image>
			<div class="orientation_city">{{orientationCity}}</div>
			<image class="orientation_icon" :src="goBackIcon" mode="widthFix"></image>
		</div>
		<!-- 中间 -->
		<div class="box_content">{{title}}</div>
		<!-- 右边 -->
		<div class="box_right"></div>
	</div>
</template>

<script>
	export default {
		//import引入的组件需要注入到对象中才能使用
		props: {
			title: String,

		},
		components: {},
		data() {
			return {
				orientationIcon: require('../assets/orientation.png'),
				goBackIcon: require('../assets/go_back.png'),
				customBar: "",
				orientationCity: "绵阳"
			};
		},
		beforeCreate() {
			uni.getStorage({
				key: "customBar",
				success: (res) => {
					this.customBar = res.data
				}
			})
		}

	};
</script>

<style lang="scss" scoped>
	.tabbar_html {
		position: relative;
		width: 100vw;
		height: 88rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #F8FAFB;
		padding: 0px 25rpx;
	}

	.box_left {
		position: absolute;
		left: 25rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.orientation_icon {
		width: 30rpx;
		height: 40rpx;
	}
	.orientation_city{
		margin:0rpx 15rpx;
	}
	.box_content{
		font-size: 36rpx;
	}
</style>
