import React, { memo, useState } from 'react'

const App = memo(props => {
	const [message, setMessage] = useState('Hello World')

	return (
		<div>
			<h2>{message}</h2>
			<button onClick={e => setMessage('你好啊，世界!')}>修改文本</button>
		</div>
	)
})

export default App
