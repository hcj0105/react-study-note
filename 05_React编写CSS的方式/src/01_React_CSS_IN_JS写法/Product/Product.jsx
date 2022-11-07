import React, { PureComponent } from 'react'
import { ProductWrapper } from './style'

export class Product extends PureComponent {
	render() {
		return (
			<ProductWrapper>
				<ul className='list'>
					<li className='item'>商品列表1</li>
					<li className='item'>商品列表2</li>
					<li className='item'>商品列表3</li>
					<li className='item'>商品列表4</li>
					<li className='item'>商品列表5</li>
				</ul>
			</ProductWrapper>
		)
	}
}

export default Product
