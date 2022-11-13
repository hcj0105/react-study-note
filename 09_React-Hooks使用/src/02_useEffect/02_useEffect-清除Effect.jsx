import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [counter, setCounter] = useState(100)

	/**
	 * useEffect 传入的回调函数可以返回一个函数。
	 * 这个函数会在 组件更新、组件卸载的时候执行。比useEffect的回调函数先执行。（第一次不会执行）
	 */
	useEffect(() => {
		document.title = counter

		return () => {
			console.log('取消修改title')
		}
	})

	return (
		<div>
			<h2>counter: {counter}</h2>
			<button onClick={e => setCounter(counter + 1)}>+1</button>
		</div>
	)
})

export default App
