<!-- 首页模块插槽 -->
<template>
  <div class="home_solt_html">
    <div class="solt_haeders">
      <div class="header_title">
        <div class="header_text">{{ title }}</div>
        <div class="header_time" v-if="Time">{{ countTime }}</div>
      </div>
      <div class="header_other" v-if="onMoreType" @click="onMore">
        查看全部
        <i
          class="fa fa-angle-right"
          style="font-size: 30rpx; margin-left: 10rpx"
        ></i>
      </div>
    </div>
    <div class="solat_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { Countdown } from "@/utils/public.js";
export default {
  props: {
    title: String,
    Time: String,
    onMoreType: Boolean,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      countTime: "",
      setIntervalTime: null,
    };
  },
  //加载
  onLoad() {},
  //显示,
  onShow() {},
  //页面初次显示
  onReady() {},

  watch: {
    Time: function (val) {
      if (this.Time) {
        this.setIntervalTime = setInterval(() => {
          this.countTime = Countdown(this.Time);
        }, 1000);
      }
    },
  },
  //方法集合
  methods: {
    onMore() {
      this.$emit("onMore", this.title);
    },
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  onHide() {}, //页面隐藏
  onUnload() {}, //页面卸载
  onBackPress() {}, //页面返回
  onShareAppMessage() {}, //分享
  onReachBottom() {}, //下拉加载
  onPageScroll() {}, //页面滚动
  onPullDownRefresh() {}, //上拉刷新
};
</script>
<style lang='less' scoped>
.home_solt_html {
  flex-direction: column;
  padding-bottom: 60rpx;
  border-bottom: 1rpx solid #e4e4e4;
}
.solt_haeders {
  flex-direction: row;
  width: 100vw;
  height: 52rpx;
  padding: 0rpx 25rpx;
  margin: 15rpx 0rpx;
  justify-content: space-between;
  align-items: center;
}
.header_title {
  flex-direction: row;
  align-items: center;
  border-left: 5rpx solid #49ba89;
  padding-left: 15rpx;
}
.header_time {
  font-size: 15rpx;
  color: #ff0000;
  margin-left: 13rpx;
}
.header_text {
  color: #3f3f40;
}
.header_other {
  flex-direction: row;
  color: #c2c2c2;
}
.solat_content {
  margin-top: 35rpx;
}
</style>
