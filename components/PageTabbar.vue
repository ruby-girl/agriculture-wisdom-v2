<!-- 顶部默认菜单栏 -->
<template>
  <div class="pages_tabbar_html">
    <div class="tab_bar">
      <div class="goods_go_back" @click="goBack">
        <i class="fa fa-angle-left" style="font-size: 60rpx; color: #000"></i>
      </div>
      <div class="goods_text">{{ title }}</div>
    </div>
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
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goBack() {
      uni.navigateBack({
        delta: -1,
      });
    },
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.tab_bar {
  position: fixed;
  z-index: 2;
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
.pages_tabbar_html {
  height: calc(var(--status-bar-height) + 88rpx);
}

.goods_go_back {
  padding: 0px 30rpx 0rpx 0rpx;
  position: absolute;
  left: 25rpx;
}
</style>