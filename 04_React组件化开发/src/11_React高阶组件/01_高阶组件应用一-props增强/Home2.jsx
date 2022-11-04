import React, { PureComponent } from 'react'
import enhanceProps from '../HOC/enhance_props'

export class Home2 extends PureComponent {
  render() {
    const { name, age } = this.props

    return (
      <div>Home2: {name}-{age}</div>
    )
  }
}

export default enhanceProps(Home2)