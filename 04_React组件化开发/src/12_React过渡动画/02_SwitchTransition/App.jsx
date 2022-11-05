import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			isLogin: false
		}
	}

	render() {
		const { isLogin } = this.state

		return (
			<div>
        {/* SwitchTransition 用于设置组件之间切换时的过渡动画 */}
				<SwitchTransition
					// mode 用于设置模式， out-in 先出后进、in-out 先进后出
					mode='out-in'>
					<CSSTransition
						// 在使用 SwitchTransition 实现动画的时候，CSSTransition 需要通过 key来控制添加和删除动画
						key={isLogin ? 'enter' : 'exit'}
						classNames='content'
						timeout={1000}>
						<button onClick={e => this.setState({ isLogin: !isLogin })}>
							{isLogin ? '注销' : '登录'}
						</button>
					</CSSTransition>
				</SwitchTransition>
			</div>
		)
	}
}

export default App
