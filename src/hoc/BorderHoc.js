// 解决1px问题的高阶组件
import styled from 'styled-components'
// 参数是传递一个样式组件进去，返回新的样式组件
// 利用styled的样式继承的特性给我们的样式组件添加1px解决代码
const border = (WrappedComp) => {
    const EnhancedComp = styled(WrappedComp)`
    // 为边框位置提供定位参考
    position: relative;
    border-radius: ${({ radius }) => radius || 0}rem;
    &::after {
      // 用以解决边框layer遮盖内容
      pointer-events: none;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;

      content: "";
      border-color: ${({ color }) => color || '#ccc'}; //边线的颜色
      border-style: ${({ style }) => style || 'solid'}; //边线的类型
      border-width: ${({ width }) => width || '1px'}; //边线的粗细

      @media (max--moz-device-pixel-ratio: 1.49),(-webkit-max-device-pixel-ratio: 1.49),(max-device-pixel-ratio: 1.49),(max-resolution: 143dpi),(max-resolution: 1.49dppx) {
        width: 100%;
        height: 100%;
        transform: scale(1);
        border-radius: ${({ radius }) => radius * 1 || 0}rem //圆角
      }

      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),(-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),(min-resolution: 144dpi) and (max-resolution: 239dpi),(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
        width: 200%;
        height: 200%;
        transform: scale(.5);
        border-radius: ${({ radius }) => radius * 2 || 0}rem
      }

      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5),(min-resolution: 240dpi), (min-resolution: 2.5dppx) {
        width: 300%;
        height: 300%;
        transform: scale(.3333333);
        border-radius: ${({ radius }) => radius * 3 || 0}rem
      }
      transform-origin: 0 0;
    }
  `
    return EnhancedComp
}

export default border