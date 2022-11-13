// import React, { PureComponent } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '../router/routes'

export function Main() {
	return (
		<>
			<main className='main'>{useRoutes(routes)}</main>
		</>
	)
}

export default Main
