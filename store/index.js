export const state = () => ({
  user: {},
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION (state, { authUser, claims }) {
    console.debug('ON_AUTH_STATE_CHANGED_MUTATION', authUser, claims)
    if (!authUser) {
      // claims = null
      // perform logout operations
    } else {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  },
}

export const actions = {
  onAuthStateChangedAction ({ commit }, { authUser, claims }) {
    console.debug('onAuthStateChangedAction', authUser, claims)
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  },
}
