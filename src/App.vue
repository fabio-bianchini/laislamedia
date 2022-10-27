<template>
  <div>
    <NavBar />
  </div>
  <router-view />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<style lang="less">
body {
  font-family: RobotoLight;
  background-color: #222;
  // margin: 0;
  // padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  h1 {
    color: white;
  }
}

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #444;
  &:hover {
    background: #444;
  }
  &:active {
    background: #444;
  }
}

::-webkit-scrollbar-track {
  background: #333;
  border: 0px none #ffffff;
  border-radius: 50px;
  &:hover {
    background: #333;
  }
  &:active {
    background: #333;
  }
}
::-webkit-scrollbar-corner {
  background: transparent;
}
@font-face {
  font-family: RobotoThin;
  src: url(assets/fonts/roboto/Roboto-Thin.ttf);
}
@font-face {
  font-family: RobotoRegular;
  src: url(assets/fonts/roboto/Roboto-Regular.ttf);
}
@font-face {
  font-family: RobotoMedium;
  src: url(assets/fonts/roboto/Roboto-Medium.ttf);
}
@font-face {
  font-family: RobotoLight;
  src: url(assets/fonts/roboto/Roboto-Light.ttf);
}
@font-face {
  font-family: RobotoBold;
  src: url(assets/fonts/roboto/Roboto-Bold.ttf);
}
</style>
