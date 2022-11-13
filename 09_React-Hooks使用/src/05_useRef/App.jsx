import React, { memo, useCallback, useRef, useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(0)
	const titleRef = useRef()

	/**
	 *  useRef 在组件卸载前,都会返回同一个对象
	 */

	// 1. 获取dom
	const showTitleDOm = () => console.log(titleRef.current)

	// 2. 解决闭包陷阱
	// 每次渲染时都会拿到同一个对象
	const countRef = useRef()
	countRef.current = count
	const incerment = useCallback(() => setCount(countRef.current + 1), [])

	return (
		<div>
			<h2>当前计数: {count}</h2>
			<h2 ref={titleRef}>Hello World</h2>
			<button onClick={e => incerment()}>+1</button>
			<button onClick={showTitleDOm}>获取titleDom</button>
		</div>
	)
})

export default App
