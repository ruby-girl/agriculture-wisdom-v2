import http from '@/utils/request.js'
// 首页api
const Home = {
  // 获取轮播图
  getBroadcast: () => {
    return http.request({
      url: 'marketing/api/shuffling/findAll',
      method: 'post'
    })
  },
  // 获取首页商品
  getHomeProduct: (data) => {
    return http.request({
      url: 'marketing/api/product/type',
      method: 'post',
      data
    })
  },
}

export default Home