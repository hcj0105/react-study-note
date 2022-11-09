const store = require('./store')
const { changeAgeAction, changeNameAction } = require('./store/actionCreators')

// 通过 getState 函数可以获取当前 store 中的状态
console.log(store.getState())

// 通过 dispatch 可以分发一个 action 来修改 store 中的数据，也是唯一的做法
// dispatch 函数需要传入一个 action，一个 action 中需要两个属性，type、playload。
store.dispatch(changeNameAction('哈哈哈'))
console.log(store.getState())
store.dispatch(changeNameAction('嘻嘻嘻'))
console.log(store.getState())

store.dispatch(changeAgeAction(22))
console.log(store.getState())
store.dispatch(changeAgeAction(35))
console.log(store.getState())
store.dispatch(changeAgeAction(40))
console.log(store.getState())
