import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class Header extends PureComponent {
	render() {
		return (
			<>
				<header className='header'>
					<h2>header</h2>
					{/* 使用 Link 组件可以进行路由跳转  */}
					<Link to='/home'> 首页 </Link>
					<Link to='/about'> 关于 </Link>
					<Link to='/user?name=y_mixin_o&age=18'>用户</Link>
				</header>
			</>
		)
	}
}

export default Header
