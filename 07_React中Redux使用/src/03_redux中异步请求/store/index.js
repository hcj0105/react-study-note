import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

// 使用 thunk 中间件 可以让 redux 分发 action 时分发一个方法。
import thunk from 'redux-thunk'

// 正常情况下 store.dispatch(object)
// 想要派发函数 store.dispatch(function)，需要使用中间件 thunk

// 默认情况下 redux-devtool 是关闭的需要打开。
// 注意: 生产环境需要关闭，这里可以做下判断
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
