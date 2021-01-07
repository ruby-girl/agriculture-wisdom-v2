<!-- 地块列表 -->
<template>
  <div class="hacienda_list_html">
    <div class="tab_bar">地块列表</div>
    <scroll-view scroll-y>
      <!-- <ListSlot
        v-for="(item, index) in haciendaData"
        :key="index"
        :value="item"
      ></ListSlot> -->
    </scroll-view>
  </div>
</template>
<script>
// import ListSlot from "../components/listSlot";
import { Hacienda } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {},
  // components: { ListSlot },
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
  onReady() {
		this.getSoilList()
	},
  //方法集合
  methods: {
    getSoilList() {
      let params = {
        pageNum: 1,
        pageSize: 10,
      };
      Hacienda.getSoilList(params).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang='less' scoped>
.tab_bar {
  position: fixed;
  top: 0rpx;
  width: 100vw;
  padding-top: var(--status-bar-height);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(var(--status-bar-height) + 88rpx);
  box-sizing: border-box;
  background: #ffffff;
}
.hacienda_list_html {
  padding-top: calc(var(--status-bar-height) + 88rpx);
  background: #eeeeee;
  height: 100vh;
}
</style>
