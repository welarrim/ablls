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
  ADD (state, evaluation) {
    state.list.push(evaluation)
  },
  EDIT (state, evaluation) {
    const index = state.list.findIndex(row => row.id === evaluation.id)
    if (index > -1) {
      state.list.splice(index, 1, evaluation)
    }
  },
  REMOVE (state, payload) {
    const index = state.list.findIndex(row => row.id === payload.id)
    if (index > -1) {
      state.list.splice(index, 1)
    }
  },
}

export const actions = {
  async fetch ({ commit }) {
    const result = []
    try {
      const snapshot = await this.$fire.firestore.collection('evaluations').get()
      snapshot.forEach((doc) => {
        const evaluation = doc.data()
        evaluation.id = doc.id
        result.push(evaluation)
      })
      commit('SET_LIST', result)
    } catch (error) {
      console.error(error)
    }
  },
  async add ({ commit }, payload) {
    try {
      const data = {
        childId: payload.childId,
        date: payload.date,
        statut: payload.statut,
        results: payload.results,
      }
      const result = await this.$fire.firestore.collection('evaluations').add(data)
      data.id = result.id
      commit('ADD', data)
    } catch (error) {
      console.error(error)
    }
  },
  async edit ({ commit }, payload) {
    try {
      const data = {
        childId: payload.childId,
        date: payload.date,
        statut: payload.statut,
        results: payload.results,
      }
      await this.$fire.firestore.collection('evaluations').doc(payload.id).set(data)
      data.id = payload.id
      commit('EDIT', data)
    } catch (error) {
      console.error(error)
    }
  },
  async remove ({ commit }, payload) {
    try {
      await this.$fire.firestore.collection('evaluations').doc(payload.id).delete()
      commit('REMOVE', payload)
    } catch (error) {
      console.error(error)
    }
  },
}
