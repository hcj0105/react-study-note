import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			isAgree: false,
			hobbies: [
				{ text: '篮球', value: '篮球', isCheck: false },
				{ text: '足球', value: '足球', isCheck: false },
				{ text: '乒乓球', value: '乒乓球', isCheck: false },
				{ text: '羽毛球', value: '羽毛球', isCheck: false }
			]
		}
	}

	// 单选框
	handleCheckBoxChange(e) {
		this.setState({ isAgree: e.target.checked })
	}

	// 多选框
	handleMultipleCheckBoxChange(e, index) {
		const hobbies = [...this.state.hobbies]
		hobbies[index].isCheck = e.target.checked
		this.setState({ hobbies })
	}

	render() {
		const { isAgree, hobbies } = this.state

		return (
			<div>
				<h2>受控组件和非受控组件</h2>

				{/* checkbox 单选 */}
				{/* checkbox 需要绑定 checked 来控制  */}
				<div>
					<label htmlFor='isAgree'>
						<input
							type='checkbox'
							checked={isAgree}
							onChange={e => this.handleCheckBoxChange(e)}
						/>
						是否同意
					</label>
				</div>

				<br />

				{/* checkbox 多选 */}
				<div>
					{hobbies.map((hobbby, index) => {
						return (
							<label htmlFor={hobbby.value} key={hobbby.value}>
								<input
									type='checkbox'
									id={hobbby.value}
									checked={hobbby.isCheck}
									onChange={e => this.handleMultipleCheckBoxChange(e, index)}
								/>
								<span>{hobbby.text}</span>
							</label>
						)
					})}
				</div>
			</div>
		)
	}
}

export default App
