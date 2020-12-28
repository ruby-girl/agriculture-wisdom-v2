<script>
	export default {
		onLaunch: function(option) {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					console.log('设备信息',e)
					console.log('设备状态栏高度',e.statusBarHeight)
					uni.setStorage({
						key: 'customBar',
						data: e.statusBarHeight+20
					})
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	div {
		display: flex;
		box-sizing:border-box;
		font-size: 18rpx;
	}
</style>
