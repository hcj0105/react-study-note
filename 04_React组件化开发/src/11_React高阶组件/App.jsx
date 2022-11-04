import React, { PureComponent } from 'react'
import EnhanceProps from './01_高阶组件应用一-props增强/EnhanceProps'
import ContextShare from './02_高阶组件应用一-Context共享/ContextShare'
import AuthPage from './03_高阶组件应用二-渲染判断鉴权/AuthPage'
import LifeCycleHijack from './04_高阶组件应用三-生命周期劫持/LifeCycleHijack'


export class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 应用一: props增强 */}
        <EnhanceProps/>
        {/* 应用一: Context共享 */}
        <ContextShare/>
        {/* 应用二: 判断鉴权 */}
        <AuthPage/>
        {/* 应用三: 劫持生命周期 */}
        <LifeCycleHijack/>
      </div>
    )
  }
}

export default App