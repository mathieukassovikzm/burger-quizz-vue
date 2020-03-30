<template>
  <div class="rules">
    <h1>Choix des équipiers</h1>

    <button type="button" name="button" @click="goToVideo">Les équipes sont faites?</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToVideo() {
      this.$router.push({
        name: "pageNuggetsVideo"
      });
    }
  }
};
</script>

<style lang="scss" >
</style>