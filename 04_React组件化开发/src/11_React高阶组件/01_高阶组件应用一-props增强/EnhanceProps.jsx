import React, { PureComponent } from 'react'
import Home from './Home'
import Home2 from './Home2'
import Home3 from './Home3'

export class EnhanceProps extends PureComponent {
	render() {
		return (
			<div>
				<h2>高阶组件应用一: props增强</h2>
				{/* 也可以传递自己的props */}
				<Home sex='男' />
				<Home2 />
				<Home3 />
			</div>
		)
	}
}

export default EnhanceProps
