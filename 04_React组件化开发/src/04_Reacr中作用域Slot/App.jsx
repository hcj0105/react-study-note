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
					// 通过传入一个方法然后将内容作为参数传回来，实现vue中的作用域插槽
					itemType={title => <button>{title}</button>}
				/>
				<h2>{titles[tabIndex]}</h2>
			</div>
		)
	}
}

export default App
