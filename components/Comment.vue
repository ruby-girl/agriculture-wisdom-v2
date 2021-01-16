<!-- 新农人说 -->
<template>
  <div class="comment_html">
    <div class="comment_list" v-for="(item, index) in CommentData" :key="index">
      <div class="comment_info">
        <div class="info_img">
          <img :src="item.avatar" alt="" class="info_img" />
        </div>
        <div class="info_name">{{ item.pageNum }}</div>
      </div>
      <div class="comment_time">{{ item.creationTime }}</div>
      <div class="comment_text">{{ item.content }}</div>
      <div class="comment_imgs">
        <div
          class="comment_img"
          v-for="(imgs, imgsIndex) in item.path"
          :key="imgsIndex"
        >
          <img :src="imgs" alt="" class="comment_img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Hacienda } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {},
  components: {},
  data() {
    //这里存放数据
    return {
      pageData: {
        pageNum: "1",
        pageSize: "100",
      },
      CommentData: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getCommentList() {
      let parames = {
        ...this.pageData,
        uid: null,
      };
      Hacienda.getCommentList(parames).then((res) => {
        this.CommentData = res.data.data.circleDtos;
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getCommentList();
  },
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
.comment_html {
  padding: 33rpx 56rpx;
}
.comment_list {
  margin-bottom: 26rpx;
}
.comment_info {
  flex-direction: row;
  align-items: center;
}
.info_img {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  background: chocolate;
}
.info_name {
  font-size: 18rpx;
  color: #a3a3a3;
  margin-left: 12rpx;
}
.comment_time {
  font-size: 15rpx;
  color: #a3a3a3;
  margin: 15rpx 0rpx 23rpx 0rpx;
}
.comment_text {
  color: #a3a3a3;
  font-size: 15rpx;
}
.comment_imgs {
  margin-top: 33rpx;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.comment_img {
  width: 197rpx;
  height: 124rpx;
}
</style>