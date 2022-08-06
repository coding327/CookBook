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
//                         return <li key={index}>

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
