// 地块
import http from '@/utils/request.js'
const Hacienda = {
  // 获取项目列表
  getSoilList: (data) => {
    return http.request({
      url: 'marketing/api/product/findAll',
      method: 'post',
      data
    })
  },
  // 获取农场信息
  getHacienda: (data) => {
    return http.request({
      url: 'tracing/api/farm/getOne',
      method: 'post',
      data
    })
  },
  
  
  // 获取直播地址
  getLivePath: (data) => {
    return http.request({
      url: 'tracing/api/device/getLivePath',
      method: 'post',
      data
    })
  },
  // 获取新农人说
  getCommentList: (data) => {
    return http.request({
      url: 'tracing/api/circle/orderTime',
      method: 'post',
      data
    })
  },
}

export default Hacienda