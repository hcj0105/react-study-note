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
			],
			hobbby: ''
		}
	}

	handleRadioChange(e) {
		this.setState({ hobbby: e.target.value })
	}

	render() {
		const { hobbies, hobbby } = this.state

		return (
			<div>
				<h2>受控组件和非受控组件</h2>

				{/* radio 单选 */}
				{/* radio 需要绑定 value 来控制  */}
				<div>
					{hobbies.map((item, index) => {
						return (
							<label htmlFor={item.value} key={item.value}>
								<input
									type='radio'
									name='hobby'
									id={item.value}
									value={hobbby}
									onChange={e => this.handleRadioChange(e, index)}
								/>
								<span>{item.text}</span>
							</label>
						)
					})}
				</div>
			</div>
		)
	}
}

export default App
