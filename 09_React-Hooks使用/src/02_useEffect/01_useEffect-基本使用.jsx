import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [counter, setCounter] = useState(100)

	// 需求：在每次修改counter的时候将title也修改为counter的值
	useEffect(() => {
		document.title = counter
	})

	/**
	 * useEffect 用于编写关于副作用相关的操作
	 * useEffect 会在 组件第一次渲染、组件重新渲染 的时候执行传入的回调函数
	 */

	return (
		<div>
			<h2>counter: {counter}</h2>
			<button onClick={e => setCounter(counter + 1)}>+1</button>
		</div>
	)
})

export default App
