import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
	render() {
		return (
			<div>
				<h2>Home Page</h2>
				<Link to='/home/product'>商品列表</Link>
				<Link to='/home/recommend'>热门商品</Link>

				{/* Outlet 组件用于占位（类似于router-view），路由匹配到时将组件渲染到这里 */}
				<Outlet />
			</div>
		)
	}
}

export default Home
