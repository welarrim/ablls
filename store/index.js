export const state = () => ({
  user: null,
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  UNSET_USER (state) {
    state.user = null
  },
  ON_AUTH_STATE_CHANGED_MUTATION (state, { authUser }) {
    if (!authUser) {
      state.user = null
    } else {
      const { uid, displayName, email, photoURL, phoneNumber, emailVerified } = authUser
      state.user = { uid, displayName, email, photoURL, phoneNumber, emailVerified }
    }
  },
}

export const actions = {
  onAuthStateChangedAction ({ commit }, { authUser }) {
    if (!authUser) {
      commit('UNSET_USER')
    } else {
      const { uid, displayName, email, photoURL, phoneNumber, emailVerified } = authUser
      // const token = await authUser.getIdToken()

      commit('SET_USER', { uid, displayName, email, photoURL, phoneNumber, emailVerified })
    }
  },
}
