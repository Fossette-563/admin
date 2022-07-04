import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import tagsview from './modules/tagsview'
export default createStore({
  modules: {
    user,
    permission,
    tagsview
  },
  getters
})
