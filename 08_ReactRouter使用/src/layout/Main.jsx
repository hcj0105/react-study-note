import React, { PureComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import HomeProduct from '../pages/HomeProduct'
import HomeRecommend from '../pages/HomeRecommend'

export class Main extends PureComponent {
	render() {
		return (
			<>
				<main className='main'>
					{/* 所有的 Route 组件都需要在包裹在 Routes 下 */}
					<Routes>
						{/* 
							一级路由: 
							path: 跳转的路由地址
							element: 路由跳转后渲染的组件
						*/}
						{/* Navigate 组件用于重定向，当这个组件渲染后就会跳转到对应的路由 */}
						<Route path='/' element={<Navigate to='/home' />} />
						<Route path='/home' element={<Home />}>
							{/* 二级路由直接写到一级路由的 Route 中 */}
							<Route path='/home' element={<Navigate to='/home/product' />} />
							<Route path='/home/product' element={<HomeProduct />} />
							<Route path='/home/recommend' element={<HomeRecommend />} />
						</Route>
						<Route path='/about' element={<About />} />
					</Routes>
				</main>
			</>
		)
	}
}

export default Main
