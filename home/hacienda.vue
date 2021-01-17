<!-- 农场详情-->
<template>
  <div class="hacienda_html">
    <scroll-view scroll-y @scroll="floatTab" style="height: 100vh">
      <PageTabbar :title="TabbarTitle"></PageTabbar>
      <div class="hacienda_banner">
        <img class="hacienda_banner" src="" alt="" />
      </div>
      <!-- 农场信息 -->
      <div
        class="hacienda_user_info"
        :style="{ bottom: `calc(100vh - 638rpx - ${topNum}rpx)` }"
      >
        <div class="hacienda_top">
          <div class="hacienda_address">
            <image
              class="orientation_icon"
              :src="orientationIcon"
              mode="widthFix"
            ></image>
            {{ HaciendaData.cityName }}
            {{ HaciendaData.countyName }}
          </div>
          <div class="hacienda_state">{{ HaciendaData.introduce }}</div>
        </div>
        <div class="hacienda_content">2</div>
      </div>
      <div :style="{ height: `calc(312rpx - ${boxHeight}rpx)` }"></div>
      <!-- 视频和详情 -->
      <zzx-tabs
        :items="items"
        :current="current"
        :defaultColor="'#000000'"
        :activeColor="'#55BE91'"
        :lineTop="'-6rpx'"
        @clickItem="onClickItem"
        ref="mytabs"
      >
      </zzx-tabs>
      <div class="hacienda_html_content"></div>
    </scroll-view>
  </div>
</template>

<script>
import { Hacienda } from "@/api/api";
import PageTabbar from "@/components/PageTabbar";
import zzxTabs from "../components/zzx-tabs.vue"; //标签页

export default {
  components: { PageTabbar, zzxTabs },
  data() {
    return {
      orientationIcon: require("@/assets/orientation.png"),
      TabbarTitle: "",
      current: 0,
      topNum: 312,
      HaciendaData: {},
      boxHeight: 0,
      items: [
        { id: 0, cateName: "视频" },
        { id: 1, cateName: "详情" },
      ],
    };
  },
  onReady() {
    this.getHacienda();
  },
  methods: {
    getHacienda() {
      let parames = {
        farmId: "32",
      };
      Hacienda.getHacienda(parames).then((res) => {
        this.TabbarTitle = res.data.data[0].farm.farmName;
        this.HaciendaData = res.data.data[0].farm;
        console.log(res);
      });
    },
    floatTab(e) {
      let num = e.detail.scrollTop;
      this.topNum = 312 - num * 3 <= 0 ? 156 - num * 2 : 312 - num * 3;
      this.boxHeight = num * 2 > 156 ? 156 : num * 2;
    },
    // 点击切换标签页
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.hacienda_banner {
  width: 100vw;
  height: 500rpx;
  background: red;
}
.hacienda_user_info {
  position: fixed;
  align-items: center;
  left: calc(50vw - 243rpx);
  width: 486rpx;
  height: 312rpx;
  border-radius: 33rpx;
  padding: 48rpx 45rpx 57rpx 43rpx;
  box-shadow: 0px 10px 24px 3px rgba(184, 179, 179, 0.66);
  background: #fff;
  z-index: 2;
}
.orientation_icon {
  width: 30rpx;
  height: 40rpx;
}
.hacienda_address {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.hacienda_html_content {
  background: wheat;
  height: 1000px;
}
</style>
