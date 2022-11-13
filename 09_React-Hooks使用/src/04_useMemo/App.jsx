import React, { memo, useCallback, useMemo, useState } from 'react'

const calcNumTotal = num => {
	console.log('执行calcNumTotal函数')
	let total = 0
	for (let i = 1; i <= num; i++) {
		total += i
	}
	return total
}

const HelloWorld = memo(props => {
	console.log('HelloWorld组件被重新渲染')
	return (
		<h2>
			{props.info.name}-{props.info.age}
		</h2>
	)
})

const App = memo(() => {
	const [count, setCount] = useState(0)

	/**
	 * useMemo 记忆一个值,返回传入函数的返回值.
	 * 当依赖没有发生变化时才会重新执行传入的函数.
   * 
   * 优化点:
   * 1. 当计算一些复杂的东西,不希望每次渲染的时候都执行一次,就可以使用useMemo
   * 2. 对子组件传递相同对象的时候,不希望组件重新渲染,可以使用 useMemo 包裹
	 */

	// 1. 不依赖任何state, 所以在组件重新渲染时,不会执行新的函数不会返回新的值.
	const total = useMemo(() => calcNumTotal(50), [])

	// 2. 返回一个对象, 不依赖任何state
	const info = useMemo(() => ({ name: 'y_mixin_o', age: 18 }), [count])

  // 3. useMemo useCallback 对比
  // const fn = () => console.log('我是fn')
  // const fn1 = useMemo(() => fn, []) 
  // 等价于
  // const fn2 = useCallback(fn, [])

	return (
		<div>
			<h2>当前计数: {count}</h2>
			<h2>当前总和: {total}</h2>
			<button onClick={e => setCount(count + 1)}>+1</button>
			{/* 将 info 传给 HelloWorld 组件 */}
			<HelloWorld info={info} />
		</div>
	)
})

export default App
