import React, { Component } from 'react'
// 引入样式组件
import { HotCateStyle } from '../StyledHome'

class HotCat extends Component {
    render() {
        // console.log(this.props.hotCategoryArr) // 成功打印数据
        return (
            <HotCateStyle>
                <h3>热门分类</h3>
                <ul>
                    {this.props.hotCategoryArr.map(item => {
                        return <li key={item.title}>{item.title}</li>
                    })}
                </ul>
            </HotCateStyle>
        )
    }
}

export default HotCat
