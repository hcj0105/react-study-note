import React, { memo, useCallback, useState } from 'react'

// useCallback 的优化不是为了缓存当前的函数，而是为了不让子组件进行渲染。

const HelloWorld = memo(props => {
	console.log('HelloWorld组件被渲染')

	const { incerment } = props

	return (
		<div>
			<button onClick={incerment}>incerment+1</button>
		</div>
	)
})

const App = memo(() => {
	const [count, setCount] = useState(0)
	const [message, setMessage] = useState('Hello')

	/**
	 * useCallback 会将传入的函数作为记忆，并且返回这个函数。在依赖没有发生变化时，都会返回记忆的函数。
	 * useCallback 可以用来做性能优化，但并不是优化函数的重复利用(只定义一次)，而是为了让子组件做性能优化。
	 *
	 * 优化点: useCallback 传入的函数每次在组件渲染的时候都会被创建,所以并不是为了优化函数,而是为了给子组件做性能优化
	 */

	// 1. 基本使用: 将传入的函数作为返回值，在每一次组件渲染的时候都会返回新的函数
	// const incerment = useCallback(() => setCount(count + 1))

	// 2. 传入第二个参数: 传入第二个参数意味当前返回的函数会被记忆依赖于传入的state,当状态没有改变会使用记忆的函数.如果传入空数组表示谁都不依赖
	// const incerment = useCallback(() => setCount(count + 1), []) // (闭包陷阱)

	// 3. 依赖于count
	const incerment = useCallback(() => setCount(count + 1), [count])

	return (
		<div>
			<h2>当前计数: {count}</h2>
			<button onClick={e => incerment()}>+1</button>
			{/* 
        4. useCallback的优化: 将useCallback返回的函数传入到子组件中,当依赖没有发生变化的时候useCallback就会返回记忆的函数
        之后将函数传入到子组件中,子组件发现props没有变化,那么就不会重新渲染组件,就可以做到性能优化
      */}
			<HelloWorld incerment={incerment} />

			{/* 当message发生变化, HelloWorld 组件并不会重新渲染 */}
			<h2>message: {message}</h2>
			<button onClick={e => setMessage('你好啊')}>修改文本</button>
		</div>
	)
})

export default App
