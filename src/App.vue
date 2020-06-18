<template>
  <div>
    <div class="header">
      <img src="./assets/Burger-Quiz-logo.png" alt />
      <p>
        Annif
        <a @click="goToBurgerMortKetchup" class="ketchup">Mamel</a> &
        <a @click="goToBurgerMortMayo" class="mayo">BenJ</a>
      </p>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("questionsStore", {
      setQuestionsList: "fetchQuestions"
    }),
    ...mapActions("scoresStore", {
      setWinnerKetchup: "setWinnerKetchupInStore",
      setWinnerMayo: "setWinnerMayoInStore"
    }),
    goToBurgerMortKetchup(){
      this.setWinnerKetchup();
      this.goToBM();
    },
    goToBurgerMortMayo(){
      this.setWinnerMayo();
      this.goToBM();
    },
    goToBM(){
      this.$router.push({
        name: "pageBurger2laMortVideo"
      });
    }
  },
  created() {
    this.setQuestionsList();
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
