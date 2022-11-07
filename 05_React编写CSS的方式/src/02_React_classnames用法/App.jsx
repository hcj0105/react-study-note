import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			isAAA: false,
			isBBB: true,
			isCCC: true
		}
	}

	render() {
    const {isAAA, isBBB, isCCC} = this.state
    const classList = []
    if (isAAA)  classList.push('aaa')
    if (isBBB)  classList.push('bbb')
    if (isCCC)  classList.push('ccc')
    const cNames = classList.join(' ')
    

		return (
			<div>
				<h2 className={`${isAAA ? 'aaa' : ''} ${isBBB ? 'bbb' : ''} ${isCCC ? 'ccc' : ''}`}>我是标题</h2>
        <h2 className={cNames}>我是标题</h2>
        {/* classnames 可以动态的添加class名称 */}
        {/* 数组用法 */}
        <h2 className={classnames([{'aaa': isAAA}, {'bbb': isBBB}, {'ccc': isCCC}])}>我是标题</h2>
        {/* 字符串用法 */}
        <h2 className={classnames('ddd', 'eee')}>我是标题</h2>
        {/* 对象用法 */}
        <h2 className={classnames({'ggg': true}, {'vvv': false})}>我是标题</h2>

			</div>
		)
	}
}

export default App
