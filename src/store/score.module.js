const state = {
  scoreKetchup : 0,
  scoreMayo : 0
}

const getters = {
  getScoreKetchupInStore: (state) => {
    return state.scoreKetchup
  },
  getScoreMayoInStore: (state) => {
    return state.scoreMayo
  },
}

const mutations = {
  DECREMENTMAYO: (state) => {
    if(state.scoreMayo > 0){
      state.scoreMayo--;
    }
  },
  INCREMENTMAYO: (state) => {
    if(state.scoreMayo < 25){
      state.scoreMayo++;
    }
  },
  DECREMENTKETCHUP: (state) => {
    if(state.scoreKetchup > 0){
      state.scoreKetchup--;
    }
  },

  INCREMENTKETCHUP: (state) => {
    if(state.scoreKetchup < 25){
      state.scoreKetchup++;
    }
  }
}

const actions = {
  decrementMayoInStore (store){
    store.commit('DECREMENTMAYO')
  },
  incrementMayoInStore (store){
    store.commit('INCREMENTMAYO')
  },
  decrementKetchupInStore (store){
    store.commit('DECREMENTKETCHUP')
  },
  incrementKetchupInStore (store){
    store.commit('INCREMENTKETCHUP')
  }
}

export default {
  namespaced: true,
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
