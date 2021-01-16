<!-- 引导页 -->
<template>
  <div class="">
    <Home
      v-if="footerIndex === 0"
      @FooterOnClick="FooterOnClick"
    ></Home>
    <Hacienda v-if="footerIndex === 1"></Hacienda>
    <Market v-if="footerIndex === 3"></Market>
    <User v-if="footerIndex === 4"></User>
    <FooterNav
      :footerIndex="footerIndex"
      @FooterOnClick="FooterOnClick"
    ></FooterNav>
  </div>
</template>
<script>
import Home from "./home.vue"; //首页
import Hacienda from "./hacienda.vue"; //农场
import Market from "./market.vue"; //集市
import User from "./user.vue"; //个人中心
import FooterNav from "@/components/pages/FooterNav.vue"; //底部导航栏
export default {
  components: {
    Home,
    Market,
    Hacienda,
    User,
    FooterNav,
  },
  data() {
    //这里存放数据
    return {
      footerIndex: 0,
    };
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
      this.footerIndex = val;
    },
  },
};
</script>
<style lang='less' scoped>
</style>
