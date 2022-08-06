1. app基础知识
   webapp 不算真正的app，属于混合开发中的h5页面部分。
   混合开发是当前主流app开发技术，h5+ios  前端比较流行，需求量大，ios
2.技术栈
   nodejs平台
   react全家桶  17.0.2   18.2.0
   redux react-redux react-thunk
   react-router-dom v5
   styled-components   css-in-js技术
   Ant Design Mobile  5.19.0 新版本
   immutable redux-immutable  不可变值的依赖包
   axios  请求
3. 项目初始化
    create-react-app myreact 创建项目
    清理项目目录
    装包
4. meta
  默认的视口的配置
  `<meta name="viewport" content="width=device-width, initial-scale=1" />`
  　通过meta标签进行设置，name属性指定viewport值，content属性进行视口配置
　　`<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />`
　　取值：
　　　　width 　　　　            设置layout viewport宽度的特定值，device-width表示设备宽。
　　　　height 　　　　　　        设置layout viewport高度特定值，一般不进行设置。
　　　　initial-scale 　　　　 　　设置页面的初始缩放
　　　　minimum-scale 　　　　　　 设置页面的最小缩放
　　　　maximum-scale 　　　　 　　设置页面的最大缩放
　　　　user-scalable 　　　　 　　设置页面能否进行缩放
5. 适配
  淘宝提供插件适配
  网易
  rem 相对单位来做移动端的视频 跟标签中设置font-size 所有的子标签就可以参照他进行缩放比例
      例如： html{ font-size:100px}     200px--- 2rem   14px--.14rem   30px--.3rem
  设计稿一般750px  我们是需要根据dpr，dpr是设备像素比，苹果6来参考，dpr=2  设计稿是750 所以我们实际宽度是375.    苹果9以下包含苹果9都是dpr=2  其他都是dpr=3
  bug问题：
      比如：dpr = 2  我们书写1px 他的实际是多少宽度？ 2px  引申的经典面试题，移动端1px问题咋解决？？？
           dpr = 3  书写1px 实际的宽度 3px 解决：缩放他的dpr的倍数就可以了。
6. antd 按需引入
    安装 npm install --save antd-mobile
    在package.json中添加如下代码
     "babel":{
        "plugins": [
        [
            "import",
            {
            "libraryName": "antd-mobile",
            "style": "css"
            }
        ]
        ]
    },
    使用