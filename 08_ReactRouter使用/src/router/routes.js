import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import HomeProduct from '../pages/HomeProduct'
import HomeRecommend from '../pages/HomeRecommend'
import Detail from '../pages/Detail'
// import User from '../pages/User'

// import About from '../pages/About'
// import NotFound from '../pages/NotFound'

// 路由懒加载
const About = React.lazy(() => import('../pages/About'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const User = React.lazy(() => import('../pages/User'))

const routes = [
	{
		path: '/',
		element: <Navigate to='/home' />
	},
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: '/home',
				element: <Navigate to='/home/product' />
			},
			{
				path: '/home/product',
				element: <HomeProduct />
			},
			{
				path: '/home/recommend',
				element: <HomeRecommend />
			}
		]
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/detail/:id',
		element: <Detail />
	},
	{
		path: '/user',
		element: <User />
	},
	{
		path: '*',
		element: <NotFound />
	}
]

export default routes
