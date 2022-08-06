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
                <CategoryHeader changeCate={this.changeCate}/>
                {/* 搜索组件 */}
                <Search bg={'#e51414'} innerBg={'#1fd0d0'} />
                {/* 内容组件 */}
                <CategoryContent category={this.state.cate} defaultKey={this.state.defaultKey} />
            </div>
        )
    }
}

export default Category
