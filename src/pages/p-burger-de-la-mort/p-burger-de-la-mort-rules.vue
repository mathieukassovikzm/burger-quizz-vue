<template>
  <div class="rules">
    <h1>Burger de la mort</h1>
    <h2>Les règles</h2>
    <p class="ketchup">10 questions à la suite</p>
    <p class="mayo">A la fin des 10 questions</p>
    <p class="ketchup">Donnez les 10 réponses dans l’ordre</p>
    <p class="mayo">Questions très simples</p>
    <p class="ketchup">Il ne faut pas souffler</p>

    <button type="button" name="button" @click="goToVideo">C'est compris?</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToVideo() {
      this.$router.push({
        name: "pageBurger2laMortVideo"
      });
    }
  }
};
</script>

<style></style>


