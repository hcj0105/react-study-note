import {
	useNavigate,
	useParams,
	useLocation,
	useSearchParams
} from 'react-router-dom'

function withRouter(WrapperCommponent) {
	return function (props) {
		// 手动跳转: click， navigate(pathName)
		const navigate = useNavigate() // 拿到路由跳转方法

		// 1. 路由传参1: /detail/:id
		const params = useParams() // 拿到参数

		// 2. 路由传参2: /user?name=y_mixin_o&age=18
		const location = useLocation() // 拿到路由信息
		const [searchParams] = useSearchParams() // 获取URLSearchParams对象
		const query = Object.fromEntries(searchParams) // 将可迭代对象转成对象形式

		const router = {
			navigate,
			params,
			location,
			query
		}

		return <WrapperCommponent {...props} router={router} />
	}
}

export default withRouter
