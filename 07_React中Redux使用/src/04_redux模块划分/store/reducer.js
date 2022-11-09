import { combineReducers } from 'redux'

import homeReducer from './home'
import counterReducer from './counter'

export default combineReducers({
	homeReducer,
	counterReducer
})
