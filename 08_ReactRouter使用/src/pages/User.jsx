import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
	render() {
		const { query } = this.props.router

		return (
			<div>
				User: {query.name}-{query.age}
			</div>
		)
	}
}

export default withRouter(User)
