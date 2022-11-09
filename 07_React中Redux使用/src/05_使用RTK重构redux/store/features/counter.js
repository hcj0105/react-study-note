import { createSlice } from '@reduxjs/toolkit'

// createSlice 用于创建每一个片段，本质上就是每一个模块化的 reducer。
// 接收一个对象，这个对象有三个属性:
const counterSlice = createSlice({
	// 在 redux-devtool 中显示的名称
	name: 'counter',
	// reducer 的初始化值
	initialState: {
		counter: 888
	},
	// 每一个 action, 每一个action 并不能直接调用，还是需要通过 dispatch 进行派发每一个action
	// 注意: 每个 action 方法，不需要返回一个新的 state，只需要拿到 state 进行修改内部会帮我们生成新的 state
	reducers: {
		addCounter(state, { payload }) {
			state.counter += payload
		},
		subCounter(state, { payload }) {
			state.counter -= payload
		}
	}
})

export default counterSlice.reducer
export const counterActions = {
	...counterSlice.actions
}
