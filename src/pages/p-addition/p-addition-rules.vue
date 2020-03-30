<template>
  <div class="rules">
    <h1>L'addition</h1>
    <h2>Les règles</h2>
    <p class="ketchup">Quiz de rapidité</p>
    <p class="mayo">Catégorie :</p>
    <p class="ketchup">Toutes les réponses commencent par « Lettre B»</p>
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


