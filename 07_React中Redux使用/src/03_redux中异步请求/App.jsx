import React, { PureComponent } from 'react'
import store from './store'
import AppWrapper from './style'

import Product from './Product'
import Home from './Home'
import About from './About'
import Category from './Category'

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
					<About />
					<Category />
				</AppWrapper>
			</div>
		)
	}
}

export default App
