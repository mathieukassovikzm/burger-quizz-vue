<template lang="html" src="./Questions.html"></template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      questionId: null,
      question: null,
      showAnswer: false
    };
  },
  computed: {
    ...mapGetters("questionsStore", {
      getQuestionById: "getQuestionInStore",
      getCountQuestion: "getCountQuestionInStore",
      getNbStartQMenu: "getNbStartQMenuInStore",
      getNbStartQSelPoivre: "getNbStartQSelPoivreInStore",
      getNbStartQDessert: "getNbStartQDessertInStore",
      getNbStartQAddition: "getNbStartQAdditionInStore",
      getNbStartQBurgerDeLaMort: "getNbStartQBurgerDeLaMortInStore"
    }),

    getQuestion() {
      if (this.question != null) return this.question.question;
      else return "";
    },
    getRep1() {
      if (this.question != null) return this.question.reponses.rep1;
      else return "";
    },
    getRep2() {
      if (this.question != null) return this.question.reponses.rep2;
      else return "";
    },
    getRep3() {
      if (this.question != null) return this.question.reponses.rep3;
      else return "";
    },
    getRep4() {
      if (this.question != null) return this.question.reponses.rep4;
      else return "";
    },
    getGoodAnswers() {
      return this.showAnswer === true ? this.question.goodrep : "";
    },
    showGoodAnswers() {
      return this.showAnswer;
    },
    getMenu() {
      if (this.question != null) return this.question.goodrep;
      else return "";
    },
    getTeam() {
      if (this.question != null) return this.question.team;
      else return "";
    },
    isTeamKetchup() {
      if (this.question != null)
        return this.question.team === "ketchup" ? true : false;
      else return "";
    },
    isTeamMayo() {
      if (this.question != null)
        return this.question.team === "mayo" ? true : false;
      else return "";
    },
    isQuestionNuggets() {
      if (this.question != null)
        return this.question.category === "nuggets" ? true : false;
      else return false;
    },
    isQuestionSelPoivre() {
      if (this.question != null)
        return this.question.category === "selpoivre" ? true : false;
      else return false;
    },
    isQuestionMenu() {
      if (this.question != null)
        return this.question.category === "menu" ? true : false;
      else return false;
    },
    isQuestionDessert() {
      if (this.question != null)
        return this.question.category === "dessert" ? true : false;
      else return false;
    },
    isQuestionAddition() {
      if (this.question != null)
        return this.question.category === "addition" ? true : false;
      else return false;
    }
  },
  methods: {
    ...mapActions("questionsStore", {
      inCrementCountQuestion: "incrementCountQuestionInStore"
    }),

    showReponse() {
      this.showAnswer = true;
    },

    fetchQuestion(nb) {
      this.question = this.getQuestionById(nb);
    },

    nextQuestion() {
      this.inCrementCountQuestion();

      if (this.getCountQuestion == this.getNbStartQSelPoivre) {
        this.$router.push({
          name: "pageSelPoivreRules"
        });
      } else if (this.getCountQuestion == this.getNbStartQMenu) {
        this.$router.push({
          name: "pageMenusRules"
        });
      } else if (this.getCountQuestion == this.getNbStartQDessert) {
        this.$router.push({
          name: "pageDessertRules"
        });
      } else if (this.getCountQuestion == this.getNbStartQAddition) {
        this.$router.push({
          name: "pageAdditionRules"
        });
      } else if (this.getCountQuestion == this.getNbStartQBurgerDeLaMort) {
        this.$router.push({
          name: "pageBurger2laMortRules"
        });
      } else {
        this.$router.push({
          name: "question",
          params: { id: parseInt(this.getCountQuestion) }
        });
      }
    },

    loadRoute(route) {
      this.questionId = route.params.id;
      this.fetchQuestion(this.questionId);
    }
  },
  watch: {
    $route(to) {
      this.showAnswer = false;
      this.loadRoute(to);
    }
  },
  mounted() {
    this.loadRoute(this.$route);
  }
};
</script>

<style lang="scss" src="./Questions.scss"></style>
