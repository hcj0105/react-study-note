import { PureComponent } from 'react'

/**
 * 对源组件进行props增强
 * 返回一个拥有 userInfo 的组件
 */
function enhanceProps(OriginComponent) {
	return class extends PureComponent {
		constructor() {
			super()
			this.state = {
				userInfo: {
					name: 'y_mixin_o',
					age: 21
				}
			}
		}

		render() {
			// 记得把当前组件的接收的props也传给源组件
			// 因为高阶组件只是对源组件进行了一层拦截
			// 实际上我们要使用的还是源组件
			return <OriginComponent {...this.props} {...this.state.userInfo} />
		}
	}
}

export default enhanceProps
