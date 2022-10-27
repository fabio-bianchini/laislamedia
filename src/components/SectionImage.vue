<template>
  <div class="wrapper">
    <div class="imageSection" :style="backgroundSrc"></div>
    <h1 class="title">{{ this.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    title: String,
  },
  computed: {
    backgroundSrc() {
      return `background-image: url("src/assets/section_images/${this.src}")`;
    },
  },
};
</script>

<style scoped lang="less">
@heightImg: 300px;
.wrapper {
  height: @heightImg;
  opacity: 1;
  .imageSection {
    width: 100%;
    height: @heightImg;
    position: relative;
    // width: 100%;
    // height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.15;
  }
  .title {
    font-size: 4rem;
    // opacity: 1;
    text-shadow: 0 0 3px black;
    text-align: center;
    margin-top: -200px;
  }
}
</style>
