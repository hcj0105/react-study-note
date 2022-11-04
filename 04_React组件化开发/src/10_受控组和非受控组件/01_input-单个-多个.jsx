import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}
	}

	handleSubmit(e) {
    // 阻止默认表单提交的操作
		e.preventDefault()

    console.log(this.state.username, this.state.password)
	}

	// 实现统一的修改input框的操作
	handleInputChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		const { username, password } = this.state

		return (
			<div>
				<h2>受控组件和非受控组件</h2>

				{/* input */}
				{/* input 需要绑定 value 来控制 */}
				<form onSubmit={e => this.handleSubmit(e)}>
					<label htmlFor='username'>
						用户名:
						<input
							type='text'
							id='username'
							name='username'
							value={username}
							onChange={e => this.handleInputChange(e)}
						/>
					</label>

					<label htmlFor='password'>
						密码:
						<input
							type='text'
							id='password'
							name='password'
							value={password}
							onChange={e => this.handleInputChange(e)}
						/>
					</label>
					<br />

					<button type='submit'>注册</button>
				</form>
			</div>
		)
	}
}

export default App
