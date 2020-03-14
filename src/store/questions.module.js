import dataQuizAnnifBenjMamel from './data/QuizAnnifBenjMamel'

const state = {
  countQuestion : 0,
  nbMaxQuestions : 50,
  listQuestions : []
}

const getters = {
  getQuestionInStore: (state) => (nb) => {
    var q = null;
    state.listQuestions.forEach((el) => {
      if (el.id === `question${nb}`){
        q = el
      }
    })
    return q
  }
}

const mutations = {
  DECREMENTCOUNTQUESTION: (state) => {
    if(state.countQuestion > 0){
      state.countQuestion--;
    }
  },
  INCREMENTCOUNTQUESTION: (state) => {
    if(state.countQuestion < state.nbMaxQuestions){
      state.countQuestion++;
    }
  },
  SETLISTQUESTIONS: (state, data) => {
    state.listQuestions = data
  }
}

const actions = {
  decrementCountQuestionInStore (store){
    store.commit('DECREMENTMAYO')
  },
  incrementCountQuestionInStore (store){
    store.commit('INCREMENTMAYO')
  },

  fetchQuestions(store) {
    try {
      let data = dataQuizAnnifBenjMamel
      if (data){
        let list = []
        for ( const [key,value] of Object.entries( data ) ) {
          let question = {
            id : key,
            question: value.question,
            reponses: value.reponses,
            goodrep: value.goodrep
          }
          list.push(question)
        }
        store.commit('SETLISTQUESTIONS', list)
      }
    } catch (error) {
      console.log(error)
    }
  },
}

export default {
  namespaced: true,
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
