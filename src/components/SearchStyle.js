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

