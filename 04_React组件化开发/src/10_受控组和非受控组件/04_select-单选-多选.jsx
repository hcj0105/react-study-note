import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			fruits: [
				{ text: '葡萄', value: '葡萄', name: '葡萄' },
				{ text: '桃子', value: '桃子', name: '桃子' },
				{ text: '菠萝', value: '菠萝', name: '菠萝' },
				{ text: '榴莲', value: '榴莲', name: '榴莲' }
			],
			oneFruit: '榴莲',
			multipleFruit: ['葡萄', '菠萝']
		}
	}

	// 单选下拉框
	handleSelectChange(e) {
		this.setState({ oneFruit: e.target.value }, () => {
			console.log(this.state.oneFruit)
		})
	}

	// 多选下拉框
	handleMultipleSelectChange(e) {
		// console.log(e.target.selectedOptions)
		// 1. 通过 e.target.selectedOptions 获取所有选中的 options（类数组）
		// 2. 先将类数组转成数组
		// 3. 获取所有的值
		const values = Array.from(e.target.selectedOptions, fruit => fruit.value)
		this.setState({ multipleFruit: values }, () => {
			console.log(this.state.multipleFruit)
		})
	}

	render() {
		const { fruits, oneFruit, multipleFruit } = this.state

		return (
			<div>
				<h2>受控组件和非受控组件</h2>

				{/* select 单选 */}
				{/* select 需要绑定 value 来控制  */}
				<div>
					<select
						name='fruits'
						value={oneFruit}
						onChange={e => this.handleSelectChange(e)}>
						{fruits.map(fruit => {
							return (
								<option value={fruit.value} key={fruit.value}>
									{fruit.text}
								</option>
							)
						})}
					</select>
				</div>

				<br />

				<div>
					<select
						name='fruits'
						value={multipleFruit}
						multiple
						onChange={e => this.handleMultipleSelectChange(e)}>
						{fruits.map(fruit => {
							return (
								<option value={fruit.value} key={fruit.value}>
									{fruit.text}
								</option>
							)
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default App
