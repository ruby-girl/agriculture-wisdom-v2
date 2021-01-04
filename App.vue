<script>
export default {
  onLaunch: function (option) {
    // console.log("App Launch");
    // uni.getSystemInfo({
    //   success: function (e) {
    //     console.log("设备信息", e);
    //     console.log("设备状态栏高度", e.statusBarHeight);
    //     uni.setStorage({
    //       key: "customBar",
    //       data: e.statusBarHeight,
    //     });
    //   },
    // });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="less">
* {
  font-family: wesome;
}
@import "./static/fontFamily/fontAwesome.wxss";
/*每个页面公共css */
div {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 24rpx;
  color: #3F3F40;
}
.one_text{
    overflow: hidden;
  word-break: break-all; /* break-all(允许在单词内换行。) */
  text-overflow: ellipsis; /* 超出部分省略号 */
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 1; /** 显示的行数 **/
}
/* 解决小程序和app滚动条的问题 */ /* #ifdef MP-WEIXIN || APP-PLUS */ 
::-webkit-scrollbar{ display: none; }
/* #endif */ /* 解决H5 的问题 *//* #ifdef H5 */ 
uni-scroll-view .uni-scroll-view::-webkit-scrollbar { 
  /* 隐藏滚动条，但依旧具备可以滚动的功能 */ 
  display: none 
  } 
  /* #endif */
</style>
