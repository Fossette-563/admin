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

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
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
