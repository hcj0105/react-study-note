import React, { PureComponent } from 'react'
import withAuth from '../HOC/with_auth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>Cart</div>
    )
  }
}

export default withAuth(Cart)