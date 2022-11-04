import React, { PureComponent } from 'react'
import enhanceProps from '../HOC/enhance_props'

export class Home extends PureComponent {
  render() {
    const { name, age, sex } = this.props

    return (
      <div>Home: {name}-{age}-{sex}</div>
    )
  }
}

export default enhanceProps(Home)