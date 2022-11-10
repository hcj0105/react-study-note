import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
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
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
