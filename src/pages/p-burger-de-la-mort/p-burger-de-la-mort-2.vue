<template>
  <div class="b2lm ketchup">
    <div class="panel-l">
      <img src="./../../assets/burgerdelamort2.jpg" class="item photo" />
    </div>
    <div class="panel-r">
      <div class="buttons">
        <button type="button" name="button" @click="showReponse">Reponse</button>
        <button type="button" name="button" @click="nextQuestion">Next</button>
      </div>
      <div class="questions" v-show="showGoodAnswers">
        <div class="question" v-for="(question, index) in questions" v-bind:key="question">
          <h2>{{index+1}}</h2>
          <div class="g-q-r">
            <p class="q">{{question.question}}</p>
            <p class="r">Réponse: {{question.goodrep}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      questions: null,
      showAnswer: false
    };
  },
  computed: {
    ...mapGetters("questionsStore", {
      getAllQBdlm: "getAllQBdlmInStore"
    }),
    showGoodAnswers() {
      return this.showAnswer;
    }
  },
  methods: {
    fetchQuestions() {
      this.questions = this.getAllQBdlm("ketchup");
    },
    showReponse() {
      this.showAnswer = true;
    },
    nextQuestion() {
      this.$router.push({
        name: "pageBurger2laMortVideo2"
      });
    }
  },
  mounted() {
    this.fetchQuestions();
  }
};
</script>

<style>
</style>