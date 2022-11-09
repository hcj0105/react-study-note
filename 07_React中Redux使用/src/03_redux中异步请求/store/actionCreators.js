import * as actionTypes from './constants'
import axios from 'axios'

const addCounterAction = counter => ({ type: actionTypes.ADD_COUNTER, counter })

const subCounterAction = counter => ({ type: actionTypes.SUB_COUNTER, counter })

const setBannersAction = banners => ({ type: actionTypes.SET_BANNERS, banners })
const setRecommendsAction = recommends => ({
	type: actionTypes.SET_RECOMMENDS,
	recommends
})

const fetchHomeMultidataAction = () => {
	// 使用 thunk 中间件后, 在派发 action 时内部会回调这个 action 返回的这个函数
	// 这个函数会将 dispatch、getState 这两个函数作为参数传递过来
	// 之后哦我们回调异步请求拿到数据后通过 dispatch 派发 action，将数据存储到 store 中
	return async function (dispatch, getState) {
		const res = await axios.get('http://123.207.32.32:8000/home/multidata')
		const banners = res.data.data.banner.list
		const recommends = res.data.data.recommend.list

		dispatch(setBannersAction(banners))
		dispatch(setRecommendsAction(recommends))
	}
}

export { addCounterAction, subCounterAction, fetchHomeMultidataAction }
