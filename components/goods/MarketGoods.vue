<!-- 集市商品插槽 -->
<template>
  <div class="goos_lists">
    <div
      class="goods_list"
      v-for="(item,index) in GoodsData"
      :key="index"
    >
      <GoodsSlot :val="item"></GoodsSlot>
    </div>
  </div>
</template>
<script>
import GoodsSlot from "./GoodsSlot";
import { Market } from "@/api/api";

export default {
  props: {
    categoryId: String,
  },
  components: { GoodsSlot },
  data() {
    return {
      GoodsData: [],
      pageData: {
        pageNum: 1,
        pageSize: 10,
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    if (this.categoryId === "-1") {
      // 全部
      this.getAllGoods();
    } else {
      this.getSortGoods(this.categoryId);
    }
  },
  methods: {
    // 获取所有商品列表
    getAllGoods() {
      let data = {
        ...this.pageData,
        product: {
          parentId: "1",
        },
      };
      Market.getAllGoods(data).then((res) => {
        this.GoodsData = new Array(5).fill(res.data.data.records[0]);
      });
    },
    // 获取分类商品列表
    getSortGoods(id) {
      let data = {
        ...this.pageData,
        product: {
          parentId: "1",
          categoryId: id,
        },
      };
      Market.getAllGoods(data).then((res) => {
        this.GoodsData = new Array(5).fill(res.data.data.records[0]);
      });
    },
  },
};
</script>
<style lang='less' scoped>
.goos_lists {
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goods_list {
  width: calc(50% - 5rpx);
  background: #fff;
  border-radius: 5rpx;
  margin-bottom: 7rpx;
}
</style>