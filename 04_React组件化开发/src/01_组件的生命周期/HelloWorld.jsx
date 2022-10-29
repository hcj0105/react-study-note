import React from 'react'

class HelloWorld extends React.Component {
	// 1. 组件创建时先执行 constructor 函数
	constructor() {
		super()
		console.log('HelloWorld constructor')
	}

	// 2. 组件执行render函数，将React元素渲染到页面中
	render() {
		console.log('HelloWorld render')
		return <h2>HelloWorld Component</h2>
	}

	// 3. 组件挂载到页面时触发的生命周期函数。
	componentDidMount() {
		console.log('HelloWorld componentDidMount')
	}

	// 4. 组件更新时触发的生命周期函数
	// 生命周期可以接收三个参数
	// preProps: 更新前的Props
	// preState: 更新前的State
	// snapshot: `getSnapshotBeforeUpdate`生命周期返回的数据
	componentDidUpdate(preProps, preState, snapshot) {
		console.log('HelloWorld componentDidUpdate')
		console.log(preProps, preState, snapshot)
	}

	// 5. 组件卸载前时触发的生命周期函数
	componentWillUnmount() {
		console.log('HelloWorld componentWillUnmount')
	}

	/* 其他不常用的生命周期函数 */
	
	// state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state
	static getDerivedStateFromProps() {
		console.log('HelloWorld getDerivedStateFromProps')
	}

	// 在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）
	// 返回的值可以在 `componentDidUpdate` 生命周期中获取到
	getSnapshotBeforeUpdate() {
		console.log('HelloWorld getSnapshotBeforeUpdate')
	}

	// 执行render函数前执行的生命周期函数，可以选择是否执行render函数。 true触发更新，false组织更新
	shouldComponentUpdate() {
		console.log('HelloWorld shouldComponentUpdate')
	}
}

export default HelloWorld
