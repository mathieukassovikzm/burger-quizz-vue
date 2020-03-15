<template>
  <video class="video" id="video-container" autoplay>
    <source src="./../../assets/videos/Nuggets.mp4" type="video/mp4" /></video
></template>

<script>
export default {
  methods: {
    init() {
      var video = document.getElementById('video-container');
      video.play();
      video.onended = function() {
        alert('The audio has ended');
      };
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style></style>
