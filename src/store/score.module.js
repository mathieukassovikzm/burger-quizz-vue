const state = {
  scoreKetchup: 0,
  scoreMayo: 0,
  winner: null
};

const getters = {
  getScoreKetchupInStore: state => {
    return state.scoreKetchup;
  },
  getScoreMayoInStore: state => {
    return state.scoreMayo;
  },
  getWinnerInStore: state => {
    return state.winner;
  }
};

const mutations = {
  DECREMENTMAYO: state => {
    if (state.scoreMayo > 0) {
      state.scoreMayo--;
    }
  },
  INCREMENTMAYO: state => {
    if (state.scoreMayo < 25) {
      state.scoreMayo++;
    }
    if (state.scoreMayo + 1 === 25 && state.scoreKetchup < 25) {
      state.winner = 'mayo';
    }
  },
  DECREMENTKETCHUP: state => {
    if (state.scoreKetchup > 0) {
      state.scoreKetchup--;
    }
  },

  INCREMENTKETCHUP: state => {
    if (state.scoreKetchup < 25) {
      state.scoreKetchup++;
    }
    if (state.scoreKetchup + 1 === 25 && state.scoreMayo < 25) {
      state.winner = 'ketchup';
    }
  }
};

const actions = {
  decrementMayoInStore(store) {
    store.commit('DECREMENTMAYO');
  },
  incrementMayoInStore(store) {
    store.commit('INCREMENTMAYO');
  },
  decrementKetchupInStore(store) {
    store.commit('DECREMENTKETCHUP');
  },
  incrementKetchupInStore(store) {
    store.commit('INCREMENTKETCHUP');
  }
};

export default {
  namespaced: true,
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
