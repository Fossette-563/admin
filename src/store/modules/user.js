import UserApi from '../../api/user'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {}
  }),
  mutations: {
    // token
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    // 用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 用户信息
    async getUserInfo(context) {
      const res = await this.getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    // 登录请求
    async login({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        commit('setToken', response.token)
        return response
      } catch (err) {
        console.log(err)
      }
    }
  }
}
