const { CHANGE_AGE, CHANGE_NAME } = require('./constants')

// 初始化状态
const initialState = {
	name: 'y_mixin_o',
	age: 21
}

// reducer：必须是一个纯函数
// reducer 接收两个参数
// 1. state: 修改前的 state
// 2. action: 需要修改的载体
function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.name }
		case CHANGE_AGE:
			return { ...state, age: action.age }
		default:
			return state
	}
}

module.exports = reducer
