export const state = () => ({
  list: [],
  selected: null,
})

export const getters = {
  byId: state => (id) => {
    return state.list.find(row => row.id === id)
  },
}

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
  ADD (state, team) {
    state.list.push(team)
  },
  EDIT (state, team) {
    const index = state.list.findIndex(row => row.id === team.id)
    if (index > -1) {
      state.list.splice(index, 1, team)
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
      const snapshot = await this.$fire.firestore.collection('teams').get()
      snapshot.forEach((doc) => {
        const team = doc.data()
        team.id = doc.id
        result.push(team)
      })
      commit('SET_LIST', result)
    } catch (error) {
      console.error(error)
    }
  },
  async add ({ commit }, payload) {
    try {
      const data = {
        name: payload.name,
      }
      const result = await this.$fire.firestore.collection('teams').add(data)
      data.id = result.id
      commit('ADD', data)
    } catch (error) {
      console.error(error)
    }
  },
  async edit ({ commit }, payload) {
    try {
      const data = {
        name: payload.name,
      }
      await this.$fire.firestore.collection('teams').doc(payload.id).set(data)
      data.id = payload.id
      commit('EDIT', data)
    } catch (error) {
      console.error(error)
    }
  },
  async remove ({ commit }, payload) {
    try {
      await this.$fire.firestore.collection('teams').doc(payload.id).delete()
      commit('REMOVE', payload)
    } catch (error) {
      console.error(error)
    }
  },
}
