<template>
  <video width="320" height="240" autoplay muted class="videoAnimation">
    <source
      src="src/assets/home_animations/Logo con letras.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  <!-- <SectionImage :src="this.sectionImage.src" title="Inicio" /> -->
</template>

<script>
import SectionImage from "./SectionImage.vue";
import { sectionImages } from "../data.json";
export default {
  components: { SectionImage },
  data() {
    return {
      sectionImage: sectionImages[0],
    };
  },
};
</script>

<style scoped lang="less">
.videoAnimation {
  width: 100%;
  height: 400px;
}
</style>
