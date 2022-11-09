import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { counterActions } from '../store'

export class Home extends PureComponent {
	render() {
		const { counter, addCounter } = this.props
		return (
			<div>
				<h2>Home counter: {counter}</h2>
				<button onClick={() => addCounter(1)}>-1</button>
				<button onClick={() => addCounter(5)}>-5</button>
				<button onClick={() => addCounter(10)}>-10</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({ counter: state.counterReducer.counter })
const mapDispatchToProps = dispatch => ({
	addCounter: counter => dispatch(counterActions.addCounter(counter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
