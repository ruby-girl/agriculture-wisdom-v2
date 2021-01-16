<!-- 成长档案和溯源详情 -->
<template>
  <div class='file_trace_html'>
    <div class="file_html">
      <div class="html_icon">
        <!-- <img
          src=""
          alt=""
        > -->
      </div>
      <div class="html_ctext">溯源详情</div>
    </div>
    <div class="centent_line"></div>
    <div class="trace_html">
      <div class="html_icon">
        <!-- <img
          src=""
          alt=""
        > -->
      </div>
      <div class="html_ctext">参与生产</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
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
.file_trace_html {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 213rpx;
}
.file_html,
.trace_html {
  width: 50%;
  align-items: center;
}
.html_icon {
  width: 108rpx;
  height: 108rpx;
  border-radius: 50%;
  // overflow: hidden;
  background: chartreuse;
  margin-bottom: 21rpx;
}
.html_ctext{
  color: #3F3F40;
  font-size: 20rpx;
}
.centent_line {
  width: 1rpx;
  height: 138rpx;
  position: absolute;
  top: calc(50% - 69rpx);
  left: calc(50% - 0.5rpx);
}
</style>