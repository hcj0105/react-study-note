import * as actionTypes from './constants'

const addCounterAction = counter => ({ type: actionTypes.ADD_COUNTER, counter })

const subCounterAction = counter => ({ type: actionTypes.SUB_COUNTER, counter })

export { addCounterAction, subCounterAction }
