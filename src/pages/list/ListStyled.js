import styled from 'styled-components'

// 列表头
export const ListHeaderStyled = styled.div`
   .adm-nav-bar{
    background-color: #FF6B01;
    color:#fff;
    height: 50px;
    .adm-nav-bar-title{
        font-size:20px ;
    }
   }
   .antd-mobile-icon{
    width:15px;
   }
`
// 列表
export const ListStyled = styled.div`
   .adm-list-item-content-main{
      display:flex ;
      .right_list{
        flex: 1;
        padding-left:5px;
        h3{
            font-size: 18px;
            font-weight:bold ;
        }
        .des{
            font-size: 14px;
            color:#999;
        }
        .sub{
            font-size: 12px;
            color:#999 ;
        }
      }
   }
`