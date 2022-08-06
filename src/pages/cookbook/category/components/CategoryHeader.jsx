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
