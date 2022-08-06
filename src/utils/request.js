// 封装我们的请求工具类
import axios from 'axios'

const server = axios.create({
    // 后台使用mock模拟数据，同时起的服务协议域名端口号是http、本地主机和9000(后面mock起服务自己设置的)，当然也可以在反向代理哪里配置就不用在这里配置了
    // baseURL: 'http://localhost:9000',
    timeout: 5000 // 超时
})
// 请求拦截  放token
server.interceptors.request.use(config => {
    return config
})
// 响应拦截  错误处理  异步登陆 放一些通用的请求配置
server.interceptors.response.use(res => {
    return res.data
})
export default server