import React, { PureComponent } from 'react'
import store from './store'

import Product from './Product'
import Home from './Home'
import AppWrapper from './style'

export class App extends PureComponent {
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
				<h2>App counter: {counter}</h2>
				<AppWrapper>
					<Home />
					<Product />
				</AppWrapper>
			</div>
		)
	}
}

export default App
