import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {
	constructor() {
		super()

		this.state = {
			message: 'Hello World'
		}
	}

	changeText() {
		/* 
      setState 详细用法
      setState内部其实做的就是数据的合并
    */

		// 用法一: 传入一个对象
		// this.setState({ message: '你好啊，李银河' })

		// 用法二: 传入一个函数
		// 好处一: 可以在回调函数中编写新的state数据的逻辑
		// 好处二: 回调函数会将之前的state、props传递过来
		// this.setState((state, props) => {
		// 	console.log(state, props)
		// 	return {
		// 		message: '你好啊，李银河'
		// 	}
		// })

		// 用法三: setState在React事件处理中是一个异步操作
		// 如果喜欢在数据更新(数据合并)之后，对更新后的数据做一下操作
		// 可以传入第二个参数，一个回调函数，在这个函数中访问数据会得到更新后的数据
		// this.setState({ message: '你好啊，李银河' }, () => {
		// 	console.log(this.state.message) // '你好啊，李银河'
		// })

		// // 因为是异步操作，所以数据还没更新拿不到更新后的值
		// console.log(this.state.message) // Hello World

		flushSync(() => {
			this.setState({ message: '你好啊，李银河' })
		})
		console.log(this.state.message) // '你好啊，李银河'
	}

	render() {
		const { message } = this.state

		return (
			<div>
				<h2>{message}</h2>
				<button onClick={() => this.changeText()}>修改内容</button>
			</div>
		)
	}
}

export default App
