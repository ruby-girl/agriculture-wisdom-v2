<!-- 地块列表 -->
<template>
  <div class="hacienda_list_html">
    <div class="tab_bar">地块列表</div>
    <scroll-view
      scroll-y
      style="height:calc(100vh - 226rpx)"
      @scrolltolower="LoadSoilList"
    >
      <ListSlot
        v-for="(item, index) in haciendaData"
        :key="index"
        :value="item"
      ></ListSlot>
      <ListBottom :TextType="loadType"></ListBottom>
    </scroll-view>
  </div>
</template>
<script>
import ListSlot from "../components/listSlot";
import ListBottom from "../components/ListBottom";
import { Hacienda } from "@/api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {},
  components: {
    ListSlot,
    ListBottom,
  },
  data() {
    //这里存放数据
    return {
      haciendaData: [],
      loadType: "",
      pageData: {
        pageNum: 1,
        pageSize: 6,
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  onReady() {
    this.getSoilList();
  },
  //方法集合
  methods: {
    LoadSoilList() {
      this.pageData.pageNum++;
      this.getSoilList();
    },
    getSoilList() {
      if (this.loadType === "none") return;
      this.loadType = "load";
      Hacienda.getSoilList(this.pageData).then((res) => {
        this.loadType = res.data.data.records.length > 1 ? "" : "none";
        if (this.pageData.pageNum === 1) {
          // 第一页
          this.haciendaData = res.data.data.records;
        } else {
          this.haciendaData = this.haciendaData.concat(res.data.data.records);
        }
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
