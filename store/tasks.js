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
  ADD (state, task) {
    state.list.push(task)
  },
  EDIT (state, task) {
    const index = state.list.findIndex(row => row.id === task.id)
    if (index > -1) {
      state.list.splice(index, 1, task)
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
      const snapshot = await this.$fire.firestore.collection('tasks').get()
      snapshot.forEach((doc) => {
        const task = doc.data()
        task.id = doc.id
        result.push(task)
      })
      commit('SET_LIST', result)
    } catch (error) {
      console.error(error)
    }
  },
  async add ({ commit }, payload) {
    try {
      const data = {
        skillId: payload.skillId,
        order: payload.order,
        score: payload.score,
        name: payload.name,
        goal: payload.goal,
        question: payload.question,
        examples: payload.examples,
        criterias: payload.criterias,
        observations: payload.observations,
      }
      await this.$fire.firestore.collection('tasks').doc(payload.skillId + payload.order).set(data)
      data.id = payload.skillId + payload.order
      commit('ADD', data)
    } catch (error) {
      console.error(error)
    }
  },
  async edit ({ commit }, payload) {
    try {
      const data = {
        skillId: payload.skillId,
        order: payload.order,
        score: payload.score,
        name: payload.name,
        goal: payload.goal,
        question: payload.question,
        examples: payload.examples,
        criterias: payload.criterias,
        observations: payload.observations,
      }
      await this.$fire.firestore.collection('tasks').doc(payload.skillId + payload.order).set(data)
      data.id = payload.skillId + payload.order
      commit('EDIT', data)
    } catch (error) {
      console.error(error)
    }
  },
  async remove ({ commit }, payload) {
    try {
      await this.$fire.firestore.collection('tasks').doc(payload.id).delete()
      commit('REMOVE', payload)
    } catch (error) {
      console.error(error)
    }
  },
}
