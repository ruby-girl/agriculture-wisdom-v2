
import http from '@/utils/request.js'
// 集市api
const Home = {
  // 获取商品分类列表
  getSortList: (data) => {
    return http.request({
      url: 'marketing/api/category/findAll',
      method: 'post',
      data
    })
  },
  // 获取所有商品列表
  getAllGoods: (data) => {
    return http.request({
      url: 'marketing/api/product/findAll',
      method: 'post',
      data
    })
  },
  // 获取分类商品列表
  getSortGoods: (data) => {
    return http.request({
      url: 'marketing/api/product/findCategory',
      method: 'post',
      data
    })
  },
  // 获取商品详情
  getGoodsDetail: (data) => {
    return http.request({
      url: 'marketing/api/product/findId',
      method: 'post',
      data
    })
  },
}

export default Home