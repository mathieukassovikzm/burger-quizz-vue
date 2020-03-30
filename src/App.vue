<template>
  <div id="app">
    <div class="header">
      <img src="./assets/Burger-Quiz-logo.png" alt />
      <p>
        Annif
        <span class="ketchup">Mamel</span> &
        <span class="mayo">BenJ</span>
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
    })
  },
  created() {
    this.setQuestionsList();
  }
};
</script>

<style lang="scss" src="./App.scss"></style>
