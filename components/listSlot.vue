<!-- 农场列表模板 -->
<template>
  <div class="list_slot_html">
    <div class="hacienda_image">
      <img class="hacienda_image" :src="value.farmPhotos[0].path" alt="" />
    </div>
    <div class="hacienda_content">
      <div class="hacienda_name">{{ value.farm.farmName }}</div>
      <div class="hacienda_introduce one_text">{{ value.farm.introduce }}</div>
      <div class="hacienda_address">
        {{ value.farm.provinceName }}{{ value.farm.cityName
        }}{{ value.farm.countyName }}{{ value.farm.address }}
      </div>
      <div class="hacienda_info">
        <div class="hacienda_distance">
          <i class="fa fa-map-marker"></i>
          <span style="margin-left: 13rpx">22km</span>
        </div>
        <div class="hacienda_num">
          再种项目<span style="margin-left: 20rpx">4个</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    value: Object,
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
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.list_slot_html {
  flex-direction: row;
  margin: 5rpx 14rpx;
  padding: 12rpx 14rpx;
  background: #fff;
  border-radius: 10rpx;
}
.hacienda_image {
  width: 266rpx;
  height: 220rpx;
  border-radius: 10rpx;
  margin-right: 21rpx;
}
.hacienda_content {
  padding: 0rpx 14rpx;
  justify-content: center;
}
.hacienda_name {
  font-size: 30rpx;
  color: #333333;
}
.hacienda_introduce {
  font-size: 17rpx;
  color: #323232;
  margin: 18rpx 0rpx;
}
.hacienda_address {
  font-size: 17rpx;
  color: #8b8b8b;
}
.hacienda_info {
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18rpx;
}
.hacienda_distance {
  flex-direction: row;
  align-items: center;
  font-size: 18rpx;
  color: #c2c2c2;
}
.hacienda_num {
  flex-direction: row;
  align-items: center;
  font-size: 18rpx;
  color: #333333;
}
</style>