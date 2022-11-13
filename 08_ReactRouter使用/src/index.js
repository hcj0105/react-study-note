import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './global.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{/* 
			react-router 如果要开启路由的模式，可以使用 
			BrowserRouter、HashRouter 两个组件将内容包裹
		*/}
		<BrowserRouter>
			{/* 使用路由懒加载需要配置  Suspense, 通过配置 fallback 来显示路由组件还没下载时显示的内容*/}
			<Suspense fallback={<div>Loading...</div>}>
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
)
