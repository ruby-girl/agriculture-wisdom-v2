<!-- 项目详情 -->
<template>
  <div class="hacienda_detalis_html">
    <PageTabbar :title="'领地项目详情'"></PageTabbar>
    <div class="cover_img">
      <swiper
        class="swiper-box"
        :circular="true"
        :current="swiperCurrent"
        @change="swiperChange"
      >
        <swiper-item
          class="cover_img"
          v-for="(item, index) in HaciendaVal.coverPath"
          :key="index"
        >
          <view class="cover_img">
            <img class="cover_img" :src="item" alt="" />
          </view>
        </swiper-item>
        <div class="swiper_dots">
          {{ `${swiperCurrent + 1}/${HaciendaVal.coverPath.length}` }}
        </div>
      </swiper>
    </div>
    <div class="hacienda_info">
      <div class="hacienda_name">{{ HaciendaVal.massifName }}</div>
      <div class="hacienda_price">
        <div class="price_icon">￥</div>
        <div class="price_value">{{ HaciendaVal.price }}</div>
        /1块地
      </div>
      <div class="total">
        <div class="stock" :style="{ width: `${HaciendaVal.ratio}%` }"></div>
      </div>
      <div class="hacienda_state">
        <div class="hacienda_state_plan">
          当前进度
          <div class="plan_value">{{ HaciendaVal.ratio }}%</div>
        </div>
        <div class="hacienda_state_residue">
          剩余领地
          <div class="residue_value">{{ HaciendaVal.stock }}</div>
          块
        </div>
      </div>
    </div>
    <div class="list_line"></div>
    <FileAndTrace></FileAndTrace>
    <div class="list_line"></div>
    <UserCard :UserInfo="UserInfo"></UserCard>
    <div class="list_line"></div>
    <!-- 项目介绍&农场秀&新农人说----标题 -->
    <zzx-tabs
      :items="items"
      :current="current"
      :defaultColor="'#000000'"
      :activeColor="'#55BE91'"
      :lineTop="'-6rpx'"
      @clickItem="onClickItem"
      ref="mytabs"
    >
    </zzx-tabs>
    <!-- 项目介绍&农场秀&新农人说----内容 -->
    <div class="html_content">
      <Introduce v-show="current === 0" :goodsVal="HaciendaVal"></Introduce>
      <FarmShow
        v-show="current === 1"
        :UserInfo="UserInfo"
        :farmPhotos="farmPhotos"
      ></FarmShow>
      <Comment v-show="current === 2"></Comment>
    </div>
    <!-- 参与项目 -->
    <div class="fixed_box">
      <div class="countdown border_right">
        <!-- {{ HaciendaVal.startTime }} -->
        <div class="countdown_time">10</div>
        天开启项目
      </div>
      <div class="touch border_right">
        <i class="fa fa-commenting-o hacienda_icon"></i> 联系商家
      </div>
      <div class="collect border_right">
        <!-- <i class="fa fa-star hacienda_icon"></i> -->
        <i class="fa fa-star-o hacienda_icon"></i>
        收藏
      </div>
      <div class="comment">
        <i class="fa fa-pencil-square-o hacienda_icon"></i>评论
      </div>
      <div class="participation">参与项目</div>
    </div>
  </div>
</template>
<script>
import { Market, Hacienda } from "@/api/api.js";
import PageTabbar from "@/components/PageTabbar";
import FileAndTrace from "./components/FileAndTrace"; //成长档案&溯源详情
import UserCard from "./components/UserCard"; //农场主信息
import zzxTabs from "../components/zzx-tabs.vue"; //标签页
import Introduce from "@/components/Introduce"; //项目介绍
import FarmShow from "@/components/FarmShow"; //农场秀
import Comment from "@/components/Comment"; //新农人说
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {},
  components: {
    PageTabbar,
    FileAndTrace,
    UserCard,
    zzxTabs,
    Introduce,
    FarmShow,
    Comment,
  },
  data() {
    //这里存放数据
    return {
      swiperCurrent: 0,
      HaciendaVal: {},
      UserInfo: {},
      farmPhotos: {},
      items: [
        { id: 0, cateName: "项目介绍" },
        { id: 1, cateName: "农场秀" },
        { id: 2, cateName: "新农人说" },
      ],
      current: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  onLoad(options) {
    this.getGoodsDetail(options.id);
    this.getHacienda(32);
  },
  //方法集合
  methods: {
    getGoodsDetail(id) {
      Market.getGoodsDetail({ productId: id }).then((res) => {
        this.HaciendaVal = res.data.data;
        this.HaciendaVal.ratio =
          (Number(this.HaciendaVal.stock) / Number(this.HaciendaVal.sum)) * 100;
      });
    },
    // 获取农场信息
    getHacienda(id) {
      Hacienda.getHacienda({ farmId: id }).then((res) => {
        this.UserInfo = res.data.data[0].farm;
        this.farmPhotos = res.data.data[0].farmPhotos;
      });
    },
    // 点击切换标签页
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.swiper-box {
  height: 365rpx;
  padding-bottom: 80rpx;
}
.cover_img {
  width: 100vw;
  height: 365rpx;
}
.swiper_dots {
  position: absolute;
  padding: 14rpx 17rpx;
  border-radius: 60rpx;
  letter-spacing: 6rpx;
  right: 22rpx;
  bottom: 21rpx;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.hacienda_info {
  padding: 16rpx 25rpx 48rpx 28rpx;
}
.hacienda_name {
  color: #3f3f40;
  font-size: 25rpx;
  font-weight: bold;
}
.price_icon {
  justify-content: flex-end;
  font-size: 34rpx;
  color: #fe2448;
}
.price_value {
  justify-content: flex-end;
  font-size: 48rpx;
  color: #fe2448;
  font-weight: bold;
  margin-right: 11rpx;
}
.hacienda_price {
  flex-direction: row;
  align-items: center;
  color: #c2c2c2;
  font-size: 27rpx;
  margin: 32rpx 0rpx;
}
.total {
  margin-left: 19rpx;
  flex: 1;
  height: 12rpx;
  background: #c9eede;
  border-radius: 6rpx;
}
.stock {
  height: 12rpx;
  background: #49ba89;
  border-radius: 6rpx;
}
.hacienda_state,
.hacienda_state_plan,
.hacienda_state_residue {
  flex-direction: row;
  color: #2d2d2d;
  font-size: 20rpx;
  font-weight: bold;
  align-items: flex-end;
}
.hacienda_state {
  justify-content: space-between;
  margin-top: 27rpx;
}
.plan_value {
  flex-direction: row;
  color: #ff9600;
  font-size: 20rpx;
  margin-left: 11rpx;
  align-items: flex-end;
}
.residue_value {
  color: #ff6600;
  font-size: 30rpx;
  margin: 0px 5rpx;
}
.list_line {
  width: 100vw;
  height: 12rpx;
  background: #eeeeee;
}
.fixed_box {
  position: fixed;
  width: 100vw;
  height: 76rpx;
  bottom: 0rpx;
  flex-direction: row;
  background: #fff;
}
.countdown {
  width: 231rpx;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #929292;
  font-size: 20rpx;
}
.touch,
.collect,
.comment {
  color: #929292;
  font-size: 11rpx;
  justify-content: center;
  align-items: center;
}
.touch {
  width: 100rpx;
}
.collect {
  width: 115rpx;
}
.countdown_time {
  color: #ffb400;
  font-size: 28rpx;
}
.border_right {
  border-right: 1rpx solid #dcdcdc;
}
.comment {
  width: 115rpx;
}
.participation {
  background: #49ba89;
  color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20rpx;
}
.hacienda_icon {
  font-size: 30rpx;
  margin-bottom: 7rpx;
}
</style>