export const state = () => ({
  list: [],
  selected: null,
})

export const mutations = {
  SET_LIST (state, list) {
    state.list = list
  },
  SET_SELECTED (state, selected) {
    state.selected = selected
  },
  UNSET_LIST (state) {
    state.list = []
  },
  UNSET_SELECTED (state) {
    state.selected = null
  },
}

export const actions = {
  async fetch ({ commit }) {
    const result = []
    try {
      const snapshot = await this.$fire.firestore.collection('childs').get()
      snapshot.forEach((doc) => {
        result.push(doc.data())
      })
      commit('SET_LIST', result)
    } catch (error) {
      this.displayError(error)
    }
  },
}
