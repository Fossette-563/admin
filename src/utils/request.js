// 封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import md5 from 'md5'
import loading from './loading'
const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 开启loading
    loading.open()
    const { icode, time } = getTestICode()
    // icod解密
    config.headers.icode = icode
    config.headers.codeType = time
    // 将token发送给后台
    // if (store.getters.token) {
    //   config.headers.Authorization = `Bearer ${store.getters.token}`
    // }
    return config
  },
  (error) => {
    // 关闭loading
    loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 关闭loading
    loading.close()
    // 数据解构处理
    const { success, data, message } = response.data
    // 响应信息提示处理
    if (success) {
      return data
    } else {
      // ElMessage.error(message)
      _showError(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 关闭loading
    loading.close()
    // 响应失败信息提示
    // ElMessage.error(error.message)
    _showError(error.message)
    return Promise.reject(error)
  }
)
// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}
// 统一传参
const requset = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default requset
