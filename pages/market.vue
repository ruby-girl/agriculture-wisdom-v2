<template>
  <scroll-view
    scroll-y
    @scrolltolower="UpData"
    @scroll="floatTab"
    style="height: calc(100vh - 221rpx)"
    class="market_html"
  >
    <div class="tab_bar">集市</div>
    <swiper
      class="swiper-box"
      :circular="true"
    >
      <swiper-item
        v-for="(item, index) in bannerInfo"
        :key="index"
        @click="swiperClick(item.type, item.id)"
      >
        <view class="swiper-item">
          <image
            style="width: 100vw"
            :src="item.address[0]"
            mode="widthFix"
          ></image>
          <div
            class="swiper_text"
            v-if="item.content"
          >{{item.content}}</div>
        </view>
      </swiper-item>
    </swiper>
    <div>
      <div :class="['tab_bar_list',floatType?'float_tab_list':'']">
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
      </div>
      <div
        v-for="(item,index) in items"
        v-show="current === index"
        :key="index"
      >
        <div>
          <MarketGoods :categoryId="item.id"></MarketGoods>
        </div>
      </div>
    </div>
  </scroll-view>
</template>

<script>
import { Market, Home } from "@/api/api";
import MarketGoods from "../components/MarketGoods";
import zzxTabs from "../components/zzx-tabs.vue";
export default {
  components: {
    MarketGoods,
    zzxTabs,
  },
  data() {
    return {
      items: [],
      current: 0,
      bannerInfo: [],
      floatType: false,
    };
  },
  created() {
    this.getBroadcast();
    this.getSortList();
  },

  methods: {
    // 切换分类列表
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    // 获取轮播图
    getBroadcast() {
      Home.getBroadcast({ type: "2" }).then((res) => {
        this.bannerInfo = res.data.data;
      });
    },
    // 分类列表吸顶
    floatTab(e) {
      if (e.detail.scrollTop > 150 && !this.floatType) {
        this.floatType = true;
      }
      if (e.detail.scrollTop < 150 && this.floatType) {
        this.floatType = false;
      }
    },
    // 滚动到底部
    UpData() {
      console.log(123456);
    },
    // 获取分类列表
    getSortList() {
      let params = {
        pageNum: 1,
        pageSize: 100,
        parentId: "1",
      };
      Market.getSortList(params).then((res) => {
        let data = res.data.data.records;
        data.unshift({
          id: "-1",
          cateName: "全部",
        });
        this.items = data;
      });
    },
  },
};
</script>

<style lang='less' scoped>
.market_html {
  padding-top: calc(var(--status-bar-height) + 88rpx);
  background: #eeeeee;
}
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
  background: #ffffff;
}
.tab_bar_list {
  background: #fff;
  margin-bottom: 1rpx;
  padding: 8rpx 0rpx;
}
.float_tab_list {
  width: 100vw;
  position: fixed;
  top: calc(var(--status-bar-height) + 88rpx);
}
.swiper-item {
  position: relative;
  height: 300rpx;
  justify-content: center;
  align-items: center;
}
.swiper_text {
  position: absolute;
  max-width: 235rpx;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
  font-size: 45rpx;
}
</style>
