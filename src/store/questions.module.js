import dataQuizAnnifBenjMamel from './data/QuizAnnifBenjMamel';

const state = {
  countQuestion: 1,
  nbStartQuestionsSelPoivre: 7,
  nbStartQuestionsMenu: 23,
  nbStartQuestionsDessert: 31,
  nbStartQuestionsAddition: 33,
  nbStartQuestionsBurgerDeLaMort: 40,
  nbStartQuestionsBurgerDeLaMort2: 50,
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
  },
  getAllQBdlmInStore: state => team => {
    var list = [];
    state.listQuestions.forEach(el => {
      if (el.category === 'burger2lamort' && el.team === team) {
        list.push(el);
      }
    });
    return list;
  },
  getCountQuestionInStore: state => {
    return state.countQuestion;
  },
  getNbStartQMenuInStore: state => {
    return state.nbStartQuestionsMenu;
  },
  getNbStartQSelPoivreInStore: state => {
    return state.nbStartQuestionsSelPoivre;
  },
  getNbStartQDessertInStore: state => {
    return state.nbStartQuestionsDessert;
  },
  getNbStartQAdditionInStore: state => {
    return state.nbStartQuestionsAddition;
  },
  getNbStartQBurgerDeLaMortInStore: state => {
    return state.nbStartQuestionsBurgerDeLaMort;
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
