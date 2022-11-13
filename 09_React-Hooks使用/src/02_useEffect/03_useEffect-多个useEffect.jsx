import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [counter, setCounter] = useState(100)

	/**
	 * useEffect 可以定义多个
	 * 多个 useEffect 按照定义的顺序，顺序执行
	 */
	useEffect(() => {
		console.log('修改title')
	})

	useEffect(() => {
		console.log('监听redux的数据')
	})

	useEffect(() => {
		console.log('监听eventBus的事件')
	})

	useEffect(() => {
		console.log('发送网络请求，从服务器获取数据')
	})

	return (
		<div>
			<h2>counter: {counter}</h2>
			<button onClick={e => setCounter(counter + 1)}>+1</button>
		</div>
	)
})

export default App
