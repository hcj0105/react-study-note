import React, { PureComponent } from 'react'
import { connect } from '../hoc'
import { counterActions } from '../store'

export class Profile extends PureComponent {
	render() {
		const { counter, addCounter } = this.props
		return (
			<div>
				<h2>Profile counter: {counter}</h2>
				<button onClick={e => addCounter(100)}>+100</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	counter: state.counterReducer.counter
})

const mapDispatchToProps = dispatch => ({
	addCounter: counter => dispatch(counterActions.addCounter(counter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
