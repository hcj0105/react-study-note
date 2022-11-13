import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeProduct extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			productList: [
				{ id: 123, name: '商品列表1' },
				{ id: 124, name: '商品列表2' },
				{ id: 125, name: '商品列表3' },
				{ id: 126, name: '商品列表4' },
				{ id: 127, name: '商品列表5' }
			]
		}
	}

	render() {
		const { productList } = this.state

		const { navigate } = this.props.router

		return (
			<div>
				<h2>HomeProduct Page</h2>
				<ul>
					{productList.map(product => (
						<li
							key={product.id}
							onClick={e => navigate(`/detail/` + product.id)}>
							{product.name}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default withRouter(HomeProduct)
