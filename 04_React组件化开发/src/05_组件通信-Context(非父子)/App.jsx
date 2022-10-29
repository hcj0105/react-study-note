import React, { Component } from 'react'

import ThemeContext from './contexts/theme-context'
import UserContext from './contexts/user-context'
import Home from './Home'
import Profile from './Profile'

export class App extends Component {
	constructor() {
		super()

		this.state = {
			appInfo: { name: 'y_mixin_o', age: 21 }
		}
	}

	render() {
		const { appInfo } = this.state

		return (
			<div>
				<h2>App</h2>
				{/* 可以使用嵌套组件进行提供多个 Context */}
				<UserContext.Provider value={{ nickName: '李银河', age: 21 }}> 
				{/* 2. 通过 ThemeContext.Provider 的 Value 属性进行传递数据，会传给组件的 context 属性 */}
					<ThemeContext.Provider value={{ color: 'blue', fontSize: '24px' }}>
						{/* 可以通过 {...Obj} 的方式将所有属性传递, 如果你刚好传递的数据在一个对象内 */}
						<Home {...appInfo} />
					</ThemeContext.Provider>
				</UserContext.Provider>
				
				<Profile />
			</div>
		)
	}
}

export default App
