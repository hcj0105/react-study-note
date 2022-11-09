import React, { PureComponent } from 'react'
import store from './store'
import { subCounterAction } from './store/actionCreators'

export class Product extends PureComponent {
	constructor() {
		super()

		this.state = {
			counter: store.getState().counter
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState({ counter: store.getState().counter })
		})
	}

	render() {
		const { counter } = this.state
		return (
			<div>
				<h2>Product counter: {counter}</h2>
				<button onClick={e => store.dispatch(subCounterAction(1))}>-1</button>
				<button onClick={e => store.dispatch(subCounterAction(5))}>-5</button>
				<button onClick={e => store.dispatch(subCounterAction(10))}>-10</button>
			</div>
		)
	}
}

export default Product
