// 统一创建相同的 action
const { CHANGE_NAME, CHANGE_AGE } = require('./constants')

const changeNameAction = name => {
	return { type: CHANGE_NAME, name }
}

const changeAgeAction = age => {
	return { type: CHANGE_AGE, age }
}

module.exports = {
	changeNameAction,
	changeAgeAction
}
