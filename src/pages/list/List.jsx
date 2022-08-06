import React, { useState, useEffect } from 'react'
// 引入子组件
import ListHeader from './components/ListHeader'
import ListContent from './components/ListContent'
// 引入接口
import {getGoodFood} from '@a/homeApi'

function List(props) {
    const [arr, setArr] = useState([])
    // 挂载后
    useEffect(() => {
        getGoodFood().then(res => {
            // console.log(res.data) // 成功打印数据
            if (res.code === 200) {
                setArr(res.data) // 更新数据
            }
        })
    }, [])
    return (
        <div>
            {/* 列表页头部 */}
            <ListHeader />
            {/* 内容区 */}
            <ListContent arr={arr}/>
        </div>
    )
}

export default List
