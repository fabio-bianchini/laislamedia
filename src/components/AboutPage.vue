<template>
  <SectionImage :src="this.sectionImage.src" title="Sobre Nosotros" />
</template>

<script>
import SectionImage from "./SectionImage.vue";
import { sectionImages } from "../data.json";
export default {
  components: { SectionImage },
  data() {
    return {
      sectionImage: sectionImages[1],
    };
  },
};
</script>

<style scoped lang="less"></style>
