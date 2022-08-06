// 引入styled，书写CookBook样式
import styled from 'styled-components'

// 整个CookBook高度
export const StyledCook = styled.div`
    height: 100%;
`
// 导航栏上方高度
export const StyledTab = styled.div`
    height: calc(100% - 50px);
`

// tabbar定位到最下方
export const TabbarStyled = styled.div`
  position: fixed;
  bottom: 0;
  left:0;
  z-index: 999;
  background-color:#fff ;
  width:100% ;
`



