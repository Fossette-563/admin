import UserApi from '../../api/user'
import { setItem, getItem, removeItem } from '@/utils/storage'
import { resetRouter } from '@/utils/removeRouter'
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
    // 退出
    logout({ commit }) {
      resetRouter()
      commit('setToken', '')
      commit('setUserInfo', '{}')
      removeItem('token')
      removeItem('userInfo')
    },
    // 用户信息
    async getUserInfo({ commit }) {
      try {
        const res = await UserApi.getUserInfo()
        commit('setUserInfo', res)
        console.log('res', res)
        return res
      } catch (error) {
        console.log(error)
      }
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
