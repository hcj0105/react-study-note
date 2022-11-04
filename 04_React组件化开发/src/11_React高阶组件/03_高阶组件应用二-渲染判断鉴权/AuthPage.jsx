import React, { PureComponent } from 'react'
import Cart from './Cart'

export class AuthPage extends PureComponent {
	constructor() {
		super()

		this.state = {
			isLogin: false
		}
	}

	handleLoginClick() {
    localStorage.setItem('token', 'asdasfassfasdasdqweqwrbjk')
		this.setState({ isLogin: !this.state.isLogin })
	}

	render() {
		return (
			<div>
        <h2>高阶组件应用二: 渲染判断鉴权</h2>
				<button onClick={e => this.handleLoginClick()}>登录</button>
				<Cart />
			</div>
		)
	}
}

export default AuthPage
