import React, { PureComponent, createRef, memo, forwardRef } from 'react'

// class Home extends PureComponent {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Home Component</h2>
// 			</div>
// 		)
// 	}
// }

const Home = forwardRef((prosp, ref) => {
	return (
		<div>
			<h2 ref={ref}>Home Component</h2>
		</div>
	)
})

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {}

		this.homeRef = createRef()
	}

	getDOM() {
		// 获取Class组件实例
		// const homeInstance = this.homeRef.current
		// console.log(homeInstance)

		/*
      获取函数式组件实例: 
      因为函数并没有实例，所以无法获取到函数式组件的实例,。
      如果有需求想要获取到函数组件中的某个元素，可以通过 forwardRef 高阶函数来获取
    */
		console.log(this.homeRef.current)
	}

	render() {
		return (
			<div>
				<Home ref={this.homeRef} />
				<button onClick={() => this.getDOM()}>获取dom</button>
			</div>
		)
	}
}

export default App
