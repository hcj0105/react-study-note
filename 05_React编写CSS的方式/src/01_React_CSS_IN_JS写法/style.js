// 1. 安装 styled-components 库
// 2. 从 styled-components 导入 styled 对象
import styled from 'styled-components'

// 3. 使用 styled 定义样式，最后返回一个 'div' 组件，也可以返回其他元素
// 4. 因为返回的是一个组件，所以可以接收props
export const AppWrapper = styled.div`
	padding: 20px 40px;
	/* 使用 AppWrapper 传入的 props 属性 */
	background: ${props => props.bgColor};
	border: 1px solid red;

	.title {
		/* 使用 ThemeProvider 提供的主题颜色、字体大小 */
		color: ${props => props.theme.color};
		font-size: ${props => props.theme.fonstSize};
	}

	.content {
		&-title {
			color: orange;
			font-size: 20px;
		}

		&-banner {
			color: yellow;
			font-size: 24px;
		}
	}
`

// 5.可以使用 attrs 定义默认值
export const Input = styled.input.attrs(props => ({
	placeholder: '正在输入...',
  // 设置默认值
	borderColor: props.theme.color || 'black'
}))`
	outline: none;
	padding: 5px;
	border: 1px solid ${props => props.borderColor};
`
