export default {
  namespaced: true,
  state: {
    authToken: null,
    currentUser: {},
    role: null
  },
  getters: {},
  mutations: {
    SET_CURRENT_USER_IN_STATE (state, data) {
      state.currentUser = data
    },
    SET_IS_LOGGED_IN (state, data) {
      state.authToken = data.token
    },
    UPDATE_CURRENT_USER_IN_STATE (state, user) {
      state.currentUser = user
    },
    CLEAR_CURRENT_USER (state) {
      state.currentUser = null
      state.authToken = null
    },
    SET_USER_ROLE_IN_STATE(state, data) {
        state.role = data.role
    }
  },
  actions: {
    setCurrentUserInState ({ commit }, user) {
      commit('SET_CURRENT_USER_IN_STATE', user)
    },
    setIsLoggedIn ({ commit }, data) {
      commit('SET_IS_LOGGED_IN', data)
    },
    updateCurrentUserInState ({ commit }, user) {
      commit('UPDATE_CURRENT_USER_IN_STATE', user)
    },
    clearCurrentUser ({ commit }) {
      commit('CLEAR_CURRENT_USER')
    }
  }

}
