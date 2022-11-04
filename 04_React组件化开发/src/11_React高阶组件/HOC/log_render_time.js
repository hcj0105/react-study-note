import { PureComponent } from 'react'

/**
 * 返回一个可以打印组件渲染时间的新组件
 */
function logRenderTime(OriginComponent) {
	return class extends PureComponent {
		UNSAFE_componentWillMount() {
			this.startTime = new Date().getTime()
		}

		componentDidMount() {
			this.endTime = new Date().getTime()
			const interval = this.endTime - this.startTime
			console.log(`当前组件${OriginComponent.name}花费${interval}ms渲染完成!`)
		}

		render() {
			return <OriginComponent {...this.props} />
		}
	}
}

export default logRenderTime
