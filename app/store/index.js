// # Modules Mode Vuex Store

export default {
  state: () => ({
    allRepos: null
  }),
  getters: {
    allRepos: state => state.allRepos
  },
  mutations: {
    setRepos(state, payload) {
      state.allRepos = payload
    }
  },
  actions: {
    getRepos(context) {
      // let client = context.apolloProvider.defaultClient
    }
  }
}
