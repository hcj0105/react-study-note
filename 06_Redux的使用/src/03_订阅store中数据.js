const store = require('./store')
const { changeAgeAction, changeNameAction } = require('./store/actionCreators')

// 在每次修改数据后我们都需要通过 getState 函数获取数据，不太方便
// 可以通过 subscribe 函数 传入一个回调函数来订阅store，内部会在每次修改数据后回调这个函数。
// 这样就不用每次修改完都获取一次数据。
// subscribe 函数会返回一个函数用于取消订阅
const unSubscribe = store.subscribe(() => {
	console.log(store.getState())
})

// 通过 dispatch 可以分发一个 action 来修改 store 中的数据，也是唯一的做法
// dispatch 函数需要传入一个 action，一个 action 中需要两个属性，type、playload。
store.dispatch(changeNameAction('哈哈哈'))
store.dispatch(changeNameAction('嘻嘻嘻'))

store.dispatch(changeAgeAction(22))
store.dispatch(changeAgeAction(35))

// 取消订阅
unSubscribe()

store.dispatch(changeAgeAction(40))
