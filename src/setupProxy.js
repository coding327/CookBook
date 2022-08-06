const { createProxyMiddleware: proxy } = require("http-proxy-middleware")
module.exports = app => {
    app.use(
        "/api", // 接口别名
        proxy({
            target: "http://localhost:9000", // 被代理的域名地址
            changeOrigin: true, // 开启反向代理
            pathRewrite: { // 重定向
                "^/api": ""
            }
        })
    )
}