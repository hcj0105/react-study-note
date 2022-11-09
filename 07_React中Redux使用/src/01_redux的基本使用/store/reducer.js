import * as actionTypes from './constants'

const initialState = {
	counter: 100
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_COUNTER:
			return { ...state, counter: state.counter + action.counter }
		case actionTypes.SUB_COUNTER:
			return { ...state, counter: state.counter - action.counter }
		default:
			return state
	}
}

export default reducer
