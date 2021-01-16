<!-- 项目介绍 -->
<template>
  <div class="introduce_html">
    <div class="goods_table">
      <div
        class="goods_table_list"
        v-for="(item, index) in TableData"
        :key="index"
      >
        <div class="goods_title">{{ item.state }}</div>
        <div class="goods_val">{{ item.val }}</div>
      </div>
    </div>
    <div class="goods_content">
      <img
        class="goods_content_img"
        v-for="(item, index) in goodsVal.detailsPath"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import moment from "@/utils/moment";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    goodsVal: Object,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      TableData: [
        {
          key: "productName",
          state: "品牌:",
          val: "",
        },
        {
          key: "planting",
          state: "种植方式:",
          val: "",
        },
        {
          key: "massifId",
          state: "地块和标号:",
          val: "",
        },
        {
          key: "storage",
          state: "储存方式:",
          val: "",
        },
        {
          key: "sum",
          state: "分量总数:",
          val: "",
        },
        {
          key: "",
          state: "物流配送:",
          val: "快递邮寄",
        },
        {
          key: "production",
          state: "产量预估:",
          val: "",
        },
        {
          key: "security",
          state: "最低收益保障:",
          val: "",
        },
        {
          key: "plantingTime",
          state: "播种时间:",
          val: "",
        },
        {
          key: "price",
          state: "每份价格:",
          val: "",
        },
        {
          key: "harvestTime",
          state: "收获时间:",
          val: "",
        },
        {
          key: "",
          state: "",
          val: "",
        },
      ],
    };
  },
  //监控data中的数据变化
  watch: {
    goodsVal: function (val) {
      val.plantingTime = moment(val.plantingTime).format("YYYY年MM月");
      val.harvestTime = moment(val.harvestTime).format("YYYY年MM月");
      this.TableData = this.TableData.map((item) => {
        return {
          ...item,
          val: item.key !== "" ? val[item.key] : item.val,
        };
      });
      console.log(this.TableData);
    },
  },
  //方法集合
  methods: {},
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.introduce_html {
  align-items: center;
  padding: 31rpx 0rpx;
}
.goods_table {
  border: 1rpx solid #b5b5b5;
  border-top: 0rpx;
  border-left: 0rpx;
  width: 600rpx;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 48rpx;
}
.goods_table_list {
  border: 1rpx solid #b5b5b5;
  border-right: 0rpx;
  border-bottom: 0rpx;
  width: 50%;
  height: 58rpx;
  padding:0rpx 35rpx;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.goods_title {
  color: #929292;
  font-size: 20rpx;
  white-space: nowrap;
}
.goods_val {
  color: #202020;
  font-size: 20rpx;
  font-weight: bold;
  white-space: nowrap;
}
.goods_content {
  width: 100vw;
  align-items: center;
}
.goods_content_img {
  max-width: 100%;
}
</style>