import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './01_useState/App'
// import App from './02_useEffect/01_useEffect-基本使用'
// import App from './02_useEffect/02_useEffect-清除Effect'
// import App from './03_useCallback/App'
// import App from './04_useMemo/App'

import App from './05_useRef/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
