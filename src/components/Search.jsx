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
            // 在样式组件标签这里透传
           <SearchStyle {...this.props}>
                {/* 在样式组件标签这里透传 */}
                <SearchBorder {...this.props}>
                    <Image className='searchImg' src={searchImg} width={20} height={20}></Image>
                    <span>想吃什么搜这里，如川菜</span>
                </SearchBorder>
           </SearchStyle>
        )
    }
}

export default Search
