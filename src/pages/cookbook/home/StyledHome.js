// 引入styled，书写home样式
import styled from "styled-components"

// 头部
export const MyHeader = styled.div`
    height: 1.2rem;
    width:100%;
    background-color:#FF6B01;
    font-size: .4rem;
    color: #fff;
    text-align: center;
    line-height: 1.2rem;
`

// Swiper轮播图样式
export const SwiperStyle = styled.div`
    img{
        width: 100%;
        height: 4.5rem;
    }
`

// 热门分类样式
export const HotCateStyle = styled.div`
  background-color: #fff;
  margin: 0 .3rem;
  box-sizing: border-box;
    h3{
      height: .6rem;
      line-height: .6rem ;
      padding-left:.1rem;
      font-size: .32rem;
      color:#999;
    }
    ul{
      display:flex ;
      flex-wrap: wrap;
      border-right: 1px solid #999;
      border-bottom: 1px solid #999;
      box-sizing: border-box;
      li{
        border-top: 1px solid #999;
        border-left:1px solid #999 ;
        box-sizing: border-box;
        width:25%;
        height: 1rem;  //375
        text-align: center;
        line-height: 1rem;
      }
    }
`

// 精品好菜的样式
export const GoodFoodStyle = styled.div`
   background-color: #F4F4F4;
   h3{
      height: .6rem;
      line-height: .6rem ;
      padding-left:.1rem;
      font-size: .32rem;
      color:#999;
    }
    ul{
      display: flex;
      flex-wrap: wrap ;
      justify-content: space-around;
      li{
        width: 170px;
        .title{
          font-weight: bold;
          font-size: 20px;
          margin: 10px 0px 5px 0px;
          text-align: center;
        }
        .describe{
          font-size: 13px;
          text-align: center;
          color:#999;
          margin-bottom: 10px;
        }
      }
    }
`





