import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [counter, setCounter] = useState(100)
	const [message, setMessage] = useState('Hello World')

	/**
	 *  useEffect 可以传入2个参数
	 *  1. 回调函数： 当 组件初始化、组件更新 时回调
	 *  2. []:  传入多个值，表示该 useEffect 在依赖的某个state变化时才重新执行
	 *
	 *  如果一个函数不需要依赖某些状态时，比如 发送网络请求。 可以传入一个 [] 空数组。这样就只会执行一次
	 *  当传入第二个参数时。 useEffect 的两个回调函数会对应 componentDidMount 和 componentsWillUnmount 两个生命周期函数。
	 *  就可以在 第一个回调函数中监听事件， 在第二个回调函数中 取消监听。
	 */

	// 依赖 counter, 当 counter 改变时才会执行副作用，这样修改 message 的话就不会执行当前的副作用
	useEffect(() => {
		console.log('修改title')
	}, [counter])

	// 在第二个回调中取消监听
	useEffect(() => {
		console.log('监听eventBus的事件')

		return () => {
			console.log('取消eventBus的事件监听')
		}
	}, [])

	// 只执行一次
	useEffect(() => {
		console.log('监听redux的数据')
	}, [])

	useEffect(() => {
		console.log('发送网络请求，从服务器获取数据')
	}, [])

	return (
		<div>
			<h2>counter: {counter}</h2>
			<h2>message: {message}</h2>
			<button onClick={e => setCounter(counter + 1)}>+1</button>
			<button onClick={e => setMessage('你好啊，世界!')}>修改文本</button>
		</div>
	)
})

export default App
