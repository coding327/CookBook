[toc]
## 移动端基础知识

1. app基础知识
   webapp 不算真正的app，属于混合开发中的h5页面部分。
   混合开发是当前主流app开发技术，h5+ios  前端比较流行，需求量大，ios
2. 技术栈
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
    在package.json中添加如下代码：
    ```json
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
    ```
    使用

## 项目初始化

1. 在本机磁盘中指定位置创建一下react项目，命令如下
`create-react-app cookbook`

2. 清理创建好的项目中不需要的文件及文件夹
- 删除public目录下的部分内容
  - 文件：只保留favicon.ico图标和index.html文件
  - 进入public/index.html文件，**清除**如下代码即可

```html
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<!--
    manifest.json provides metadata used when your web app is installed on a
    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
-->
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```
- 删除src目录下的部分内容
  - 文件：只保留App.js和index.js文件
  - 进入src/index.js文件，**替换**为如下代码
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)
```
  - 进入src/App.js文件，可以使用rcc快捷键重新生成代码（vscode），或者复制粘贴如下代码
```javascript
import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}

export default App
```

3. 进入项目目录安装常规要使用的三方包，命令如下

> 安装装饰器和反向代理所需的模块
`npm i -D customize-cra react-app-rewired http-proxy-middleware`

> 安装react全家桶CSS-in-JS技术、路由、动画、不可变值依赖包、axios请求所需的模块
`npm i -S redux react-redux redux-thunk styled-components react-router-dom@5.3.0 react-transition-group immutable redux-immutable axios`

4. 配置装饰器支持

> 修改package.json文件中scripts命令

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

> 在当前项目根目录下面创建一个名称为config-overrides.js文件，对webpack进行配置，此文件可以理解为就是webpack.config.js的扩展文件

```javascript
// 在当前项目根目录下面创建一个名称为config-overrides.js文件，对webpack进行配置
// react 配置文件
const path = require("path")
const {override,addDecoratorsLegacy,disableEsLint,addWebpackAlias} = require("customize-cra")
// 配置项 覆盖webpack某些配置
module.exports = override(
    disableEsLint(), // 在webpack中禁用eslint
    addDecoratorsLegacy(), // 开启装饰器
    addWebpackAlias({ // 路径别名配置
        ["@"]: path.resolve(__dirname, "./src"),
    })
)
```

> 我们还需要解决对装饰器的实验支持功能在将来版本可能更改所出现的一个警告问题
==bug:==
对装饰器的实验支持功能在将来的版本中可能更改。在 "tsconfig" 或 "jsconfig" 中设置 "experimentalDecorators" 选项以删除此警告。ts(1219)(https://www.cnblogs.com/Annely/p/14613567.html)
**注意：@babel/plugin-proposal-decorators装饰器安装有坑**

链接：https://www.jianshu.com/p/7c62029d44f9

 - 安装插件：`npm i -D @babel/plugin-proposal-decorators`
 - 项目根目录下新建babel.config.js   // 特殊的改成  .babelrc.js
```javascript
module.exports = {
    presets: [
		["@babel/preset-env"], // ES语法转换
	],
    plugins: [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }]
    ]
}
```
 - `vscode`的设置里搜索 `Experimental Decorators`如下图打上勾

![img](https://upload-images.jianshu.io/upload_images/7204732-18360b946e687c32.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)


5. 配置反向代理

> 在src目录下创建一个名称为setupProxy.js文件，提前为后续接口设置反向代理

```javascript
// 在src目录下创建一个名称为setupProxy.js文件，提前为后续接口设置反向代理
const { createProxyMiddleware: proxy } = require("http-proxy-middleware");
module.exports = app => {
    app.use(
        "/api", // 接口别名，请求url，如api/coding/aa，这个api就会替换为target代理域名
        proxy({
            target: "http://localhost:9000", // 被代理的域名地址【使用的是本地mock的接口，使用这个地址】
            changeOrigin: true, // 开启反向代理
            pathRewrite:{ // 重定向
                "^/api": ""
            }
        })
    )
}
```

## 样式初始化

1. 在src目录下创建一个assets文件夹(用来存放静态资源文件)->创建reset.css文件

2. 网上百度拷贝一份拿来用即可，代码如下【注意把`font-size: 12px;`替换为`font-size: 100px;`为移动端做准备】：

```css
@charset "utf-8";
html{background-color:#fff;color:#000;font-size:100px;}
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}
body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}
h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}
address,cite,dfn,em,i,optgroup,var{font-style:normal}
table{border-collapse:collapse;border-spacing:0;text-align:left}
caption,th{text-align:inherit}
ul,ol,menu{list-style:none}
fieldset,img{border:0}
img,object,input,textarea,button,select{vertical-align:middle}
article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
blockquote:before,blockquote:after,q:before,q:after{content:"\0020"}
textarea{overflow:auto;resize:vertical}
input,textarea,button,select,a{outline:0 none;border: none;}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
mark{background-color:transparent}
a,ins,s,u,del{text-decoration:none}
sup,sub{vertical-align:baseline}
html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
body {font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
hr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}
a {color: #25a4bb;text-decoration: none;}
```

3. 重置样式，在App.js根组件中引入，或者在index.js入口文件中引入

## 使用antd-mobile组件库开发

> Ant Design简介：

在线文档：https://mobile.ant.design/zh

旧版本2.3版本 https://antd-mobile-v2.surge.sh/index-cn

其他版本:
> https://pro.antdv.com/components/description-list   [AntDesign pro]
> https://www.antdv.com/components/checkbox-cn    [Ant Design Vue]
> https://ant.design/index-cn   [Ant Design]

antd-mobile是Ant Design的移动规范的 React实现，服务于蚂蚁金服及口碑无线业务。它支持多平台，组件丰富、能全面覆盖各类场景，UI 样式高度可配置，拓展性更强，轻松适应各类产品风格。

1. 开箱使用，在使用前需要先对包进行安装

安装antd-mobile包
npm i -S antd-mobile
安装按需引入的包【注意bug：解决antd按需加载bug】
npm i -D babel-plugin-import

1. 按需加载组件代码和样式需要babel插件里进行配置
> 由于Ant Design分为V2和V5版本

Ant Design V2版本去config-overrides.js进行配置

```javascript
//  config-overrides.js 用于修改默认配置
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   })
)
```
Ant Design V5版本去package.json进行配置

```json
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
```

3. 测试是否配置成功

> 从`antd-mobile`中引入一个按钮组件

```jsx
import React, { Component } from 'react'
// 引入`antd-mobile`的按钮组件
import { Button } from "antd-mobile"

class App extends Component {
    render() {
        return (
            <>
                <Button type="primary">我是一个常规按钮</Button>
            </>
        )
    }
}

export default App
```
如果没有问题就清除了，进行下一步

## 配置路由

1. 配置路由模式，到index.js入口文件中配置，包裹根组件

```javascript
// 配置路由模式
import {HashRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)
```

2. 在项目根目录下创建一个pages文件夹，在pages创建文件夹，一个一级路由对应一个文件夹一个页面【有tab-bar的作为二级路由】

pages下创建三个cookbook、detail、list文件夹，再在每个文件夹里创建组件同时它们也作为一级路由，里面可以书写组件名，方便测试
二级路由也是每一个对应一个文件夹，cookbook文件夹下创建三个文件夹home、category、more，创建组件，里面可以书写组件名，方便测试

回到App.js根组件，开始配置一级路由和二级路由

- 引入一级路由所需组件和路由所需标签[可以进行测试一下]
```jsx
// 一级路由所需路由标签
import { Switch, Route, Redirect } from 'react-router-dom'
// 三个一级路由组件
import CookBook from './pages/cookbook/CookBook'
import Detail from './pages/detail/Detail'
import List from './pages/list/List'
```

> 完整代码如下：
```jsx
import React, { Component } from 'react'
// 一级路由所需路由标签
import { Switch, Route, Redirect } from 'react-router-dom'
// 三个一级路由组件
import CookBook from './pages/cookbook/CookBook'
import Detail from './pages/detail/Detail'
import List from './pages/list/List'

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* 有tab-bar的一级路由 */}
                    <Route path="/cookbook" component={CookBook}></Route>
                    {/* 没有tab-bar的一级路由 */}
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/list" component={List}></Route>
                    {/* 重定向 */}
                    <Redirect from='/' exact to="/cookbook/home"></Redirect>
                </Switch>
            </>
        )
    }
}

export default App
```

- 二级路由引入到CookBook.jsx一级路由中，同时引入二级路由所需路由标签

> 完整代码如下：

```jsx
import React, { Component } from 'react'
// 引入二级路由所需路由标签
import {Switch, Route} from 'react-router-dom'
// 引入二级路由组件
import Home from './home/Home'
import Category from './category/Category'
import More from './more/More'

class CookBook extends Component {
    render() {
        return (
            <div>
                {/* 二级路由 */}
                <Switch>
                    <Route path="/cookbook/home" component={Home}></Route>
                    <Route path="/cookbook/category" component={Category}></Route>
                    <Route path="/cookbook/more" component={More}></Route>
                </Switch>
            </div>
        )
    }
}

export default CookBook
```
### tab-bar底部导航实现【底部导航栏写在一级路由上，通过点击跳转到二级路由】

在ant design找到tab-bar，复制拿过来使用
```jsx
<TabBar>
    {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
    ))}
</TabBar>
```

## 开始书写首页

1. 拆分组件，划分布局[Home.jsx为父组件，在划分子组件，home文件夹下创建components文件夹，在里面放子组件]

2. 引入使用即可，修改为类组件使用，并配置跳转

3. bug修复：刷新页面时候，下面的tab-bar显示不正确，通过路由更新activeKey

代码如下
```jsx
import React, { Component } from 'react'
// 引入二级路由所需路由标签
import { Switch, Route } from 'react-router-dom'
// 引入二级路由组件
import Home from './home/Home'
import Category from './category/Category'
import More from './more/More'
// 引入ant design的底部导航栏
import { TabBar } from 'antd-mobile'
// 引入tab-bar图标组件
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline
} from 'antd-mobile-icons'

class CookBook extends Component {
    state = {
        activeKey: 'home'
    }
    setActiveKey = (val) => {
        // 默认有个val就是你所点击对应的key，更新活跃的key
        this.setState({ activeKey: val })
        // 触发跳转
        this.props.history.push('/cookbook/' + val)
    }
        // 刷新页面时候，下面的tab-bar显示不正确，通过路由更新activeKey
    componentDidMount() {
        // 挂载后
        switch (this.props.history.location.pathname) {
            case '/cookbook/category':
                this.setState({ activeKey: 'category' })
                break
            case '/cookbook/more':
                this.setState({ activeKey: 'more' })
                break
            default:
                this.setState({ activeKey: 'home' })
        }
    }
    render() {
        const tabs = [
            {
                key: 'home',
                title: '首页',
                icon: <AppOutline />
            },
            {
                key: 'category',
                title: '分类',
                icon: <UnorderedListOutline />
            },
            {
                key: 'more',
                title: '更多',
                icon: active => active ? <MessageFill /> : <MessageOutline />
            }
        ]
        return (
            <div>
                {/* 二级路由 */}
                <Switch>
                    <Route path="/cookbook/home" component={Home}></Route>
                    <Route path="/cookbook/category" component={Category}></Route>
                    <Route path="/cookbook/more" component={More}></Route>
                </Switch>
                {/* tab-bar底部导航栏 */}
                <TabBar activeKey={this.state.activeKey} onChange={this.setActiveKey}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        )
    }
}

export default CookBook
```

1. 配置一下App.css（在项目根目录创建），项目全局样式，body元素没有高度，设置100%

```css
/* 项目的全局样式写在这里 */
body,#root{
    height: 100%;
}
```

引入到App.js根组件中，作为全局样式


4. 使用样式组件，来书写css调整tab-bar位置[CSS-in-JS，在cookbook文件夹下创建StyledCook.js文件注意是js文件，来写css样式]

```js
// 引入styled
import styled from 'styled-components'

// 整个CookBook高度
export const StyledCook = styled.div`
    height: 100%;
`

// 导航栏上方高度
export const StyledTab = styled.div`
    height: calc(100% - 50px);
`

// tab-bar定位到最下方
export const TabbarStyled = styled.div`
  position: fixed;
  bottom: 0;
  left:0;
  z-index: 999;
  background-color:#fff ;
  width:100% ;
`
```

注意在CookBook.jsx引入样式组件，当成标签替换对应标签使用即可
`import { StyledCook, StyledTab, TabbarStyled } from './StyledCook'`

完整CookBook组件代码如下：
```jsx
import React, { Component } from 'react'
// 引入二级路由所需路由标签
import { Switch, Route } from 'react-router-dom'
// 引入二级路由组件
import Home from './home/Home'
import Category from './category/Category'
import More from './more/More'
// 引入ant design的底部导航栏
import { TabBar } from 'antd-mobile'
// 引入tab-bar图标组件
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline
} from 'antd-mobile-icons'
// 引入样式
import { StyledCook, StyledTab, TabbarStyled } from './StyledCook'

class CookBook extends Component {
    state = {
        activeKey: 'home'
    }
    setActiveKey = (val) => {
        // 默认有个val就是你所点击对应的key，更新活跃的key
        this.setState({ activeKey: val })
        // 触发跳转
        this.props.history.push('/cookbook/' + val)
    }
        // 刷新页面时候，下面的tab-bar显示不正确，通过路由更新activeKey
    componentDidMount() {
        // 挂载后
        switch (this.props.history.location.pathname) {
            case '/cookbook/category':
                this.setState({ activeKey: 'category' })
                break
            case '/cookbook/more':
                this.setState({ activeKey: 'more' })
                break
            default:
                this.setState({ activeKey: 'home' })
        }
    }
    render() {
        const tabs = [
            {
                key: 'home',
                title: '首页',
                icon: <AppOutline />
            },
            {
                key: 'category',
                title: '分类',
                icon: <UnorderedListOutline />
            },
            {
                key: 'more',
                title: '更多',
                icon: active => active ? <MessageFill /> : <MessageOutline />
            }
        ]
        return (
            <StyledCook>
                {/* 二级路由 */}
                <StyledTab>
                    <Switch>
                        <Route path="/cookbook/home" component={Home}></Route>
                        <Route path="/cookbook/category" component={Category}></Route>
                        <Route path="/cookbook/more" component={More}></Route>
                    </Switch>
                </StyledTab>
                {/* tab-bar底部导航栏 */}
                <TabbarStyled>
                    <TabBar activeKey={this.state.activeKey} onChange={this.setActiveKey}>
                        {tabs.map(item => (
                            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                        ))}
                    </TabBar>
                </TabbarStyled>
            </StyledCook>
        )
    }
}

export default CookBook
```

5. 开始书写home页样式，在home文件夹下创建一个StyledHome.js样式文件，用来写它和它子组件的样式

引入到Header.jsx使用即可

完整样式代码如下：
```js
// 引入styled，书写home样式
import styled from "styled-components"

// 头部
export const MyHeader = styled.div`
    height: 1.2rem;
    width:100%;
    background-color:#FF6B01 ;
    font-size: .4rem;
    color: #fff;
    text-align: center;
    line-height: 1.2rem;
`
```

6. 轮播图组件书写

在Swiper.jsx走马灯组件中书写该组件，到ant design取走马灯拿过来使用

```jsx
import React, { Component } from 'react'
// 引入Swiper轮播组件
import {Swiper} from 'antd-mobile'
// import swiper1 from '../../../../assets/img/swiper-1.png'
// import swiper2 from '../../../../assets/img/swiper-2.jpeg'
// import swiper3 from '../../../../assets/img/swiper-3.jpeg'
// 配置了目录映射
import swiper1 from '@s/img/swiper-1.png'
import swiper2 from '@s/img/swiper-2.jpeg'
import swiper3 from '@s/img/swiper-3.jpeg'

class MySwiper extends Component {
    render() {
        return (
            <div>
                {/* 开启自动播放和循环 */}
                <Swiper autoplay loop>
                    <Swiper.Item>
                        <img src={swiper1} alt="" />
                    </Swiper.Item>
                    <Swiper.Item>
                        <img src={swiper2} alt="" />
                    </Swiper.Item>
                    <Swiper.Item>
                        <img src={swiper3} alt="" />
                    </Swiper.Item>
                </Swiper>
            </div>
        )
    }
}

export default MySwiper
```

> 如何配置目录映射，需要去`config-overrides.js`

代码如下：
```jsx
const { override, addDecoratorsLegacy, disableEsLint, addWebpackAlias } = require("customize-cra")
const path = require("path")
// 配置项 覆盖webpack某些配置
module.exports = override( // 注意这里面放的是参数，逗号隔开
    disableEsLint(), // 在webpack中禁用eslint
    addDecoratorsLegacy(), // 开启装饰器
    addWebpackAlias({ // 路径别名配置
        "@": path.resolve(__dirname, "src"),
        "@s": path.resolve(__dirname, "src/assets"), // 静态资源目录映射
    })
)
```

> 开始调整样式，回到StyledHome.js文件，书写轮播图样式

代码如下：
```javascript
// Swiper轮播图样式
export const SwiperStyle = styled.div`
    img{
        width: 100%;
        height: 4.5rem;
    }
`
```

7. 首页搜索组件

> 进入Search.jsx组件书写代码

- 使用ant design的图片Image引入、引入搜索图片

- 书写样式

样式代码：
```javascript
// 搜索组件的样式
export const SearchStyle = styled.div`
    height: 1.6rem;
    width: 100%;
    background-color: #f3f4f4;
    padding: 0.3rem;
    box-sizing: border-box;
    color: #999;
    .search-box {
        border: 1px solid #ff6b01; // 移动端小于3px一般直接使用px单位
        height: 100%;
        border-radius: 0.2rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .searchImg {
            margin-right: .2rem;
        }
    }
`
```

首页搜索组件代码
```jsx
import React, { Component } from 'react'
// 引入Image组件
import {Image} from 'antd-mobile'
// 引入搜索图片
import searchImg from '@s/img/search.png'
// 引入样式
import {SearchStyle} from '../StyledHome'

class Search extends Component {
    render() {
        return (
           <SearchStyle>
                <div className='search-box'>
                    <Image className='searchImg' src={searchImg} width={20} height={20}></Image>
                    <span>想吃什么搜这里，如川菜</span>
                </div>
           </SearchStyle>
        )
    }
}

export default Search
```

8. 首页分类组件【需要做发请求获取数据做首屏展示】

> 由于分类需要发送请求也需要一定后端，先从前端发请求开始配置

- 首先在src目录下创建一个utils文件夹，用来放工具类，在它里面创建一个请求工具类【请求服务】

代码如下：
```javascript
// 封装我们的请求工具类
import axios from 'axios'

const server = axios.create({
    // 后台使用mock模拟数据，同时起的服务协议域名端口号是http、本地主机和9000(后面mock起服务自己设置更改的)，当然也可以在反向代理哪里配置就不用在这里配置了
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
```

- 在src目录下创建一个api文件夹，用来统一管理接口、发送请求，在它里面创建homeApi.js文件[按照每一个页面级组件对应创建一个放请求.js文件，方便管理，home页面请求接口都写在这个文件里面]

代码如下：

```javascript
// 首页请求,引入工具类中的请求服务
import request from '../utils/request'
// 获取热门分类请求接口，注意get方式是params
// export function getHomeData(params) {
//     return request({
//         url: '/api/hotcat',
//         method: 'get',
//         params
//     })
// }

// 上面代码简写，url和method要与后台数据接口对应
// 获取热门分类请求接口
export const getHomeData = params => request({url: 'api/hotcat', method: 'get', params})
```

做一下目录映射，我们可以再回到config-overrides.js文件中进行一下配置
代码如下：
```javascript
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
    })
)
```

> 数据我们一般都会放到父组件或者页面组件、容器组件中，方便操作，所以这里我们在父组件（页面组件）中发送请求，来获取数据**【专业名词：首屏请求】**

- 引入请求接口
- 挂载后发送请求，直接调用接口（接口就是个函数是axios二次封装，而axios是promise封装ajax，这个函数返回一个promise对象，.then书写逻辑）

```jsx
// 引入请求接口
import { getHomeData } from '@a/homeApi.js'

// 挂载后，发送首屏请求
componentDidMount() {
    getHomeData().then(res => {
        console.log(res)
    })
}
```

> 后端接口配置，使用mock起服务，模拟数据

src目录下创建mock文件夹【已提供mock拿过来使用，请求json文件，将json转为接口使用】

> 安装插件，起后台服务
`npm i -g json-server`

> 在package.json包管理文件中配置一条新命令【在scripts对象里面接着写命令】，用来运行后台服务

-r是routes简写指定自定义路由，先请求mock.js，指定自定义路由，里面自定义路由接口名要与前端请求接口对应，值与mock.js键名对应（多个/），也可以不配置，-p是port简写，配置端口号，-w是watch简写，开启监听
`"mock": "json-server ./src/mock/mock.js -r ./src/mock/route.json -p 9000 -w"`

> 运行后台命令，再开一个终端，运行如下命令，就能启动后台服务
`npm run mock`

> 测试home组件中数据是否请求成功，成功之后前后端打通了，渲染数据

数据保存到父组件中，将数据传递给子组件渲染

部分代码如下：
```jsx
// 创建响应式数据
state = {
    hotCategoryArr: [] // 热门分类
}
// 挂载后，发送首屏请求
componentDidMount() {
    getHomeData().then(res => {
        if (res.code === 200) {
            // 更新响应式数据
            this.setState({ hotCategoryArr: res.data})
        }
    })
}

{/* 热门分类 */}
<HotCat hotCategoryArr={this.state.hotCategoryArr}/>
```

> 子组件获取数据

==get一个知识点：函数组件的函数体就等价于类组件中的render的函数体==

- 先到render中打印一下数据，判断是否拿到【父组件数据更新，子组件无条件更新】
- 渲染数据
```jsx
class HotCat extends Component {
    render() {
        // render就是个自执行函数，里面可以写js代码，打印数据不建议写return里面，放return上面
        console.log(this.props.hotCategoryArr) // 成功打印数据
        return (
            <div>
                <h3>热门分类</h3>
                <ul>
                    {this.props.hotCategoryArr.map(item => {
                        return <li key={item.title}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}
```

- 书写样式

热门分类样式代码如下：
```js
// 热门分类样式
export const HotCateStyle = styled.div`
  background-color: #fff;
  margin: 0 .3rem;
  box-sizing: border-box;
    h3{
      height: .6rem;
      line-height: .6rem ;
      padding-left:.1rem;
      font-size: .32rem;
      color:#999;
    }
    ul{
      display:flex ;
      flex-wrap: wrap;
      border-right: 1px solid #999;
      border-bottom: 1px solid #999;
      box-sizing: border-box;
      li{
        border-top: 1px solid #999;
        border-left:1px solid #999 ;
        box-sizing: border-box;
        width:25%;
        height: 1rem;  //375
        text-align: center;
        line-height: 1rem;
      }
    }
`
```

- 引入样式组件，把div替换掉
```jsx
// 引入样式组件
import { HotCateStyle } from '../StyledHome'
```

9. 精品好菜组件

- 配置Api，到api文件里的homeApi.js文件中进行配置
```js
// 获取精品好菜请求接口，url和method要与后台数据接口对应
export const getGoodFood = params => request({ url: 'api/list', method: 'get', params })
```

- 父组件中引入请求接口，调用接口，测试前后端是否打通，打通创建精品好菜响应式数据，并更新数据，传递给子组件

完整代码如下：
```jsx
import React, { Component } from 'react'
// 引入子组件
import Header from './components/Header'
import Swiper from './components/Swiper'
import Search from './components/Search'
import HotCat from './components/HotCat'
import Good from './components/Good'
// 引入请求接口
import { getHomeData, getGoodFood } from '@a/homeApi.js'

class Home extends Component {
    // 创建响应式数据
    state = {
        hotCategoryArr: [], // 热门分类
        goodFoodArr: [] // 精品好菜
    }
    // 挂载后，发送首屏请求
    componentDidMount() {
        getHomeData().then(res => {
            if (res.code === 200) {
                // console.log('getHomeData', res.data) // 成功打印数据
                // 更新响应式数据
                this.setState({ hotCategoryArr: res.data })
            }
        })
        getGoodFood().then(res => {
            if (res.code === 200) {
                // console.log('getGoodFood', res.data) // 成功打印数据
                // 更新响应式数据
                this.setState({ goodFoodArr: res.data })
            }
        })
    }
    render() {
        return (
            <div>
                {/* 头 */}
                <Header />
                {/* 轮播图 */}
                <Swiper />
                {/* 搜索 */}
                <Search />
                {/* 热门分类 */}
                <HotCat hotCategoryArr={this.state.hotCategoryArr} />
                {/* 精品好菜 */}
                <Good goodFoodArr={this.state.goodFoodArr}/>
            </div>
        )
    }
}

export default Home
```

- 子组件成功接收父组件传递过来的数据，这里学习使用一下函数组件，将类组件转为函数组件，同时引入图片ui组件，渲染

渲染数据完整代码如下
```jsx
// 类组件
// import React, { Component } from 'react'
// // 引入图片组件
// import {Image} from 'antd-mobile'

// class Good extends Component {
//     render() {
//         console.log(this.props.goodFoodArr) // 成功接收数据
//         return (
//             <div>
//                 <h3>精品好菜</h3>
//                 <ul>
//                     {this.props.goodFoodArr.map((item, index) => {
//                         return <li key={index}> // 后台数据原因，先使用index作为key

//                         </li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default Good

// 学习使用函数组件
import React from 'react'
// 引入图片组件
import { Image } from 'antd-mobile'

// 注意函数组件传入props，才能使用props
const Good = (props) => {
    // 函数组件的函数体 就等价于类组件中的render的函数体
    // console.log(this.props.goodFoodArr) // 成功接收数据
    // 后台数据原因，先使用index作为key
    return (
        <div>
            <h3>精品好菜</h3>
            <ul>
                {props.goodFoodArr.map((item, index) => {
                    return <li key={index}>
                        <Image src={item.img} width={170} height={180} fit='fill'></Image>
                        <p>{item.name}</p>
                        <p>{item.all_click}点赞 {item.favorites}收藏</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Good
```

- 书写精品好菜的样式，同样在StyledHome.js文件中写样式

精品好菜样式代码如下
```js
// 精品好菜的样式
export const GoodFoodStyle = styled.div`
   background-color: #F4F4F4;
   h3{
      height: .6rem;
      line-height: .6rem ;
      padding-left:.1rem;
      font-size: .32rem;
      color:#999;
    }
    ul{
      display: flex;
      flex-wrap: wrap ;
      justify-content: space-around;
      li{
        width: 170px;
        .title{
          font-weight: bold;
          font-size: 20px;
          margin: 10px 0px 5px 0px;
          text-align: center;
        }
        .describe{
          font-size: 13px;
          text-align: center;
          color:#999;
          margin-bottom: 10px;
        }
      }
    }
`
```

引入写好的样式组件，替换为对应的标签
```jsx
// 函数组件
import React from 'react'
// 引入图片组件
import { Image } from 'antd-mobile'
// 引入写好的样式组件
import { GoodFoodStyle } from '../StyledHome'

// 注意函数组件传入props，才能使用props
const Good = (props) => {
    // 函数组件的函数体 就等价于类组件中的render的函数体
    // console.log(this.props.goodFoodArr) // 成功接收数据
    return (
        <GoodFoodStyle>
            <h3>精品好菜</h3>
            <ul>
                {props.goodFoodArr.map((item, index) => {
                    return <li key={index}>
                        <Image src={item.img} width={170} height={140} fit='fill'></Image>
                        <p className='title'>{item.name}</p>
                        <p className='describe'>{item.all_click}点赞 {item.favorites}收藏</p>
                    </li>
                })}
            </ul>
        </GoodFoodStyle>
    )
}

export default Good
```

## 开始书写分类页

> 划分组件，创建子组件文件夹components，注意是在category文件夹创建与二级路由组件同级，在components下创建子组件

**【这里可以根据需要做一下目录映射公共组件文件夹】**

公共组件目录映射：
```js
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
```

- 与首页搜索组件类似这里可以把搜索组件[携带对应的样式组件]提取成公共组件，在src目录下创建一个components文件夹用来放公共组件，直接将该文件拖到components公共文件夹中，创建SearchStyle.js文件，把样式组件copy过来，最上面记得引入styled样式组件，修改搜索组件中的一些文件路径，回到home.jsx首页组件中，修改搜索组件引入路径

- 在category.jsx分类组件中引入该搜索组件

note: 公共组件在不同地方使用，样式问题，如何设置，可以通过在样式组件中使用变量设置默认值之类方式来解决[不同样式都可以提成变量]
【
注意：【类似父子通信传递值而已】
使用方式：样式组件也是组件，如果直接在搜索组件上（search）设置样式如hasBorder={true}，就需要在样式组件做透传{...this.props}，拿到hasBorder={true}
】

搜索组件样式代码如下：
```js
import styled from 'styled-components'

// 搜索组件的样式
export const SearchStyle = styled.div`
    height: 1.6rem;
    width: 100%;
    /* 参数1 外部盒子背景颜色 */
    /* background-color: #f3f4f4; */
    background-color: ${props => props.bg || '#f3f4f4'}; // 提成变量
    padding: 0.3rem;
    box-sizing: border-box;
    color: #999;
    .search-box {
        /* 参数2 是否有边框 值类型是布尔值 */
        /* border: 1px solid #ff6b01; // 移动端小于3px一般直接使用px单位 */
        border: ${props => props.hasBorder ? '1px solid #ff6b01' : 'none'}; // 提成变量
        height: 100%;
        border-radius: 0.2rem;
        /* 参数3 内部盒子背景颜色 */
        /* background-color: #fff; */
        background-color: ${props => props.innerBg || '#fff'}; // 提成变量
        display: flex;
        justify-content: center;
        align-items: center;
        .searchImg {
            margin-right: .2rem;
        }
    }
`
```
### 在home首页中使用，往搜索组件中传递样式值
```jsx
class Search extends Component {
    // 样式使用变量
    render() {
        return (
            // 这时需要透传，在样式组件标签上解构props
           <SearchStyle {...this.props}>
                <div className='search-box'>
                    <Image className='searchImg' src={searchImg} width={20} height={20}></Image>
                    <span>想吃什么搜这里，如川菜</span>
                </div>
           </SearchStyle>
        )
    }
}
```
搜索组件完整代码对照：
```jsx
import React, { Component } from 'react'
// 引入Image组件
import {Image} from 'antd-mobile'
// 引入搜索图片
import searchImg from '@s/img/search.png'
// 引入样式、引入解决1px之后的搜索边框组件
import {SearchStyle, SearchBorder} from './SearchStyle'

class Search extends Component {
    // 样式使用变量
    render() {
        return (
            // 这时需要透传，在样式组件标签上解构props
           <SearchStyle {...this.props}>
                <div className='search-box'>
                    <Image className='searchImg' src={searchImg} width={20} height={20}></Image>
                    <span>想吃什么搜这里，如川菜</span>
                </div>
           </SearchStyle>
        )
    }
}

export default Search
```

### 在分类组件中使用搜索组件，传递值改变默认样式

找到搜索组件标签，往里面传递样式值，回到category.jsx，传递样式值进去
```jsx
{/* 搜索组件 */}
<Search bg={'#e51414'} innerBg={'#1fd0d0'} />
```

> 书写分类头部组件

- 头部组件代码
```jsx
import React, { useState } from 'react'
// 引入样式组件
import { HeaderStyle } from '../CategoryStyle'

const CategoryHeader = () => {
    const [categorySwitch, setCategorySwitch] = useState(0) // 开关阀，0代表左边分类，1代表右边食材
    return (
        <HeaderStyle>
            <ul>
                <li onClick={() => setCategorySwitch(0)}>分类</li>
                <li onClick={() => setCategorySwitch(1)}>食材</li>
                <div className={categorySwitch ? 'box1 box2' : 'box1'}>{!categorySwitch ? '分类' : '食材'}</div>
            </ul>
        </HeaderStyle>
    )
}

export default CategoryHeader
```
- 样式代码

```js
import styled from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 1.2rem;
    background-color: #FF6B01;
    font-size: .4rem;
    color: #fff;
    text-align: center;
    line-height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        border: 1px solid #fff;
        border-radius: 17px;
        li {
            width: 80px;
        }
        .box1 {
            width: 80px;
            height: 34px;
            background: #fff;
            color: #FF6B01;
            border-radius: 17px;
            border: 1px solid #fff;
            position: absolute;
            left: 0;
            z-index: 99;
            text-align: center;
            line-height: 34px;
        }
        .box2 {
            left: 80px;
        }
    }
`
```

> 书写内容区组件

- 从ui库找到侧边栏，拿过来使用，需要发请求获取数据渲染，页面组件发请求把数据传递过来

```jsx
import React from 'react'
// 引入侧边栏ui组件
import { SideBar } from 'antd-mobile'
// 样式组件
import { CntStyle } from '../CategoryStyle'

const CategoryContent = () => {
    const [activeKey, setActiveKey] = useState('')
    const tabs = [1,2,3]
    return (
        <CntStyle>
            {/* 左边侧边栏，里面的key如果选择item那么活跃的key也要保持一致，自带一个onChange方法里面默认有个参数值为key的值即item , 后台数据原因，先使用index作为key，【注意一一对应，活跃的key和里面的key】 */}
            {/* 【如果key使用id】使用过程中一定要注意id，这个组件里面它是字符串类型,不是数字类型，数据类型一定要保持一致 */}
            <SideBar style={{ '--width': '80px' }} activeKey={activeKey} onChange={setActiveKey}>
                {tabs.map((item, index) => (
                    // key为item
                    <SideBar.Item key={item} title={item} />
                ))}
            </SideBar>
            <div>
                右边内容
            </div>
        </CntStyle>
    )
}

export default CategoryContent
```

- 写请求接口，到Api里创建分类接口js文件，在里面写请求接口

```js
import request from '../utils/request'

// 分类请求接口
export const getCategoryApi = params => request({ url: 'api/category', method: 'get', params })
```

- 引入接口到页面级容器组件，发请求保存数据，传递给子组件

```jsx
import React, { Component } from 'react'
// 引入子组件
import CategoryHeader from './components/CategoryHeader'
import CategoryContent from './components/CategoryContent'
import Search from '@c/Search'
// 引入请求接口
import { getCategoryApi } from '@a/categoryApi'

class Category extends Component {
    state = {
        category: {}, // 分类数据
        material: {}, // 食材数据
    }
    // 挂载后发送请求
    componentDidMount() {
        getCategoryApi().then(res => {
            // console.log(res.data) // 成功拿到数据
            if (res.code === 200) {
                this.setState({ category: res.data.category, material: res.data.material })
            }
        })
    }
    render() {
        return (
            <div>
                {/* 分类头部组件 */}
                <CategoryHeader />
                {/* 搜索组件 */}
                <Search />
                {/* 内容组件 */}
                <CategoryContent category={this.state.category} material={this.state.material} />
            </div>
        )
    }
}

export default Category
```

- 内容区子组件接收数据

- 需要做一个组件联动处理，头部有两个，一个是分类一个是食材，需要传递给父组件，再传递给内容区组件，渲染对应内容，直接传递开关阀得0或1，需要把点击方法抽离出来，不能直接写在行内，渲染数据，补上样式，书写侧边栏点击事件

分类头部组件代码
```jsx
import React, { useState } from 'react'
// 引入样式组件
import { HeaderStyle } from '../CategoryStyle'

const CategoryHeader = (props) => {
    const [categorySwitch, setCategorySwitch] = useState(0) // 开关阀，0代表左边分类，1代表右边食材
    // 点击
    const handleClick = (val) => {
        setCategorySwitch(val)
        props.changeCate(val)
    }
    return (
        <HeaderStyle>
            <ul>
                <li onClick={() => handleClick(0)}>分类</li>
                <li onClick={() => handleClick(1)}>食材</li>
                <div className={categorySwitch ? 'box1 box2' : 'box1'}>{!categorySwitch ? '分类' : '食材'}</div>
            </ul>
        </HeaderStyle>
    )
}

export default CategoryHeader
```

页面组件代码
```jsx
import React, { Component } from 'react'
// 引入子组件
import CategoryHeader from './components/CategoryHeader'
import CategoryContent from './components/CategoryContent'
import Search from '@c/Search'
// 引入请求接口
import { getCategoryApi } from '@a/categoryApi'

class Category extends Component {
    state = {
        category: {}, // 分类数据
        material: {}, // 食材数据
        defaultKey: '热门', // 根据开关，得到是分类还是食材，侧边栏需要一个默认得key,右边根据它渲染数据
        cate: {}, // 根据开关传递分类还是食材数据
    }
    // 挂载后发送请求
    componentDidMount() {
        getCategoryApi().then(res => {
            // console.log(res.data) // 成功拿到数据
            if (res.code === 200) {
                // 发请求这里cate也要给值，不然初始传递过去为空
                this.setState({ category: res.data.category, material: res.data.material, cate: res.data.category })
            }
        })
    }
    // 头部组件点击触发，得到是分类还是食材，传递给子组件[val是传递过来的开关值]
    changeCate = (val) => {
        this.setState({
            defaultKey: !val ? '热门' : '肉类',
            cate: !val ? this.state.category : this.state.material
        })
    }
    render() {
        return (
            <div>
                {/* 分类头部组件 */}
                <CategoryHeader changeCate={this.changeCate}
                {/* 搜索组件 */}
                <Search bg={'#e51414'} innerBg={'#1fd0d0'} />
                {/* 内容组件 */}
                <CategoryContent category={this.state.cate} defaultKey={this.state.defaultKey} />
            </div>
        )
    }
}

export default Category
```

分类内容组件代码如下：
```jsx
import React, { useState, useEffect } from 'react'
// 引入侧边栏ui组件
import { SideBar } from 'antd-mobile'
// 样式组件
import { CntStyle } from '../CategoryStyle'
//【bug，拿不到history，需要一个withRouter高阶组件，函数组件不能使用语法糖，只能包裹，最上面引入这个高阶组件使用】
import { withRouter } from 'react-router-dom'

const CategoryContent = (props) => {
    // setActiveKey更新为活跃的item
    const [activeKey, setActiveKey] = useState('')
    const [tabs, setTabs] = useState([]) // 侧边栏渲染数组
    const [arr, setArr] = useState([]) // 内容区的渲染数组
    // props.defaultKey和props.category初始化的时候可能是没有值，某个变量触发两次，如果没有值就使用useEffect监听
    // console.log(props.category) // 注意拿不到这个数据【会执行两次】
    // console.log(props.defaultKey) // 这个可以拿到了【会执行两次】
    useEffect(() => {
        setActiveKey(props.defaultKey)
        setTabs(Object.keys(props.category)) // 对象得键名就是侧边栏需要渲染的数组
        // defaultKey也就是活跃的那个，找到右边内容区渲染数组
        setArr(props.category[props.defaultKey])
    }, [props.defaultKey, props.category])
    // 左边点击事件，onChange事件{}里写个方法，默认参数值局势点击的那个item
    const leftClick = (val) => {
        console.log(val)
        setActiveKey(val) // 自带的setActiveKey也要写上，更新为活跃item
        setArr(props.category[val]) // 更新右边渲染数据
    }
    // 右边点击事件，路由跳转到列表页并传参，传递关键字作为列表页头部title【bug，拿不到history，需要一个withRouter高阶组件，函数组件不能使用语法糖，只能包裹，最上面引入这个高阶组件使用】
    const rightClick = (keyword) => {
        props.history.push('/list?title=' + keyword) // query传参，刷新不丢失
    }
    return (
        <CntStyle>
            {/* 左边侧边栏，自带一个onChange事件的方法里面默认有个参数，值打印就是item，这里替换为方法，把setActiveKey放到方法里，每次点击还需要更新右边显示的数据即arr */}
            <SideBar style={{ '--width': '80px' }} activeKey={activeKey} onChange={leftClick}>
                {tabs.map((item, index) => (
                    // key为item
                    <SideBar.Item key={item} title={item} />
                ))}
            </SideBar>
            {/* 右侧内容 */}
            <ul className='rightul'>
                {/* arr最好直接使用&&,解决出现undefined情况（依赖两个变量可能一个已经有值一个还没值）无法使用map报错 */}
                { arr && arr.map((item, index) => {
                    return <li onClick={() => rightClick(item)} key={index}>{item}</li>
                })}
            </ul>
        </CntStyle>
    )
}

export default withRouter(CategoryContent)
```

## 解决移动端1px的bug

> 移动端1px问是存在的，你书写1px的时候，由于设备dpr=2的，对这个1px进行缩放。使用媒体查询检测当前设备的dpr的值，然后根绝dpr进行等比例缩放来解决这个1px bug。

> 搜索框这里边框写的是1px，实际2px，需要一个解决1px的高阶组件【也是样式组件，直接拿过来使用即可】

在src目录下创建一个hoc文件夹，新建一个BorderHoc.js文件，代码如下：
```js
// 解决1px问题的高阶组件
import styled from 'styled-components'
// 参数是传递一个样式组件进去，返回新的样式组件
// 利用styled的样式继承的特性给我们的样式组件添加1px解决代码
const border = (WrappedComp) => {
  const EnhancedComp = styled(WrappedComp) `
    // 为边框位置提供定位参考
    position: relative;
    border-radius: ${ ({radius}) => radius || 0 }rem;
    &::after {
      // 用以解决边框layer遮盖内容
      pointer-events: none;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;

      content: "";
      border-color: ${ ({color}) => color || '#ccc' }; //边线的颜色
      border-style: ${ ({style}) => style || 'solid' }; //边线的类型
      border-width: ${ ({width}) => width || '1px' }; //边线的粗细

      @media (max--moz-device-pixel-ratio: 1.49),(-webkit-max-device-pixel-ratio: 1.49),(max-device-pixel-ratio: 1.49),(max-resolution: 143dpi),(max-resolution: 1.49dppx) {
        width: 100%;
        height: 100%;
        transform: scale(1);
        border-radius: ${ ({radius}) => radius * 1 || 0}rem //圆角
      }

      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),(-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),(min-resolution: 144dpi) and (max-resolution: 239dpi),(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
        width: 200%;
        height: 200%;
        transform: scale(.5);
        border-radius: ${ ({radius}) => radius * 2 || 0}rem
      }

      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5),(min-resolution: 240dpi), (min-resolution: 2.5dppx) {
        width: 300%;
        height: 300%;
        transform: scale(.3333333);
        border-radius: ${ ({radius}) => radius * 3 || 0}rem
      }
      transform-origin: 0 0;
    }
  `
  return EnhancedComp
}

export default border
```

> 回到公共组件搜索框样式组件，边框部分样式抽离出来作为一个组件，同时传给高阶组件【引入高阶】

搜索样式组件代码如下：
```js
import styled from 'styled-components'
// 引入解决1px的高阶组件
import border from '../hoc/BorderHoc'

// 搜索组件的样式
export const SearchStyle = styled.div`
    height: 1.6rem;
    width: 100%;
    /* 参数1 外部盒子背景颜色 */
    /* background-color: #f3f4f4; */
    background-color: ${props => props.bg || '#f3f4f4'}; // 提成变量
    padding: 0.3rem;
    box-sizing: border-box;
    color: #999;
    /* .search-box { // 做1px这里需要抽离成组件 */
        /* 参数2 是否有边框 值类型是布尔值 */
        /* border: 1px solid #ff6b01; // 移动端小于3px一般直接使用px单位 */
        /* border: ${props => props.hasBorder ? '1px solid #ff6b01' : 'none'}; // 提成变量 */
        /* height: 100%; */
        /* border-radius: 0.2rem; */
        /* 参数3 内部盒子背景颜色 */
        /* background-color: #fff; */
        /* background-color: ${props => props.innerBg || '#fff'}; // 提成变量 */
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        /* .searchImg { */
            /* margin-right: .2rem; */
        /* } */
    /* } */
`

// 搜索边框抽离出来作为组件，把=演示组件传递进去
export const SearchBorder = border(styled.div`
    /* 参数2 是否有边框 值类型是布尔值 */
    /* border: 1px solid #ff6b01; // 移动端小于3px一般直接使用px单位 */
    border: ${props => props.hasBorder ? '1px solid #ff6b01' : 'none'}; // 提成变量
    height: 100%;
    border-radius: 0.2rem;
    /* 参数3 内部盒子背景颜色 */
    /* background-color: #fff; */
    background-color: ${props => props.innerBg || '#fff'}; // 提成变量
    display: flex;
    justify-content: center;
    align-items: center;
    .searchImg {
        margin-right: .2rem;
    }
`)
```

> 最后回到搜索组件，边框作为了样式组件，需要把原来div包括类名全部替换为边框样式组件标签【透传处理，父转给子，子只是样式组件占位标签还需要再传，解构this.props即透传】

note: 样式组件透传解构props【jsx组件包裹样式组件在jsx组件上传递往样式组件，公共组件常见，常见于公共组件上写样式，传递样式组件标签上，需要解构才能把数据传给样式里面去】
搜索组件完整代码：
```jsx
import React, { Component } from 'react'
// 引入Image组件
import {Image} from 'antd-mobile'
// 引入搜索图片
import searchImg from '@s/img/search.png'
// 引入样式、引入解决1px之后的搜索边框组件
import {SearchStyle, SearchBorder} from './SearchStyle'

class Search extends Component {
    // 样式使用变量
    // render() {
    //     return (
    //         // 这时需要透传，在样式组件标签上解构props
    //        <SearchStyle {...this.props}>
    //             <div className='search-box'>
    //                 <Image className='searchImg' src={searchImg} width={20} height={20}></Image>
    //                 <span>想吃什么搜这里，如川菜</span>
    //             </div>
    //        </SearchStyle>
    //     )
    // }
    // 引入样式边框组件解决了1px的bug
    render() {
        return (
            // 在样式组件标签这里直接解构传递值
           <SearchStyle {...this.props}>
                {/* note: 在边框样式组件标签这里透传 */}
                <SearchBorder {...this.props}>
                    <Image className='searchImg' src={searchImg} width={20} height={20}></Image>
                    <span>想吃什么搜这里，如川菜</span>
                </SearchBorder>
           </SearchStyle>
        )
    }
}

export default Search
```

## 书写列表页

> 拆分组件，大致上如下[这里学习使用函数组件]：
```jsx
import React from 'react'
// 引入子组件
import ListHeader from './components/ListHeader'
import ListContent from './components/ListContent'

function List(props) {
    return (
        <div>
            {/* 列表页头部 */}
            <ListHeader />
            {/* 内容区 */}
            <ListContent />
        </div>
    )
}

export default List
```

> 开始书写列表页头部

```jsx
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import { param2Obj } from '../../../utils/urlUtils'
import { ListHeaderStyled } from '../ListStyled'
// 查找bug来源，分割法
// 1. 分割前后端
// 2. 分割模块
// 3. 分割页面
// 4. 分割代码块
function ListHeader(props) {
    const [title, setTitle] = useState('')
    useEffect(() => {
        // search获取参数队列
        // console.log('参数：', props.history.location.search)
        // 利用工具类转对象格式
        var params = param2Obj(props.history.location.search)
        // console.log('params', params)
        // 获取url的参数
        setTitle(params.title)
    }, [props])
    const back = () => {
        props.history.goBack() //返回上一层路由
    }

    return (
        <ListHeaderStyled>
            <NavBar onBack={back}>{title}</NavBar>
        </ListHeaderStyled>
    )
}
export default withRouter(ListHeader)
```

> 中间内容区

```jsx
import React from 'react'
// 引入ui组件
import { List, Image, Ellipsis } from 'antd-mobile'
// 引入样式
import { ListStyled } from '../ListStyled'

const ListContent = (props) => {
    return (
        <ListStyled>
            <List>
                {
                    props.arr.map((item, index) => {
                        return <List.Item key={index}>
                            <Image src={item.img} width={80} height={80} fit='fill' />
                            <div className='right_list'>
                                <h3>{item.name}</h3>
                                {/* <p className='des'>{ item.burdens }</p> */}
                                {/* 文本超出尾部添加省略号 */}
                                <Ellipsis className='des' direction='end' content={item.burdens} />
                                <p className='sub'>{item.all_click}点赞 {item.favorites}收藏</p>
                            </div>
                        </List.Item>
                    })
                }
            </List>
        </ListStyled>
    )
}

export default ListContent
```

> 样式组件

```js
import styled from 'styled-components'

// 列表头
export const ListHeaderStyled = styled.div`
   .adm-nav-bar{
    background-color: #FF6B01;
    color:#fff;
    height: 50px;
    .adm-nav-bar-title{
        font-size:20px ;
    }
   }
   .antd-mobile-icon{
    width:15px;
   }
`
// 列表
export const ListStyled = styled.div`
   .adm-list-item-content-main{
      display:flex ;
      .right_list{
        flex: 1;
        padding-left:5px;
        h3{
            font-size: 18px;
            font-weight:bold ;
        }
        .des{
            font-size: 14px;
            color:#999;
        }
        .sub{
            font-size: 12px;
            color:#999 ;
        }
      }
   }
`
```


## 小知识点：

==路由搭建webapp页面可以分两类，有tab-bar比如首页、分类、购物车、我的、个人中心+没有tab-bar、列表页、搜索页、详情页、展示页面==

==函数组件不支持装饰器，函数组件只能使用高阶组件包裹，如withRouter包裹解决路由方法获取不到问题，它不能使用@语法糖==

==使用antd design外层套div或者找类名方式去修改原样式，进行覆盖==

==解决移动端1px的bug==
> 移动端1px问题是存在的，你书写1px的时候，由于设备dpr=2的，对这个1px进行缩放。使用媒体查询检测当前设备的dpr的值，然后根绝dpr进行等比例缩放来解决这个1px bug。

todo: Redux持久化，分类页退出再进来可以做持久化

### react配置多个反向代理：

案例：

```js
const { createProxyMiddleware: proxy } = require("http-proxy-middleware")
module.exports = app => {
    app.use(
        proxy("/api", {
            target: "https://api.it120.cc", // 被代理的域名地址
            changeOrigin: true, // 开启反向代理
            pathRewrite: { // 重定向
                "^/api": ""
            }
        }),
        proxy("/bpi", {
            target: "https://www.baidu.com", // 被代理的域名地址
            changeOrigin: true, // 开启反向代理
            pathRewrite: { // 重定向
                "^/bpi": ""
            }
        }),
    )
}
```

### react自带cookie、localStorage、sessionStorage

1. 直接引入内置模块使用
2. 使用：get()、set()、remove()


### 等待数据请求过来再渲染子组件，并把数据传递给子组件

> 父组件数据请求成功了，有了数据再传递给子组件使用【才渲染子组件】
对象的话，一般使用初始值空字符串，数组使用空数组，一般数组会遍历，空字符串不写，记忆初始值为空数组
```js
const [good, setGood] = useState('')
{good && <DetailList good={good} />}
```

