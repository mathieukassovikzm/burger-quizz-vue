<template>
  <div class="equipes">
    <h1>Choix des equipiers</h1>

    <button type="button" name="button" @click="goToVideo">Les equipes sont faites?</button>
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
.equipes {
  position: relative;
  h1,
  button {
    margin: 100px auto;
    font-family: fontBurgerQuizzTitle;
    font-size: 5rem;
    text-align: center;
    color: $txt-primary;
  }
  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: $txt-segundary;
    margin: auto;
    &:hover {
      color: $txt-primary;
    }
  }
}
</style>