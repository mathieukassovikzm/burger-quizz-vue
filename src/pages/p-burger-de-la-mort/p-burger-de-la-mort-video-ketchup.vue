<template>
  <video class="video" id="video-container" autoplay v-on:ended="onEnd()">
    <source src="./../../assets/videos/BurgerDeLaMort2.mp4" type="video/mp4" />
  </video>
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
    init() {
      var video = document.getElementById("video-container");
      video.play();
    },
    onEnd() {
      this.$router.push({
        name: "pageBurger2laMortKetchup"
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style></style>



