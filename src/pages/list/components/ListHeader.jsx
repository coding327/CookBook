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
        // 获取参数队列
        // console.log('参数：', props.history.location.search)
        // 利用工具类转对象格式
        var params = param2Obj(props.history.location.search)
        // console.log('params', params)
        // 获取url的参数
        setTitle(params.title)
        // console.log(params)
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