<template lang="html" src="./Scores.html"></template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ['team'],

  computed: {
    ...mapGetters('scoresStore',{
      getScoreKetchup: 'getScoreKetchupInStore',
      getScoreMayo: 'getScoreMayoInStore'
    }),
    bkgImageKetchup(){
      return require('@/assets/scores-ketchup/score'+this.getScoreKetchup+'.png')
    },
    bkgImageMayo(){
      return require('@/assets/scores-mayo/score'+this.getScoreMayo+'.png')
    },
    scoreMayo(){
      return this.team === 'mayo'
    },
    scoreKetchup(){
      return this.team === 'ketchup'
    }
  },
  methods: {
    ...mapActions('scoresStore', {
      decrementMayo: 'decrementMayoInStore',
      incrementMayo: 'incrementMayoInStore',
      decrementKetchup: 'decrementKetchupInStore',
      incrementKetchup: 'incrementKetchupInStore',
    }),

    mayoMinusOne() {
      this.decrementMayo();
    },
    mayoPlusOne() {
      this.incrementMayo();
    },
    ketchupMinusOne() {
      this.decrementKetchup();
    },
    ketchupPlusOne() {
      this.incrementKetchup();
    }
  }
}

</script>

<style lang="scss" src="./Scores.scss"></style>
