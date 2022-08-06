import styled from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 1.2rem;
    background-color: #FF6B01;
    font-size: .4rem;
    color: #fff;
    text-align: center;
    line-height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 34px;
        border: 1px solid #fff;
        border-radius: 17px;
        li {
            width: 80px;
        }
        .box1 {
            width: 80px;
            height: 34px;
            background: #fff;
            color: #FF6B01;
            border-radius: 17px;
            border: 1px solid #fff;
            position: absolute;
            left: 0;
            z-index: 99;
            text-align: center;
            line-height: 34px;
        }
        .box2 {
            left: 80px;
        }
    }
`

// 内容区样式
export const CntStyle = styled.div`
    display: flex;
    .rightul{
        flex: 1;
        display:flex ;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 30px;
    li{
        width:80px;
        height: 20px;
        border: 1px solid  #ccc;
        font-size: 12px;
        text-align: center;
        line-height:20px ;
        cursor:pointer ;
    }
   }
`






