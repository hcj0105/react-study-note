import React from 'react'
import ThemeContext from './contexts/theme-context'

export default function HomeProduct() {
	return (
		// 函数式组件通过 ThemeContext.Consumer 并传入一个函数作为子元素，内部会回调这个函数将 Context 提供的数据返回
		<ThemeContext.Consumer>
			{({ color, fontSize }) => {
				return (
					<div>
						HomeProduct: {color}-{fontSize}
					</div>
				)
			}}
		</ThemeContext.Consumer>
	)
}
