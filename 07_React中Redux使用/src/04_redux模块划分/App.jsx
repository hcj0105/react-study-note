import React, { PureComponent } from 'react'
import store from './store'
import AppWrapper from './style'

import Product from './pages/Product'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			counter: store.getState().counterReducer.counter
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState({ counter: store.getState().counterReducer.counter })
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
					<About />
					<Category />
				</AppWrapper>
			</div>
		)
	}
}

export default App
