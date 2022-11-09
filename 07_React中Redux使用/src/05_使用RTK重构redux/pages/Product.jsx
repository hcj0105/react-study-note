import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { counterActions } from '../store'

export class Product extends PureComponent {
	render() {
		const { counter, subCounter } = this.props
		return (
			<div>
				<h2>Home counter: {counter}</h2>
				<button onClick={() => subCounter(1)}>+1</button>
				<button onClick={() => subCounter(5)}>+5</button>
				<button onClick={() => subCounter(10)}>+10</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({ counter: state.counterReducer.counter })
const mapDispatchToProps = dispatch => ({
	subCounter: counter => dispatch(counterActions.subCounter(counter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
