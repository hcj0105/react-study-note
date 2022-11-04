import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  render() {
    console.log('Home render')
    return (
      <div>
        <h2>Home Component: {this.props.message}</h2>
      </div>
    )
  }
}

export default Home