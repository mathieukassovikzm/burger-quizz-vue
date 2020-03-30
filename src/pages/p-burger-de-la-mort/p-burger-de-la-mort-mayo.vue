<template>
  <div class="b2lm mayo">
    <div class="top">
      <div class="title">
        <h2>Le Burger de la</h2>
        <h1>Mort</h1>
      </div>
      <div class="buttons">
        <button type="button" name="button" @click="showReponse">Reponse</button>
        <button type="button" name="button" @click="nextQuestion">Next</button>
      </div>
    </div>

    <div class="container-flex">
      <div class="panel-l">
        <div class="questions" v-show="showGoodAnswers">
          <div class="question" v-for="(question, index) in questions" v-bind:key="index">
            <div class="divif" v-if="index<5">
              <h2>{{index+1}}</h2>
              <div class="g-q-r">
                <p class="q">{{question.question}}</p>
                <p class="r">Réponse: {{question.goodrep}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-r">
        <div class="questions" v-show="showGoodAnswers">
          <div class="question" v-for="(question, index) in questions" v-bind:key="index">
            <div class="divif" v-if="index>4">
              <h2>{{index+1}}</h2>
              <div class="g-q-r">
                <p class="q">{{question.question}}</p>
                <p class="r">Réponse: {{question.goodrep}}</p>
              </div>
            </div>
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
    ...mapGetters({
      getAllQBdlm: "questionsStore/getAllQBdlmInStore",
      getWinner: "scoresStore/getWinnerInStore"
    }),
    showGoodAnswers() {
      return this.showAnswer;
    }
  },
  methods: {
    fetchQuestions() {
      this.questions = this.getAllQBdlm("mayo");
    },
    showReponse() {
      this.showAnswer = true;
    },
    nextQuestion() {
      console.log(this.getWinner);
      if (this.getWinner == "mayo") {
        this.$router.push({
          name: "pageFin"
        });
      } else if (this.getWinner == "ketchup") {
        this.$router.push({
          name: "pageBurger2laMortVideoKetchup"
        });
      }
    }
  },
  mounted() {
    this.fetchQuestions();
  }
};
</script>

<style>
</style>