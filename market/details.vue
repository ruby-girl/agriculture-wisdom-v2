<!-- 商品详情-->
<template>
  <div class="goods_html">
    <div class="tab_bar">
      <div class="goods_go_back"> <i
          class="fa fa-angle-left"
          style="font-size:30rpx"
        ></i></div>
      <div class="goods_text">商品详情</div>
    </div>
    <div class="goods_image">
      <img
        class="goods_image"
        :src="GoodsVal.detailsPath[0]"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import { Market } from "@/api/api";
export default {
  data() {
    return {
      GoodsVal: {},
    };
  },

  created() {},
  onLoad(options) {
    this.getGoodsDetail(options.id);
  },
  methods: {
    getGoodsDetail(id) {
      let params = {
        productId: id,
      };
      Market.getGoodsDetail(params).then((res) => {
        this.GoodsVal = res.data.data;
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
.goods_go_back,
.goods_text {
  color: #fff;
}
.goods_go_back {
  position: absolute;
  left: 25rpx;
}
</style>
