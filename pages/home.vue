<template>
  <div class="home_html">
    <TabBar :title="'首页'"></TabBar>
    <scroll-view
      scroll-y
      style="height: calc(100vh - 240rpx)"
      :show-scrollbar="false"
    >
      <div class="home_content">
        <swiper class="swiper-box" :circular="true">
          <swiper-item
            v-for="(item, index) in info"
            :key="index"
            @click="swiperClick(item.type, item.id)"
          >
            <view class="swiper-item">
              <image
                style="width: 100vw"
                :src="item.address[0]"
                mode="widthFix"
              ></image>
            </view>
          </swiper-item>
        </swiper>
        <!-- 首页模块展示 -->
        <div class="home_lists">
          <HomeSlot :title="'推荐产品'" :onMoreType="true" @onMore="onMore">
            <scroll-view scroll-x>
              <div class="recommend_lists">
                <div
                  class="recommend_list"
                  v-for="(item, index) in recommendData"
                  :key="index"
                  @click="shopDetails(item.productId)"
                >
                  <div class="recommend_image">
                    <img
                      class="recommend_image"
                      :src="item.coverPath[0]"
                      alt=""
                    />
                  </div>
                  <div class="recommend_content">
                    <div class="product_name">{{ item.productName }}</div>
                    <div class="description">{{ item.description }}</div>
                  </div>
                </div>
              </div>
            </scroll-view>
          </HomeSlot>
          <HomeSlot
            :title="'限时秒杀地块'"
            :Time="stopTime"
            :onMoreType="true"
            @onMore="onMore"
          >
            <div class="seckil_lists">
              <div
                class="seckil_list"
                v-for="(item, index) in seckillData"
                :key="index"
                @click="haciendaDetails(item.productId)"
              >
                <div class="seckil_image">
                  <img class="seckil_image" :src="item.coverPath" alt="" />
                </div>
                <div class="seckil_content">
                  <div class="seckil_name">{{ item.productName }}</div>
                  <div class="seckil_stock">
                    <span>剩余:{{ item.stock }}份</span>
                    <!-- 百分比条 -->
                    <div class="total">
                      <div
                        class="stock"
                        :style="{ width: `${item.ratio}%` }"
                      ></div>
                    </div>
                  </div>
                  <div class="seckil_info">
                    <div class="seckil_info_left">
                      <i class="fa fa-map-marker"></i>
                      <div class="ctiy">{{ item.city }}</div>
                      <div class="address">{{ item.address }}</div>
                    </div>
                    <div class="seckil_info_right">
                      <div class="state">认领中</div>
                      <div class="price">
                        <div class="rmb">￥</div>
                        <div class="price_text">{{ item.price }}</div>
                        <div class="unit">/份</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HomeSlot>
          <HomeSlot :title="'精选项目'" :onMoreType="true" @onMore="onMore">
            <div class="seckil_lists">
              <div
                class="seckil_list"
                v-for="(item, index) in bestData"
                :key="index"
                @click="haciendaDetails(item.productId)"
              >
                <div class="seckil_image">
                  <img class="seckil_image" :src="item.coverPath" alt="" />
                </div>
                <div class="seckil_content">
                  <div class="seckil_name">{{ item.productName }}</div>
                  <div class="seckil_stock">
                    <span>剩余:{{ item.stock }}份</span>
                    <!-- 百分比条 -->
                    <div class="total">
                      <div
                        class="stock"
                        :style="{ width: `${item.ratio}%` }"
                      ></div>
                    </div>
                  </div>
                  <div class="seckil_info">
                    <div class="seckil_info_left">
                      <i class="fa fa-map-marker"></i>
                      <div class="ctiy">{{ item.city }}</div>
                      <div class="address">{{ item.address }}</div>
                    </div>
                    <div class="seckil_info_right">
                      <div class="state">认领中</div>
                      <div class="price">
                        <div class="rmb">￥</div>
                        <div class="price_text">{{ item.price }}</div>
                        <div class="unit">/份</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HomeSlot>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import TabBar from "../components/home/HomeTabBar.vue"; //顶部导航
import { Home } from "@/api/api.js"; //数据请求
import HomeSlot from "@/components/home/HomeSlot.vue"; //首页模块插槽
export default {
  components: {
    TabBar,
    HomeSlot,
  },
  data() {
    return {
      info: [],
      recommendData: [],
      seckillData: [],
      bestData: [],
      stopTime: null,
    };
  },

  onReady() {
    this.getBroadcast();
    this.getHomeProduct();
  },

  methods: {
    // 获取轮播
    getBroadcast() {
      Home.getBroadcast().then((res) => {
        this.info = res.data.data;
      });
    },
    // 获取商品列表
    getHomeProduct() {
      // -------推荐
      let parames = {
        pageNum: 1,
        pageSize: 10,
        product: {
          parentId: "1", //0是项目；1是商品
        },
      };
      Home.getHomeProduct({ ...parames, type: "recommend" }).then((res) => {
        this.recommendData = res.data.data.records;
        console.log(this.recommendData);
      });
      //---------- 秒杀
      Home.getHomeProduct({ ...parames, pageSize: 2, type: "seckill" }).then(
        (res) => {
          this.stopTime = res.data.data.records[0].stopTime;
          this.seckillData = res.data.data.records.map((item) => {
            return {
              ...item,
              ratio: (Number(item.stock) / Number(item.sum)) * 100,
            };
          });
        }
      );
      // -------精选
      Home.getHomeProduct({
        ...parames,
        product: {
          parentId: "0",
        },
        pageSize: 2,
        type: "best",
      }).then((res) => {
        this.bestData = res.data.data.records;
      });
    },
    // 轮播图
    swiperClick(type, id) {
      console.log(type, id);
      // type 0为农场，1为地块，2为商品
      switch (type) {
        case "0":
          uni.navigateTo({
            url: `/home/hacienda?id=${id}`,
          });
          break;
        case "1":
          console.log("地块");
          uni.navigateTo({
            url: `/hacienda/details?id=${id}`,
          });
          break;
        case "2":
          console.log("商品");
          uni.navigateTo({
            url: `/market/details?id=${id}`,
          });
          break;
        default:
          break;
      }
    },
    // 跳转商品详情
    shopDetails(id) {
      uni.navigateTo({
        url: `/market/details?id=${id}`,
      });
    },
    haciendaDetails(id) {
      uni.navigateTo({
        url: `/hacienda/details?id=${id}`,
      });
    },
    // 更多
    onMore(val) {
      switch (val) {
        case "推荐产品":
          this.$emit("FooterOnClick", 3);
          break;
        case "限时秒杀地块":
          this.$emit("FooterOnClick", 1);
          break;
        case "精选项目":
          this.$emit("FooterOnClick", 1);
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style long="less" scoped>
.home_content,
.swiper-box {
  width: 100vw;
}
/* 推荐商品模块 */
.recommend_lists {
  flex-direction: row;
  padding: 0rpx 25rpx;
}
.recommend_list {
  margin: 0rpx 7rpx;
  width: 320rpx;
}
.recommend_image {
  width: 320rpx;
  height: 197rpx;
  border-radius: 10rpx;
  margin-bottom: 6rpx;
}
.product_name {
  font-size: 16rpx;
  margin: 7rpx 0rpx;
}
.description {
  color: #a6a6a6;
  font-size: 16rpx;
  margin: 7rpx 0rpx;
  width: 100%;
  overflow: hidden;
  word-break: break-all; /* break-all(允许在单词内换行。) */
  text-overflow: ellipsis; /* 超出部分省略号 */
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 1; /** 显示的行数 **/
}
/* 秒杀模块 */
.seckil_lists {
  padding: 0rpx 25rpx;
}
.seckil_list {
  margin-bottom: 45rpx;
}
.seckil_image {
  width: 100%;
  height: 281rpx;
  border-radius: 10rpx;
}
.seckil_name {
  font-size: 25rpx;
  margin: 12rpx 0rpx;
}
.seckil_stock {
  flex-direction: row;
  align-items: center;
  font-size: 20rpx;
  margin-bottom: 16rpx;
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
.seckil_info {
  flex-direction: row;
  justify-content: space-between;
}
.seckil_info_left,
.seckil_info_right {
  flex-direction: row;
  align-items: center;
}
.ctiy {
  margin: 0rpx 17rpx;
  color: #c2c2c2;
  font-size: 18rpx;
}
.address {
  color: #c2c2c2;
  font-size: 18rpx;
}
.state {
  width: 88rpx;
  height: 34rpx;
  font-size: 18rpx;
  border: 1px solid #49ba89;
  border-radius: 17rpx;
  text-align: center;
  align-items: center;
  color: #49ba89;
  margin: 0px 23rpx;
}
.price {
  flex-direction: row;
  align-items: center;
}
.rmb {
  font-size: 23rpx;
  color: #ff0000;
}
.price_text {
  font-size: 35rpx;
  color: #ff0000;
}
.unit {
  font-size: 20rpx;
  color: #c2c2c2;
}
</style>
