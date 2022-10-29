import React from 'react'

// 1. 通过 React.createContext 函数创建一个上下文
// 参数 defaultValue 为没有作为 ThemeContext.Provider 子元素的组件提供的数据
const ThemeContext = React.createContext({ color: 'red', fontSize: '16px' })

export default ThemeContext
