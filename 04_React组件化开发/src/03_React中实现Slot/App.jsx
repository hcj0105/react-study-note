import React, { Component } from 'react'
import NavBarChildren from './NavBarChildren'
import NavBarProps from './NavBarProps'
import './index.css'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 通过组件的children元素来实现 */}
        {/* 缺点：如果只有一个子元素，那么children就会传入的那个子元素，如果传入多个那么为一个数组形式 */}
        <NavBarChildren>
          <button>返回</button>
          <h2>我是一个标题</h2>
          <i>我是斜体1</i>
        </NavBarChildren>
        
        {/* 通过Props的形式实现 */}
        <NavBarProps 
          leftSlot={<button>返回</button>}
          centerSlot={<h2>我是一个标题</h2>}
          rightSlot={<i>我是斜体2</i>}
        />
      </div>
    )
  }
}

export default App