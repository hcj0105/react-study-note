import React, { PureComponent } from 'react'
import Detail from './Detail'

export class LifeCycleHijack extends PureComponent {
  render() {
    return (
      <div>
        <h2>高阶组件应用三: 生命周期劫持</h2>
        <Detail/>
      </div>
    )
  }
}

export default LifeCycleHijack