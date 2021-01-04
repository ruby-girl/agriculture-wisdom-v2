// 农场
import http from '@/utils/request.js'
const Hacienda = {
  // 获取农场信息
  getHacienda: (data) => {
    return http.request({
      url: 'tracing/api/farm/getOne',
      method: 'post',
      data
    })
  },
}

export default Hacienda