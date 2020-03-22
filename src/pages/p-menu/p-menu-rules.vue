<template>
  <div class="rules">
    <h1>Menus</h1>
    <h2>Les règles</h2>
    <p class="ketchup">4 questions thématiques</p>
    <p class="mayo">Aucune proposition</p>
    <p class="ketchup">2 menus:</p>
    <p class="mayo">Mon petit ours brun</p>
    <p class="ketchup">Girac, la perfection au masculin</p>
    <p class="mayo">1 miam par bonne réponse</p>

    <button type="button" name="button" @click="goToVideo">C'est compris?</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToVideo() {
      this.$router.push({
        name: "pageMenusVideo"
      });
    }
  }
};
</script>

<style></style>


