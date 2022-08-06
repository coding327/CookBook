const { override, addDecoratorsLegacy, disableEsLint, addWebpackAlias } = require("customize-cra")
const path = require("path")
// 配置项 覆盖webpack某些配置
module.exports = override( // 注意这里面放的是参数，逗号隔开
    disableEsLint(), // 在webpack中禁用eslint
    addDecoratorsLegacy(), // 开启装饰器
    addWebpackAlias({ // 路径别名配置
        "@": path.resolve(__dirname, "src"),
        "@s": path.resolve(__dirname, "src/assets"), // 静态资源目录映射
        "@a": path.resolve(__dirname, "src/api"), // 接口目录映射
        "@c": path.resolve(__dirname, "./src/components") // 公共组件目录映射
    })
)
// ********修改该项目配置文件，项目必须得重启，否则不生效**********