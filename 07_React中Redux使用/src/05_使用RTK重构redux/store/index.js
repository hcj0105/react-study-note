// @reduxjs/toolkit 库，默认包含了 redux-thunk、redux-devtool的开启
import { configureStore } from '@reduxjs/toolkit'
import counterReducer, { counterActions } from './features/counter'
import homeReducer, { homeActions } from './features/home'

// configureStore 函数用于创建一个 store，他接受一个对象作为参数
// 这个对象有三个属性:
// 1. reducer: 每一个 slice 的 reducer
// 2. middleware: 中间件
// 3. devTools: 是否开启 redux-devtool, 默认true
const store = configureStore({
	reducer: {
		counterReducer,
		homeReducer
	}
})

export default store
export { counterActions, homeActions }
