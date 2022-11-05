import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			isShow: true
		}
	}

	render() {
		const { isShow } = this.state

		return (
			<div>
				<button onClick={e => this.setState({ isShow: !isShow })}>
					{isShow ? '隐藏' : '显示'}
				</button>
        {/* CSSTransition 组件用于设置内容的过渡动画效果 */}
				<CSSTransition
					// 控制动画是 进入还是离开
					in={isShow}
					// 动画class的名称
					classNames='content'
					// 控制css类名添加和删除的时间
					timeout={2000}
					// 离开时是否写在元素
					unmountOnExit={true}
          // 当 in 默认为 true 时不会触发进入动画
          // appear 可以设置默认 in 为 true 时的首次动画
          appear
        >
					<div>
						<h2>啊哈哈哈哈</h2>
						<p>我是内容,哈哈哈哈哈</p>
					</div>
				</CSSTransition>
			</div>
		)
	}
}

export default App
