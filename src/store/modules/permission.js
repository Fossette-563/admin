// 引入路由
import { publicRoutes, privateRoutes } from '../../router'

export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  metations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      // menus 登录之后后台所返回的用户所有的路由权限数据
      // privateRoutes 自定义的所有私有路由表
      const routes = []
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        routes.push(...data)
      })
      // 添加 重定向 404 路由
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      console.log(routes)
      return routes
    }
  }
}
