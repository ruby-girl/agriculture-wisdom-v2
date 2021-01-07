<!-- 商品详情-->
<template>
	<div class="goods_html">
		<div class="tab_bar">
			<div class="goods_go_back"> <i class="fa fa-angle-left" style="font-size:30rpx"></i></div>
			<div class="goods_text">商品详情</div>
		</div>
		<div class="goods_image">
			<swiper class="swiper-box" :circular="true" :current="swiperCurrent" @change="swiperChange">
				<swiper-item class="goods_image" v-for="(item, index) in goodsVal.detailsPath" :key="index" @click="swiperClick(item.type, item.id)">
					<view class="goods_image">
						<image class="goods_image" :src="item"></image>
					</view>
				</swiper-item>
				<div class="swiper_dots">{{`${swiperCurrent+1}/${goodsVal.detailsPath.length}`}}</div>
			</swiper>
		</div>
	</div>
</template>

<script>
	import {
		Market
	} from "@/api/api";
	export default {
		data() {
			return {
				swiperCurrent: 0,
				goodsVal: {},
			};
		},

		created() {},
		onLoad(options) {
			this.getGoodsDetail(options.id);
		},
		methods: {
			// 轮播图滑动
			swiperChange(event) {
				console.log(event)

			},
			// 获取商品详情
			getGoodsDetail(id) {
				let params = {
					productId: id,
				};
				Market.getGoodsDetail(params).then((res) => {
					this.goodsVal = res.data.data;
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
		height: calc(var(--status-bar-height) + 88rpx);
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0);
	}

	.swiper-box {
		height: 800rpx;
	}

	.goods_go_back,
	.goods_text {
		color: #fff;
	}

	.goods_go_back {
		position: absolute;
		left: 25rpx;
	}

	.goods_image {
		position: relative;
		width: 100vw;
		height: 100%;
	}

	.swiper_dots {
		position: absolute;
		padding: 14rpx 17rpx;
		border-radius: 60rpx;
		letter-spacing: 6rpx;
		right: 22rpx;
		bottom: 21rpx;
		background: rgba(0, 0, 0, 0.5);
		color: #FFFFFF;
	}
</style>
