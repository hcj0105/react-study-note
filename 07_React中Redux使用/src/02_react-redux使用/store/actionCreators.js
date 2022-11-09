import * as actionTypes from './constants'

const addCounterAction = counter => {
	return { type: actionTypes.ADD_COUNTER, counter }
}

const subCounterAction = counter => {
	return { type: actionTypes.SUB_COUNTER, counter }
}

export { addCounterAction, subCounterAction }
