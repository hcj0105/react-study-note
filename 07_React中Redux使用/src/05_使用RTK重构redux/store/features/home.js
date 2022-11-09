import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// createAsyncThunk 用于创建 异步的 action
// 参数一: redux-devtool 中显示的操作名称
// 参数二: dispatch 这个 action 时回调的函数
const fetchHomeMultidataAction = createAsyncThunk(
	'home/fetchHomeMultidata',
	async (_, store) => {
		const res = await axios.get('http://123.207.32.32:8000/home/multidata')
		/**
		 * 数据保存到 store 中，方式一:
		 * 第一个参数是我们在派发当前的 action 时传递过来的参数
		 * 这个函数回调时会将 store 作为第二个参数传递过来
		 */
		// const banners = res.data.data.banner.list
		// const recommends = res.data.data.recommend.list
		// store.dispatch(homeSlice.actions.setBanners(banners))
		// store.dispatch(homeSlice.actions.setRecommends(recommends))

		/**
		 * 数据保存到 store 中，方式二:
		 * 将得到的数据作为这个函数的返回值返回,之后在 extraReducers 中添加监听函数.
		 */
		return res.data
	}
)

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		banners: [],
		recommends: []
	},
	reducers: {
		setBanners(state, { payload }) {
			state.banners = payload
		},
		setRecommends(state, { payload }) {
			state.recommends = payload
		}
	},
	// 其他 reducers，用于监听异步的 dispatch 的 action
	// 每个异步 dispatch 一个 action 后,都会有三种状态, pending fulfilled rejected
	// 并且将上一次的 state 与 分发的 action 传递过来
	extraReducers: {
		// (推荐)
		// [fetchHomeMultidataAction.pending](state, action) {},
		// [fetchHomeMultidataAction.rejected](state, action) {}
		[fetchHomeMultidataAction.fulfilled](state, { payload }) {
			// 会将 fetchHomeMultidataAction 传入的回调函数返回的数据传入到 action.payload 中
			state.banners = payload.data.banner.list
			state.recommends = payload.data.recommend.list
		}
	}

	// 如果不喜欢计算属性的写法可以使用 addCase 的方式进行链式调用, 将 extraReducers 写成函数的形式,会传递过来一个叫 builder 的参数
	// extraReducers(builder) {
	// 	builder.addCase(
	// 		fetchHomeMultidataAction.fulfilled,
	// 		(state, { payload }) => {
	// 			state.banners = payload.data.banner.list
	// 			state.recommends = payload.data.recommend.list
	// 		}
	// 	)
	// 	// .addCase(fetchHomeMultidataAction.pending, (state, action) => {})
	// 	// .addCase(fetchHomeMultidataAction.rejected, (state, action) => {})
	// }
})

export default homeSlice.reducer

const homeActions = {
	...homeSlice.actions,
	fetchHomeMultidataAction
}

export { homeActions }
