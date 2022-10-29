import React from 'react'
import HelloWorld from './HelloWorld'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			message: 'Hello React',
			isShowHW: true
		}
	}

	showHW() {
		this.setState({ isShowHW: !this.state.isShowHW })
	}

	render() {
		const { message, isShowHW } = this.state

		return (
			<div>
				<h2>{message}</h2>
				<button onClick={() => this.showHW()}>隐藏HelloWorld组件</button>
				{isShowHW && <HelloWorld />}
			</div>
		)
	}
}

export default App
