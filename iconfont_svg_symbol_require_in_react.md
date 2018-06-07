# 在React中使用Symbol
使用Symbol方式引入SVG,可以支持多色图标, 并可以使用font-size,color属性改变SVG样式.
在react中使用Symbol方式时,需要在webpack入口文件中引入iconfont.js:
```js
entry: [
  require.resolve('./polyfills'),
  //这里
  require.resolve('../src/icon/iconfont.js')
]
```
使用方式：
```jsx
<svg className="icon" aria-hidden="true" >
  <use xlinkHref="#icon_-icon_expand_1" />
</svg>
```
