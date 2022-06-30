import request from '../utils/request'

/**
 * 登录接口
 * @param {Object} data
 * @method
 * @returns
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}

/**
 *
 * @returns 获取用户信息
 */
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}

export default {
  login,
  getUserInfo
}
