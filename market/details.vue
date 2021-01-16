<!-- 商品详情-->
<template>
  <div class="goods_html">
    <div class="tab_bar">
      <div class="goods_go_back" @click="goBack">
        <i class="fa fa-angle-left" style="font-size: 40rpx; color: #fff"></i>
      </div>
      <div class="goods_text">商品详情</div>
    </div>
    <div class="goods_image">
      <swiper
        class="swiper-box"
        :circular="true"
        :current="swiperCurrent"
        @change="swiperChange"
      >
        <swiper-item
          class="goods_image"
          v-for="(item, index) in goodsVal.detailsPath"
          :key="index"
        >
          <view class="goods_image">
            <image class="goods_image" :src="item"></image>
          </view>
        </swiper-item>
        <div class="swiper_dots">
          {{ `${swiperCurrent + 1}/${goodsVal.detailsPath.length}` }}
        </div>
      </swiper>
    </div>
    <div class="goods_details" style="margin-top: 30rpx">
      <div class="goods_price">
        <div class="price_icon">￥</div>
        <div class="price_value">{{ goodsVal.price }}</div>
      </div>
      <div class="goods_oldprice">
        <div class="oldprice_icon">￥</div>
        <div class="oldprice_value">{{ goodsVal.cost }}</div>
      </div>
    </div>
    <!-- 商品名称 -->
    <div class="goods_info" style="margin-top: 22rpx">
      <div class="goods_name">{{ goodsVal.productName }}</div>
      <div class="goods_share">
        <i
          class="fa fa-share-alt"
          style="font-size: 36rpx"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="goods_">
      <div class="goods_freight">
        运费：{{ goodsVal.postage ? goodsVal.postage : "免运费" }}
      </div>
      <div class="goods_sales">月销{{ goodsVal.sales }}</div>
      <div class="goods_address">{{ goodsVal.city }}</div>
    </div>
    <!-- 服务 -->
    <div class="goods_state">
      <span class="goods_state_tips">服务</span>
      7天无理由 · 新品 · 72小时内发货
    </div>
    <FileAndTrace></FileAndTrace>
    <div class="list_line"></div>
    <UserCard :UserInfo="UserInfo"></UserCard>
    <div class="list_line"></div>
    <!-- 项目介绍&农场秀&新农人说----标题 -->
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
    <!-- 项目介绍&农场秀&新农人说----内容 -->
    <div class="html_content">
      <Introduce v-show="current === 0" :goodsVal="goodsVal"></Introduce>
      <FarmShow
        v-show="current === 1"
        :UserInfo="UserInfo"
        :farmPhotos="farmPhotos"
      ></FarmShow>
      <Comment v-show="current === 2"></Comment>
    </div>
    <!-- 购买&加入购物车&收藏 -->
    <div class="fixed_box">
      <div class="collect">
        <i class="fa fa-star"></i>
        <i class="fa fa-star-o"></i>
        收藏
      </div>
      <div class="fixed_box_right">
        <div class="goods_cart">加入购物车</div>
        <div class="purchase">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Market, Hacienda } from "@/api/api";
import FileAndTrace from "./components/FileAndTrace"; //成长档案&溯源详情
import UserCard from "./components/UserCard"; //农场主信息
import zzxTabs from "../components/zzx-tabs.vue"; //标签页
import Introduce from "@/components/Introduce"; //项目介绍
import FarmShow from "@/components/FarmShow"; //农场秀
import Comment from "@/components/Comment"; //新农人说
export default {
  components: {
    FileAndTrace,
    UserCard,
    zzxTabs,
    Introduce,
    FarmShow,
    Comment,
  },
  data() {
    return {
      swiperCurrent: 0,
      goodsVal: {},
      UserInfo: {},
      farmPhotos: {},
      items: [
        { id: 0, cateName: "项目介绍" },
        { id: 1, cateName: "农场秀" },
        { id: 2, cateName: "新农人说" },
      ],
      current: 0,
    };
  },

  created() {},
  onLoad(options) {
    this.getGoodsDetail(options.id);
    this.getHacienda(32);
  },
  methods: {
    // 轮播图滑动
    swiperChange(event) {
      console.log(event);
    },
    // 返回
    goBack() {
      uni.navigateBack();
    },
    // 获取商品详情
    getGoodsDetail(id) {
      let parames = {
        productId: id,
      };
      Market.getGoodsDetail(parames).then((res) => {
        this.goodsVal = res.data.data;
      });
    },
    // 获取农场信息
    getHacienda(id) {
      Hacienda.getHacienda({ farmId: id }).then((res) => {
        this.UserInfo = res.data.data[0].farm;
        this.farmPhotos = res.data.data[0].farmPhotos;
      });
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
.goods_html {
  padding-bottom: 120rpx;
}
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

.swiper-box {
  height: 800rpx;
}

.goods_go_back,
.goods_text {
  color: #fff;
}

.goods_go_back {
  padding: 0px 30rpx;
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
  color: #ffffff;
}
.goods_details,
.goods_price,
.goods_oldprice {
  flex-direction: row;
}
.price_icon {
  justify-content: flex-end;
  font-size: 34rpx;
  color: #fe2448;
}
.price_value {
  justify-content: flex-end;
  font-size: 44rpx;
  color: #fe2448;
}
.oldprice_icon {
  justify-content: flex-end;
  font-size: 18rpx;
  color: #a6a6a6;
}
.oldprice_value {
  justify-content: flex-end;
  font-size: 26rpx;
  color: #a6a6a6;
}
.goods_info {
  flex-direction: row;
  justify-content: space-between;
}
.goods_details,
.goods_info,
.goods_,
.goods_state {
  padding: 0px 30rpx 0rpx 20rpx;
}
.goods_name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-right: 40rpx;
}
.goods_share {
  justify-content: center;
}
.goods_ {
  margin-top: 19rpx;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 34rpx;
  border-bottom: 1rpx solid #f2f2f2;
}
.goods_freight,
.goods_sales,
.goods_address {
  color: #a7a7a7;
  font-size: 26rpx;
}
.goods_state {
  flex-direction: row;
  color: #676767;
  font-size: 26rpx;
  padding-top: 33rpx;
  padding-bottom: 33rpx;
  border-bottom: 12rpx solid #eeeeee;
}
.goods_state_tips {
  color: #a7a7a7;
  font-size: 26rpx;
  margin-right: 36rpx;
}
.list_line {
  width: 100vw;
  height: 12rpx;
  background: #eeeeee;
}
.html_content {
  border-top: 1rpx solid #d8d8d8;
}
.fixed_box {
  position: fixed;
  width: 100vw;
  height: 100rpx;
  bottom: 0rpx;
  flex-direction: row;
  background: #fff;
}
.collect {
  width: 104rpx;
  height: 100rpx;
  justify-content: center;
  align-items: center;
}
.fixed_box_right {
  flex-direction: row;
  flex: 1;
}
.goods_cart {
  width: 50%;
  font-size: 34rpx;
  color: #fff;
  background: #fcb758;
  justify-content: center;
  align-items: center;
}
.purchase {
  width: 50%;
  font-size: 34rpx;
  color: #fff;
  background: #ff3855;
  justify-content: center;
  align-items: center;
}
</style>
