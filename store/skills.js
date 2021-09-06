const seed = require('../seeds/skills.json')

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
  ADD (state, skill) {
    state.list.push(skill)
  },
  EDIT (state, skill) {
    const index = state.list.findIndex(row => row.id === skill.id)
    if (index > -1) {
      state.list.splice(index, 1, skill)
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
      await this.$fire.firestore.collection('skills').doc(payload.letter).set(data)
      data.id = payload.letter
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
      await this.$fire.firestore.collection('skills').doc(payload.letter).set(data)
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
  async clean ({ commit }) {
    try {
      const snapshot = await this.$fire.firestore.collection('skills').get()
      snapshot.forEach((doc) => {
        doc.ref.delete()
      })
      commit('UNSET_LIST')
      commit('UNSET_SELECTED')
    } catch (error) {
      console.error(error)
    }
  },
  async seed ({ commit }) {
    try {
      const batch = this.$fire.firestore.batch()
      const result = []
      seed.forEach((row) => {
        const data = {
          letter: row.letter,
          name: row.name,
        }
        const ref = this.$fire.firestore.collection('skills').doc(row.letter)
        batch.set(ref, data)
        data.id = row.letter
        result.push(data)
      })
      await batch.commit()
      commit('SET_LIST', result)
    } catch (error) {
      console.error(error)
    }
  },
}
