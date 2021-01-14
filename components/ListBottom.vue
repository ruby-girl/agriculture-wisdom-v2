<!-- 数据底部加载 -->
<template>
  <div class='list_bottom'>
    <div v-if="TextType==='none'">
    没有更多了
    </div>
    <div v-if="TextType==='load'">
      加载中...
    </div>
  </div>
</template>
<script>
export default {
  props: {
    TextType:String
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
.list_bottom{
  justify-content: center;
  align-items: center;
  margin-top: 20rpx;
  margin-bottom: 80rpx;
}
</style>