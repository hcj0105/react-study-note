import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchHomeMultidataAction } from '../store/home'

export class Category extends PureComponent {
	componentDidMount() {
		this.props.fetchHomeMultidata()
	}

	render() {
		const { banners, recommends } = this.props

		return (
			<div>
				<h2>Category Page</h2>
				<h2>轮播图:</h2>
				<ul>
					{banners.map(banner => (
						<li key={banner.title}>{banner.title}</li>
					))}
				</ul>
				<h2>推荐商品:</h2>
				<ul>
					{recommends.map(recommend => (
						<li key={recommend.title}>{recommend.title}</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	banners: state.homeReducer.banners,
	recommends: state.homeReducer.recommends
})
const mapDispatchToProps = dispatch => ({
	// 如果需要异步操作，可以通过分发一个 action，这个 action 需要返回一个方法。
	fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
