<!-- 详情 -->
<template>
  <div class='hacienda_info_html'>
    <div class="hacienda_list">
      <div class="hacienda_title">农场主</div>
      <UserCard :UserInfo="HaciendaData"></UserCard>
    </div>
    <div class="hacienda_list">
      <div class="hacienda_title">发起的项目</div>
      <scroll-view
        scroll-x
        style="width:100%"
      >
        <div class="goods_lists">
          <div
            class="goods_list"
            v-for="(item,index) in ProjectData"
            :key="index"
          >
            <div class="goods_img">
              <img
                class="goods_img"
                :src="item.coverPath[0]"
                alt=""
              >
            </div>
            <div class="goods_name">{{item.productName}}</div>
            <div class="goods_info">
              <div class="goods_residue">剩余<div style="font-size: 16rpx;color:#FF0000">{{7}}</div>天</div>
              <!-- <div class="goods_residue">剩余<div style="font-size: 16rpx;color:#FF0000">{{item.stopTime}}</div>天</div> -->
              <div class="goods_plan">已达{{(Number(item.stock) / Number(item.sum)) * 100}}%</div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="hacienda_list">
      <div class="hacienda_title">集市售卖</div>
      <scroll-view
        scroll-x
        style="width:100%"
      >
        <div class="goods_lists">
          <div
            class="goods_list"
            v-for="(item,index) in GoodsData"
            :key="index"
          >
            <div class="goods_img">
              <img
                class="goods_img"
                :src="item.coverPath[0]"
                alt=""
              >
            </div>
            <div class="goods_name">{{item.productName}}</div>
            <div class="goods_info">
              <div class="goods_residue">剩余<div style="font-size: 16rpx;color:#FF0000">{{item.stock}}</div>份</div>
              <div class="goods_price">￥{{item.price}}/份</div>
            </div>
          </div>
        </div>
      </scroll-view>

    </div>
    <div class="hacienda_list">
      <div class="hacienda_title">720度全景展示</div>
      <div class="panorama_video">
        <video
          class="panorama_video"
          :src="panoramaVideo"
        ></video>
      </div>
    </div>
    <div class="hacienda_list">
      <div class="hacienda_title">详情介绍</div>
      <div class="trait_lists">
        <div
          class="trait_list"
          v-for="(item,index) in TraitList"
          :key="index"
        >
          <div class="trait_icon"><i
              :class="['fa', item.icon]"
              style="font-size:34rpx"
            ></i></div>
          <div class="trait_name">{{item.name}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import UserCard from "./UserCard";
import { Home } from "@/api/api";
export default {
  props: {
    HaciendaData: Object,
  },
  components: { UserCard },
  data() {
    return {
      panoramaVideo: "",
      ProjectData: [],
      GoodsData: [],
      pageData: {
        pageNum: 1,
        pageSize: 10,
      },
      TraitList: [
        {
          name: "WIFI",
          icon: "fa-wifi",
        },
        {
          name: "家庭入住",
          icon: "fa-users",
        },
        {
          name: "露营",
          icon: "fa-home",
        },
        {
          name: "停车位",
          icon: "fa-automobile",
        },
        {
          name: "智慧树",
          icon: "fa-tree",
        },
        {
          name: "大地探针",
          icon: "fa-recycle",
        },
        {
          name: "水精灵",
          icon: "fa-tint",
        },
        {
          name: "只能鸡脚环",
          icon: "fa-plane",
        },
        {
          name: "鲜仓宝",
          icon: "fa-truck",
        },
        {
          name: "耳标",
          icon: "fa-plane",
        },
        {
          name: "牛项圈",
          icon: "fa-plane",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getfindfarm();
  },
  mounted() {},
  methods: {
    getfindfarm() {
      // 项目
      Home.getfindfarm({
        ...this.pageData,
        product: { parentId: "0", farmId: "32" },
      }).then((res) => {
        this.ProjectData = res.data.data.records;
      });
      // 商品
      Home.getfindfarm({
        ...this.pageData,
        product: { parentId: "1", farmId: "32" },
      }).then((res) => {
        this.GoodsData = res.data.data.records;
      });
    },
  },
};
</script>
<style lang='less' scoped>
.hacienda_list {
  border-top: 1rpx solid #d8d8d8;
  padding: 15px 40rpx 47rpx 40rpx;
}
.hacienda_title {
  border-left: 5rpx solid #49ba89;
  padding-left: 20rpx;
  color: #3f3f40;
  margin-bottom: 15rpx;
}
.goods_lists {
  flex-direction: row;
}
.goods_list {
  width: 228rpx;
  border-radius: 10rpx;
  border: 1rpx solid #d8d8d8;
  margin: 33rpx 16rpx;
}
.goods_img {
  width: 228rpx;
  height: 190rpx;
  border-radius: 10rpx 10rpx 0rpx 0rpx;
}
.goods_name {
  color: #3f3f40;
  font-size: 18rpx;
  margin: 10rpx 0rpx 15rpx 8rpx;
}
.goods_info {
  flex-direction: row;
  justify-content: space-between;
  padding: 0rpx 8rpx;
  padding-bottom: 14rpx;
}
.goods_residue,
.goods_plan,
.goods_price {
  flex-direction: row;
  color: #9a9a9a;
  font-size: 16rpx;
}
.panorama_video {
  width: 672rpx;
  height: 312rpx;
  border-radius: 15rpx;
  overflow: hidden;
}
.trait_lists {
  flex-direction: row;
  flex-wrap: wrap;
}
.trait_list {
  align-items: center;
  width: 25%;
  margin: 20rpx 0rpx;
}
.trait_icon {
  border-radius: 50%;
  border: 4rpx solid #000;
  width: 63rpx;
  height: 63rpx;
  justify-content: center;
  align-items: center;
  margin-bottom: 18rpx;
}
.trait_name {
  font-size: 18rpx;
  color: #3f3f40;
}
</style>