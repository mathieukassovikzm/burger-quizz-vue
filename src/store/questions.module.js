import dataQuizAnnifBenjMamel from './data/QuizAnnifBenjMamel';

const state = {
  countQuestion: 0,
  nbStartQuestionsNuggets: 8,
  nbStartQuestionsMenu: 8,
  nbStartQuestionsSelPoivre: 8,
  nbStartQuestionsDessert: 8,
  nbStartQuestionsAddition: 50,
  nbMaxQuestions: 50,
  listQuestions: []
};

const getters = {
  getQuestionInStore: state => nb => {
    var q = null;
    state.listQuestions.forEach(el => {
      if (el.id === `question${nb}`) {
        q = el;
      }
    });
    return q;
  }
};

const mutations = {
  DECREMENTCOUNTQUESTION: state => {
    if (state.countQuestion > 0) {
      state.countQuestion--;
    }
  },
  INCREMENTCOUNTQUESTION: state => {
    if (state.countQuestion < state.nbMaxQuestions) {
      state.countQuestion++;
    }
  },
  SETLISTQUESTIONS: (state, data) => {
    state.listQuestions = data;
  }
};

const actions = {
  decrementCountQuestionInStore(store) {
    store.commit('DECREMENTCOUNTQUESTION');
  },
  incrementCountQuestionInStore(store) {
    store.commit('INCREMENTCOUNTQUESTION');
  },

  fetchQuestions(store) {
    try {
      let data = dataQuizAnnifBenjMamel;
      if (data) {
        let list = [];
        for (const [key, value] of Object.entries(data)) {
          let question = {
            id: key,
            category: value.category,
            team: value.team,
            question: value.question,
            reponses: value.reponses,
            goodrep: value.goodrep
          };
          list.push(question);
        }
        store.commit('SETLISTQUESTIONS', list);
      }
    } catch (error) {
      console.log(error);
    }
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
