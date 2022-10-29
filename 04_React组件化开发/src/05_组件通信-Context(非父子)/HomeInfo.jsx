import React, { Component } from 'react'
import ThemeContext from './contexts/theme-context'
import UserContext from './contexts/user-context'

export class HomeInfo extends Component {
	render() {
		// 使用方法一: 通过 this.context 的方式拿到提供的数据直接使用
		// 4. 通过 this.context 的方式拿到提供的数据
		const { color, fontSize } = this.context

		return (
			<div>
				{/* 使用方法一: 通过 this.context 的方式拿到提供的数据直接使用 */}
				<div>
					HomeInfo Context: {color}-{fontSize}
				</div>

				{/* 使用方法二: 通过 ThemeContext.Consumer 并传入一个函数作为子元素，内部会回调这个函数将 Context 提供的数据返回 */}
				<ThemeContext.Consumer>
					{({ color, fontSize }) => {
						return (
							<div>
								HomeInfo ThemeContext: {color}-{fontSize}
							</div>
						)
					}}
				</ThemeContext.Consumer>
				{/* 多个 Context 也可以使用 ThemeContext.Consumer 的方式拿到多个 Context 数据 */}
				<UserContext.Consumer>
					{({ nickName, age }) => {
						return (
							<div>
								HomeInfo UserContext: {nickName}-{age}
							</div>
						)
					}}
				</UserContext.Consumer>
			</div>
		)
	}
}

// 3. 通过类的 contextType 属性设置接收的 Context 类型
HomeInfo.contextType = ThemeContext

export default HomeInfo
