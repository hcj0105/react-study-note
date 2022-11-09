import React, { PureComponent } from 'react'
import store from './store'
import { addCounterAction } from './store/actionCreators'

export class Home extends PureComponent {
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
				<h2>Home counter: {counter}</h2>
				<button onClick={e => store.dispatch(addCounterAction(1))}>+1</button>
				<button onClick={e => store.dispatch(addCounterAction(5))}>+5</button>
				<button onClick={e => store.dispatch(addCounterAction(10))}>+10</button>
			</div>
		)
	}
}

export default Home
