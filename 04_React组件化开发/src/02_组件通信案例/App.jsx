import React, { Component } from 'react'
import Tab from './Tab'
import './Tab/index.css'

export class App extends Component {
	constructor() {
		super()

		this.state = {
			titles: ['流行', '新款', '精选'],
			tabIndex: 0
		}
	}

	tabClick(tabIndex) {
		this.setState({ tabIndex })
	}

	render() {
		const { titles, tabIndex } = this.state

		return (
			<div>
				<Tab
					titles={titles}
					tabIndex={tabIndex}
					tabClick={i => this.tabClick(i)}
				/>
				<h2>{titles[tabIndex]}</h2>
			</div>
		)
	}
}

export default App
