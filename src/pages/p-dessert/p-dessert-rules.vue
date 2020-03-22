<template>
  <div class="rules">
    <h1>Dessert</h1>
    <h2>Les règles</h2>
    <p class="ketchup">Mélange 3 ganaches</p>
    <p class="mayo">mélange de 3 visages</p>
    <p class="ketchup">40s</p>
    <p class="mayo">1 miam par ganache découverte</p>

    <button type="button" name="button" @click="goToVideo">C'est compris?</button>
  </div>
</template>

<script>
export default {
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


