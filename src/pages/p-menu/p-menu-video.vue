<template
  >
  <video class="video" id="video-container" autoplay v-on:ended="onEnd()">
    <source src="./../../assets/videos/Menus.mp4" type="video/mp4" />
  </video>
</template>

<script>
export default {
  methods: {
    init() {
      var video = document.getElementById("video-container");
      video.play();
    },
    onEnd() {
      this.$router.push({
        name: "pageMenusRules"
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style></style>
