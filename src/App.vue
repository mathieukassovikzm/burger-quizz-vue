<template>
  <div id="app">
    <ScreenQuestion/>
  </div>
</template>

<script>
import ScreenQuestion from './components/ScreenQuestion.vue'
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    ScreenQuestion
  },
  methods: {
    ...mapActions('questionsStore', {
      setQuestionsList: 'fetchQuestions'
    }),
  },
  created() {
    this.setQuestionsList();
  }
}
</script>

<style></style>
