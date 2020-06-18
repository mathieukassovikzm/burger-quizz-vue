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
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("questionsStore", {
      setWinnerKetchup: "setWinnerKetchupInStore",
      setWinnerMayo: "setWinnerMayoInStore"
    }),
    goToVideo() {
      if (this.getWinner == "ketchup") {
        this.$router.push({
          name: "pageBurger2laMortMayo"
        });
      } else if (this.getWinner == "mayo") {
        this.$router.push({
          name: "pageBurger2laMortKetchup"
        });
      }
      else{
        this.setWinnerKetchup();
        this.$router.push({
          name: "pageBurger2laMortMayo"
        });
      }
    }
  },
  computed: {
    ...mapGetters("scoresStore", {
      getWinner: "getWinnerInStore"
    })
  }
};
</script>

<style></style>


