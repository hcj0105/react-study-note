/**
 * 返回一个判断是否授权过的组件
 */
function withAuth(OriginComponent) {
  return props => {
    const token = localStorage.getItem('token')
    return token ? <OriginComponent {...props}/> : <div>请先登录，当前页面需要登录后才能查看！</div>
  }
}

export default withAuth