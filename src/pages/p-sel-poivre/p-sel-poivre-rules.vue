<template>
  <div class="rules">
    <h1>Sel / Poivre</h1>
    <h2>Les règles</h2>
    <p class="mayo">Quiz de rapidité</p>
    <p class="ketchup">1 questions</p>
    <p class="mayo">3 propositions</p>
    <p class="ketchup">1 seule bonne réponse</p>
    <p class="mayo">1 miam par bonne réponse</p>
    <button type="button" name="button" @click="goToVideo">C'est compris?</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("questionsStore", {
      getCountQuestion: "getCountQuestionInStore"
    })
  },
  methods: {
    goToVideo() {
      this.$router.push({
        name: "question",
        params: { id: parseInt(this.getCountQuestion) }
      });
    }
  }
};
</script>

<style></style>


