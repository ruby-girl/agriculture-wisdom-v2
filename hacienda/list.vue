<!-- 地块列表 -->
<template>
  <div class="hacienda_list_html">
   <scroll-view scroll-y>
      <ListSlot
      v-for="(item, index) in haciendaData"
      :key="index"
      :value="item"
    ></ListSlot>
   </scroll-view>
  </div>
</template>
<script>
import ListSlot from "./components/listSlot";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {},
  components: { ListSlot },
  data() {
    //这里存放数据
    return {
      haciendaData: [
        {
          farmPhotos: [
            {
              farmPhotoId: "35",
              path:
                "https://xkzn-file.oss-cn-beijing.aliyuncs.com/MasterPhoto/2020/11/14/865a20b8-2986-40c8-8e7a-0bf14284f6e7.jpg",
              farmId: "32",
              uploadTime: "2020-11-14 17:30:56",
            },
          ],
          farm: {
            farmId: "32",
            farmName: "**农场",
            introduce:
              "农场主营：青梅苗，红美人桔苗，猕猴桃苗，杨梅苗，金桔苗，桃苗，樱桃苗等各类果苗；另有红梅，桂花，红枫，海棠，樱花等各类花木供应",
            userId: "43",
            master: "李某",
            masterPhone: "110",
            provinceName: "四川省",
            provinceCode: "510000",
            cityName: "成都市",
            cityCode: "510100",
            countyName: "武侯区",
            countyCode: "510107",
            address: "xx号",
            nearby: true,
            recommended: true,
            experience: null,
            facilitiesId: null,
          },
          masterPhotos: [
            {
              masterPhotoId: "30",
              path:
                "https://xkzn-file.oss-cn-beijing.aliyuncs.com/MasterPhoto/2020/11/14/19e2a10d-cf0d-48b7-acfc-22059bb452e6.jpg",
              farmId: "32",
              uploadTime: "2020-11-14 17:30:56",
            },
          ],
        },
      ],
    };
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
.hacienda_list_html {
  background: #eeeeee;
  height: 100vh;
}
</style>
