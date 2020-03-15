<template>
  <div class="container">
    <button class="btn-start" @click="start">
      C'est parti!
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$router.push({
        name: 'screenQuestion',
        params: { id: 1 }
      });
    }
  }
};
</script>

<style lang="scss">
.container {
  position: relative;
  .btn-start {
    position: relative;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);

    font-family: fontBurgerQuizzTitle;
    color: $segundary;
    font-size: 5rem;
    &:hover {
      color: $ketchup;
      background-color: $mayo;
    }
  }
}
</style>
