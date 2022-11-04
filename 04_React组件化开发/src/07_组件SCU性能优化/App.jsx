import React, { PureComponent } from 'react'
import Home from './Home'
import Profile from './Profile'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			message: 'Hello World',
			counter: 0
		}
	}

	changeText() {
		this.setState({ message: 'Hello React' })
	}

	incerment() {
		this.setState({ counter: this.state.counter + 1 })
	}

	render() {
    console.log('App render')
		return (
			<div>
				<h2>App Component</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.incerment()}>+1</button>
				<Home message={this.state.message} />
				<Profile counter={this.state.counter} />
			</div>
		)
	}
}

export default App
