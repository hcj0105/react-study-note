import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { addCounterAction, subCounterAction } from './store/actionCreators'

export class About extends PureComponent {
	render() {
		const { counter, addCounter, subCounter } = this.props
		return (
			<div>
				<h2>Home counter: {counter}</h2>
				<button onClick={e => addCounter(1)}>+1</button>
				<button onClick={e => addCounter(5)}>+5</button>
				<button onClick={e => addCounter(10)}>+10</button>
				<button onClick={e => subCounter(1)}>-1</button>
				<button onClick={e => subCounter(5)}>-5</button>
				<button onClick={e => subCounter(10)}>-10</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => ({
	addCounter: counter => dispatch(addCounterAction(counter)),
	subCounter: counter => dispatch(subCounterAction(counter))
})
/**
 * connect 是一个高阶函数，返回一个高阶组件。
 * connect 接收两个函数作为参数: 用于对组件进一步的解耦
 * 1. 一个用于映射你想要为当前组件提供的 属性 到 props 中, 这个函数返回一个对象
 * 2. 一个用于映射你想要为当前组件提供的 方法 到 props 中，这个函数返回一个对象
 */
export default connect(mapStateToProps, mapDispatchToProps)(About)
