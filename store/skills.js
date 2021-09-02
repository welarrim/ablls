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
  ADD (state, child) {
    state.list.push(child)
  },
  EDIT (state, child) {
    const index = state.list.findIndex(row => row.id === child.id)
    if (index > -1) {
      state.list.splice(index, 1, child)
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
      const snapshot = await this.$fire.firestore.collection('skills').get()
      snapshot.forEach((doc) => {
        const skill = doc.data()
        skill.id = doc.id
        result.push(skill)
      })
      commit('SET_LIST', result)
    } catch (error) {
      console.error(error)
    }
  },
  async add ({ commit }, payload) {
    try {
      const data = {
        letter: payload.letter,
        name: payload.name,
      }
      const result = await this.$fire.firestore.collection('skills').add(data)
      data.id = result.id
      commit('ADD', data)
    } catch (error) {
      console.error(error)
    }
  },
  async edit ({ commit }, payload) {
    try {
      const data = {
        letter: payload.letter,
        name: payload.name,
      }
      await this.$fire.firestore.collection('skills').doc(payload.id).set(data)
      data.id = payload.id
      commit('EDIT', data)
    } catch (error) {
      console.error(error)
    }
  },
  async remove ({ commit }, payload) {
    try {
      await this.$fire.firestore.collection('skills').doc(payload.id).delete()
      commit('REMOVE', payload)
    } catch (error) {
      console.error(error)
    }
  },
}
