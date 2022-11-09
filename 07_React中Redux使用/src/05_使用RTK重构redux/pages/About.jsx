import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { homeActions } from '../store'

export class About extends PureComponent {
	componentDidMount() {
		this.props.fetchHomeMultidata()
	}

	render() {
		const { banners, recommends } = this.props
		return (
			<div>
				<h2>轮播图数据</h2>
				<ul>
					{banners.map(banner => (
						<li key={banner.title}>{banner.title}</li>
					))}
				</ul>
				<h2>推荐的数据</h2>
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
	fetchHomeMultidata: () => dispatch(homeActions.fetchHomeMultidataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
