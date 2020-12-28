<template>
	<div>
		<TabBar :title="'首页'"></TabBar>
	</div>
</template>

<script>
	import TabBar from "../components/HomeTabBar.vue"
	export default {
		components: {
			TabBar
		},
		data() {
			return {};
		},
	};
</script>

<style>
</style>
