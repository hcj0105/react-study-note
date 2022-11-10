import React, { PureComponent } from 'react'
import AppLayout from './layout/AppLayout'
import AppWrapper from './styles/App'

export class App extends PureComponent {
	render() {
		return (
			<AppWrapper>
				<AppLayout />
			</AppWrapper>
		)
	}
}

export default App
