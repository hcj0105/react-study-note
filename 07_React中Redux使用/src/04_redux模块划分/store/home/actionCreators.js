import * as actionTypes from './constants'
import axios from 'axios'

const setBannersAction = banners => ({ type: actionTypes.SET_BANNERS, banners })
const setRecommendsAction = recommends => ({
	type: actionTypes.SET_RECOMMENDS,
	recommends
})

const fetchHomeMultidataAction = () => {
	return async function (dispatch, getState) {
		const res = await axios.get('http://123.207.32.32:8000/home/multidata')
		const banners = res.data.data.banner.list
		const recommends = res.data.data.recommend.list

		dispatch(setBannersAction(banners))
		dispatch(setRecommendsAction(recommends))
	}
}

export { fetchHomeMultidataAction }
