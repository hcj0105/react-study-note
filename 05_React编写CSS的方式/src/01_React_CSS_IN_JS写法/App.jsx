import React, { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import Product from './Product/Product'
import { AppWrapper, Input } from './style'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			bgColor: 'yellow'
		}
	}

	render() {
		const { bgColor } = this.state

		return (
			// 可以使用 styled-components 提供的 ThemeProvider 组件
			// 包裹在内的所有子元素都可以获得到提供的属性
			<ThemeProvider theme={{ color: 'skyblue', fontSize: '30px' }}>
				<AppWrapper bgColor={bgColor}>
					<div className='app'>
						<h2 className='title'>我是标题</h2>
						<div className='content'>
							<h2 className='content-title'>我是内容，哈哈哈哈哈</h2>
							<div className='content-banner'>我是轮播图</div>
						</div>
					</div>

					<h2>请输入你想要改变的背景颜色:</h2>
					{/* 可以通过绑定js变量，根据变量动态修改样式 */}
					<Input
						value={bgColor}
						onChange={e => this.setState({ bgColor: e.target.value })}
					/>
					<br />
					<br />
					<Product />
				</AppWrapper>
			</ThemeProvider>
		)
	}
}

export default App
