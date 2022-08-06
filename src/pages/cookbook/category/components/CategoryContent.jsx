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
