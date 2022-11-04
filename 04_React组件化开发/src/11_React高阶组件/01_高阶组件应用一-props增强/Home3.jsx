import React, { PureComponent } from 'react'
import enhanceProps from '../HOC/enhance_props'

export class Home3 extends PureComponent {
  render() {
    const { name, age } = this.props

    return (
      <div>Home3: {name}-{age}</div>
    )
  }
}

export default enhanceProps(Home3)