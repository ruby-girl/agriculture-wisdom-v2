<!-- 农场详情 -->
<template>
  <div class="hacienda_detalis_html"></div>
</template>
<script>
import { Hacienda } from "@/api/api.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {},
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  onLoad(options) {
    console.log(options);
    this.getHacienda(options.id);
  },
  //方法集合
  methods: {
    getHacienda(id) {
      Hacienda.getHacienda({ farmId: id }).then(res=>{
        console.log(res);
      });
    },
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>