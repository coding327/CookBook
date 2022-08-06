import React, { Component } from 'react'
// 引入Swiper轮播组件
import { Swiper } from 'antd-mobile'
// import swiper1 from '../../../../assets/img/swiper-1.png'
// import swiper2 from '../../../../assets/img/swiper-2.jpeg'
// import swiper3 from '../../../../assets/img/swiper-3.jpeg'
import swiper1 from '@s/img/swiper-1.png'
import swiper2 from '@s/img/swiper-2.jpeg'
import swiper3 from '@s/img/swiper-3.jpeg'
// 引入轮播样式
import { SwiperStyle } from '../StyledHome'

class MySwiper extends Component {
    render() {
        return (
            <SwiperStyle>
                {/* 开启自动播放和循环 */}
                <Swiper autoplay loop>
                    <Swiper.Item>
                        <img src={swiper1} alt="" />
                    </Swiper.Item>
                    <Swiper.Item>
                        <img src={swiper2} alt="" />
                    </Swiper.Item>
                    <Swiper.Item>
                        <img src={swiper3} alt="" />
                    </Swiper.Item>
                </Swiper>
            </SwiperStyle>
        )
    }
}

export default MySwiper
