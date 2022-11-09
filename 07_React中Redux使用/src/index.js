import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// import App from './01_Redux在React基本使用/App'
// import store from './01_redux的基本使用/store'

// import App from './02_react-redux使用/App'
// import store from './02_react-redux使用/store'

// import App from './03_redux中异步请求/App'
// import store from './03_redux中异步请求/store'

// import App from './04_redux模块划分/App'
// import store from './04_redux模块划分/store'

import App from './05_使用RTK重构redux/App'
import store from './05_使用RTK重构redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{/* 通过 Provider 为子元素提供 store */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
