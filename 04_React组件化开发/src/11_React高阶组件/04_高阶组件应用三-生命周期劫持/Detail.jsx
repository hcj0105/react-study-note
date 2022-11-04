import React, { PureComponent } from 'react'
import logRenderTime from '../HOC/log_render_time'

export class Detail extends PureComponent {
	render() {
		return (
			<div>
				<p>列表详情:</p>
				<ul>
					<li>数据列表1</li>
					<li>数据列表2</li>
					<li>数据列表3</li>
					<li>数据列表4</li>
					<li>数据列表5</li>
					<li>数据列表6</li>
					<li>数据列表7</li>
					<li>数据列表8</li>
					<li>数据列表9</li>
					<li>数据列表10</li>
				</ul>
			</div>
		)
	}
}

export default logRenderTime(Detail)
