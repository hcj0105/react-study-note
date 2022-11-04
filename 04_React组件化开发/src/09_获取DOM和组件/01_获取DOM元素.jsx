import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {}

		this.titleRef = createRef()

    this.titleEl = null
	}

	getDOM() {
    // 1. 传入一个字符串，通过refs获取dom (不推荐)
    // console.log(this.refs.title)

    // 2. 传入一个对象(createRef函数创建的对象)，通过 .current 获取到dom
    // console.log(this.titleRef.current)

    // 3. 传入一个函数, 在dom渲染的时候会执行这个函数，将元素传入
    console.log(this.titleEl)
  }

	render() {
		return (
			<div>
        {/* 方式一: */}
				{/* <h2 ref="title">Hello Wolrd</h2> */}
        {/* 方式二: */}
				{/* <h2 ref={this.titleRef}>Hello Wolrd</h2> */}
        {/* 方式三: */}
				<h2 ref={el => this.titleEl = el}>Hello Wolrd</h2>
				<button onClick={() => this.getDOM()}>获取dom</button>
			</div>
		)
	}
}

export default App
