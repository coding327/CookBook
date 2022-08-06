import React, { Component } from 'react'
// 引入子组件
import Header from './components/Header'
import Swiper from './components/Swiper'
import Search from '@c/Search'
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
                <Search hasBorder={true}/>
                {/* 热门分类 */}
                <HotCat hotCategoryArr={this.state.hotCategoryArr} />
                {/* 精品好菜 */}
                <Good goodFoodArr={this.state.goodFoodArr}/>
            </div>
        )
    }
}

export default Home
