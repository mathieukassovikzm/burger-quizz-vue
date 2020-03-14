import Vue from 'vue'
import Vuex from 'vuex'
import ScoresStore from './score.module'
import QuestionsStore from './questions.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    scoresStore: ScoresStore,
    questionsStore: QuestionsStore
  }
})
