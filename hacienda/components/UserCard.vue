<!-- 用户信息卡 -->
<template>
  <div class="user_card_html">
    <img class="user_img" :src="UserInfo.masterPhotos" alt="" />
    <div class="user_info">
      <div class="user_info_list">
        <div class="info_title">农场主：</div>
        <div class="info_val">{{ UserInfo.master }}</div>
      </div>
      <div class="user_info_list">
        <div class="info_title">资历：</div>
        <div class="info_val">{{ UserInfo.experience }}</div>
      </div>
      <div class="user_info_list">
        <div class="info_title">农场位置：</div>
        <div class="info_val">
          {{ UserInfo.provinceName }}{{ UserInfo.cityName
          }}{{ UserInfo.countyName }}{{ UserInfo.address }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    UserInfo: Object,
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang='less' scoped>
.user_card_html {
  flex-direction: row;
  padding: 28rpx 44rpx 34rpx 67rpx;
}

.user_img {
  width: 220rpx;
  height: 218rpx;
  border-radius: 5rpx;
}
.user_info_list {
  flex-direction: row;
}
.info_title {
  color: #3f3f40;
  font-size: 20rpx;
  font-weight: bold;
}
.info_val {
  color: #3f3f40;
  font-size: 20rpx;
}
.user_info {
  justify-content: space-around;
}
</style>