// 首页请求,引入工具类中的请求服务
import request from '../utils/request'

// 获取热门分类请求接口
export const getHomeData = params => request({ url: 'api/hotcat', method: 'get', params })

// 获取精品好菜请求接口，url和method要与后台数据接口对应
export const getGoodFood = params => request({ url: 'api/list', method: 'get', params })






