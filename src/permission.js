/**
 * 引入路由控制跳转
 * 引入store---vuex判断是否有token
 */
import router from './router'
import store from './store'
/**
 * 路由守卫
 */
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  console.log(token)
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      // // 如果当前是登录页面，就判断是否有用户信息
      // // 如果没有用户信息就获取
      if (!store.getters.hasUserInfo) {
        const reponse = await store.dispatch('user/getUserInfo')
        if (reponse) {
          // 将获取的用户信息赋值并解构
          const { permission } = reponse
          console.log('menus', permission.menus)
          const filterRoutes = await store.dispatch(
            'permission/filterRoutes',
            permission.menus
          )
          filterRoutes.forEach((item) => {
            router.addRoute(item)
          })
          // to即将要跳转的路由
          return next(to.path)
        } else {
          next('./login')
        }
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
