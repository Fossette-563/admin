/**
 * 获取所有的非一级路由数据（children【】)
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  console.log('hh', result)
  return result
}
/**
 * 获取所有的一级数据
 */
export const filterRouters = (routes) => {
  // childrenRoutes:所有的子路由
  const childrenRouter = getChildrenRoutes(routes)
  // routes完整的路由16数据
  return routes.filter((route) => {
    return !childrenRouter.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 检测空对象以及检测空数据 如果为空返回true
 */
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

/**
 * 将所有的一级路由数据处理成菜单数据
 */
export const generateMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return

    if (isNull(item.meta) && !isNull(item.children)) {
      return result.push(...generateMenus(item.children))
    }
    const routePath = item.path
    let route = result.find((route) => route.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  console.log(result)
  return result
}
