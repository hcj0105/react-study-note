import { PureComponent } from 'react'
import StoreContext from './StoreContext'

// connect 是一个高阶函数
export default function connect(mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶组件
	return function (WrapperCommponent) {
		class NewCommponent extends PureComponent {
			constructor(props, context) {
				super(props)
				// 初始值
				this.state = context.getState()
			}

			componentDidMount() {
				// 订阅 store 中 state 的变化
				this.unSubscribe = this.context.subscribe(() => {
					this.setState(this.context.getState())
				})
			}

			componentWillUnmount() {
				// 取消订阅
				this.unSubscribe()
			}

			render() {
				// 回调 mapStateToProps 函数将 state 数据传出去
				const state = mapStateToProps(this.context.getState())
				// 回调 mapDispatchToProps 函数将 store.dispatch 传出去
				const dispatch = mapDispatchToProps(this.context.dispatch)

				return <WrapperCommponent {...this.props} {...state} {...dispatch} />
			}
		}

		NewCommponent.contextType = StoreContext

		return NewCommponent
	}
}
