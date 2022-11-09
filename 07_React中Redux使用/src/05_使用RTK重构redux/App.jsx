import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import AppWrapper from './styles/App'

import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Profile from './pages/Profile'

import { StoreContext } from './hoc'
import store from './store'

export class App extends PureComponent {
	render() {
		const { counter } = this.props
		return (
			<AppWrapper>
				<h2>App counter: {counter}</h2>
				<div className='pages'>
					<Home />
					<Product />
					<About />
					<StoreContext.Provider value={store}>
						<Profile />
					</StoreContext.Provider>
				</div>
			</AppWrapper>
		)
	}
}

const mapStateToProps = state => ({ counter: state.counterReducer.counter })

export default connect(mapStateToProps)(App)
