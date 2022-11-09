import * as actionTypes from './constants'

const initialState = {
	banners: [],
	recommends: []
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_BANNERS:
			return { ...state, banners: action.banners }
		case actionTypes.SET_RECOMMENDS:
			return { ...state, recommends: action.recommends }
		default:
			return state
	}
}

export default reducer
