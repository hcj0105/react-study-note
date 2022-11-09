const store = require('./store')
const { changeAgeAction, changeNameAction } = require('./store/actionCreators')

// 通过 getState 函数可以获取当前 store 中的状态
console.log(store.getState())
