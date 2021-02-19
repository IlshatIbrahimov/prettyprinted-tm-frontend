import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import authMutation from './mutations/auth.mutation'

const actions = {}
const mutations = {
  ...authMutation,
}
const getters = {}

export default new Vuex.Store({
  state: {
    jwt: ''
  },
  actions,
  mutations,
  getters
})
