import React, { Component } from 'react'
import ThemeContext from './contexts/theme-context'

export class Profile extends Component {
  render() {
    const {color, fontSize} = this.context

    return (
      // 通过类的静态属性 contextType 设置了 Context 类型，如果当前组件没有在 Context 的提供者中 
      // 那么将会拿到当前设置的 Context 创建时的传入的默认值
      <div>Profile 使用ThemeContext提供的默认值: {color}-{fontSize}</div>
    )
  }
}

// 非 Context 的 提供者 使用时， 会拿到创建 Context 时定义的默认值。
Profile.contextType = ThemeContext

export default Profile