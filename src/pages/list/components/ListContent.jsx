import React from 'react'
// 引入ui组件
import { List, Image, Ellipsis } from 'antd-mobile'
// 引入样式
import { ListStyled } from '../ListStyled'

const ListContent = (props) => {
    return (
        <ListStyled>
            <List>
                {
                    props.arr.map((item, index) => {
                        return <List.Item key={index}>
                            <Image src={item.img} width={80} height={80} fit='fill' />
                            <div className='right_list'>
                                <h3>{item.name}</h3>
                                {/* <p className='des'>{ item.burdens }</p> */}
                                {/* 文本超出尾部添加省略号 */}
                                <Ellipsis className='des' direction='end' content={item.burdens} />
                                <p className='sub'>{item.all_click}点赞 {item.favorites}收藏</p>
                            </div>
                        </List.Item>
                    })
                }
            </List>
        </ListStyled>
    )
}

export default ListContent
