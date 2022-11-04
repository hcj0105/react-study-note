import React, { PureComponent } from 'react'
import withTheme from '../HOC/with_theme'

export class Product extends PureComponent {
	render() {
		const { color, fontSize } = this.props

		return (
			<div>
				Product Theme: {color}-{fontSize}
			</div>
		)
	}
}

export default withTheme(Product)
