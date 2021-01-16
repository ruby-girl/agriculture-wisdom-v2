<!-- 农场秀 -->
<template>
  <div class="farm_show_html">
    <!-- 720度全景展示 -->
    <div class="farm_show_list" style="border-bottom: 1rpx solid #d8d8d8">
      <div class="list_title">720度全景展示</div>
      <div class="panorama_video">
        <video class="panorama_video" :src="panoramaVideo"></video>
      </div>
    </div>
    <!-- 详情介绍 -->
    <div class="farm_show_list" style="margin-top: 24rpx">
      <div class="list_title">详情介绍</div>
      <div class="introduce_content">{{ UserInfo.introduce }}</div>
      <div class="introduce_" v-for="(item, index) in farmPhotos" :key="index">
        <img
          class="introduce_"
          v-if="item.path.substring(item.path.lastIndexOf('.') + 1) === 'jpg'"
          :src="item.path"
          alt=""
        />
        <video
          class="introduce_"
          v-if="item.path.substring(item.path.lastIndexOf('.') + 1) === 'mp4'"
          :src="item.path"
        ></video>
      </div>
    </div>
  </div>
</template>
<script>
import { Hacienda } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    UserInfo: Object,
    farmPhotos: Array,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      panoramaVideo: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    UserInfo: function (val) {
      if (val.facilitiesId) {
        this.getLivePath(val.facilitiesId);
      }
    },
  },
  //方法集合
  methods: {
    getLivePath(id) {
      Hacienda.getLivePath({ deviceId: id }).then((res) => {
        console.log(res);
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.farm_show_html {
  padding: 21rpx 33rpx;
  max-width: 671rpx;
}
.farm_show_list {
  padding-bottom: 65rpx;
}
.list_title {
  border-left: 5rpx solid #49ba89;
  height: 52rpx;
  padding-left: 17rpx;
  font-size: 24rpx;
  color: #3f3f40;
  margin-bottom: 30rpx;
  justify-content: center;
}
.panorama_video {
  width: 672rpx;
  height: 312rpx;
  border-radius: 15rpx;
  overflow: hidden;
}
.introduce_ {
  width: 671rpx;
  height: 284rpx;
  margin: 5rpx 0rpx;
}
</style>