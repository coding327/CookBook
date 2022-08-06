import request from '../utils/request'

// 分类请求接口
export const getCategoryApi = params => request({ url: 'api/category', method: 'get', params })


