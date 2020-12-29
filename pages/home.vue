<template>
	<div class="home_html">
		<TabBar :title="'首页'"></TabBar>
		<div class="home_content">
			<!-- <uni-swiper-dot :info="info" :current="current" field="content" :mode="'default'"> -->
				<swiper class="swiper-box" @change="change" :circular="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							<image :src="item.url" mode="aspectFit"></image>
						</view>
					</swiper-item>
				</swiper>
			<!-- </uni-swiper-dot> -->
		</div>
	</div>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	import TabBar from "../components/HomeTabBar.vue"
	export default {
		components: {
			TabBar,
			uniSwiperDot
		},
		data() {
			return {
				info: [{
					url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180716%2Fa2b75c52b2b240f4bcdf47990df5109c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611831247&t=5a7e1f02f6da2a920745a6fe98c90a2b'
				}, {
					url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.farm28.com%2Fupload%2Fphoto3%2FinfoF001.jpg&refer=http%3A%2F%2Fwww.farm28.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611831308&t=1a60befb8691774899f926e8ef43bf85'
				}, {
					url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180107%2F8e183db0f2644abe83d6762223ef45b6.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611831459&t=a457189237ed866ffe6043d2266cc6bb'
				}],
				current: 0,
				mode: 'round',
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	};
</script>

<style long="less" scoped>
	.home_html{
		flex-direction: column;
	}
	.home_content,.swiper-box{
		width: 100vw;
	}
</style>
