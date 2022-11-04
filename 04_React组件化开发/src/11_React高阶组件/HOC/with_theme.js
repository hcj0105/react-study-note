import ThemeContext from '../Context/theme_context'

/**
 * 返回一个拥有 ThemeContext 提供的属性的组件
 */
function withTheme(OriginComponent) {
	return props => {
		return (
			<ThemeContext.Consumer>
				{value => {
					// 将Context共享的主题都
					return <OriginComponent {...props} {...value} />
				}}
			</ThemeContext.Consumer>
		)
	}
}

export default withTheme
