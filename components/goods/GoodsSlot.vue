<!-- 集市商品插槽 -->
<template>

  <div
    class='goods_slot_html'
    @click="GoodsDetail(val.productId)"
  >
    <div class="goods_image">
      <img
        class="goods_image"
        :src="val.coverPath[0]"
        alt=""
      >
    </div>
    <div class="goods_name">{{val.productName}}</div>
    <div class="goods_info">
      <div class="goods_price_info">
        <div class="￥">￥</div>
        <div class="goods_price">{{val.price}}</div>
      </div>
      <div class="goods_num">已售：{{val.sales}}件</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    val: Object,
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    GoodsDetail(id) {
      uni.navigateTo({
        url: `/market/details?id=${id}`,
      });
    },
  },
};
</script>
<style lang='less' scoped>
.goods_slot_html {
  padding: 18rpx 12rpx;
}
.goods_image {
  width: 347rpx;
  height: 358rpx;
  border-radius: 5rpx;
}
.goods_name {
  font-size: 20rpx;
  font-weight: bold;
}
.goods_info,
.goods_price_info {
  flex-direction: row;
}
</style>