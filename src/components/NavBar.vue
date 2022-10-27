<template>
  <div class="wrapperNav">
    <nav class="logo">
      <router-link to="/">
        <span style="font-family: RobotoLight">la isla </span>
        <span style="font-family: RobotoThin">Media</span>
      </router-link>
    </nav>
    <nav class="links">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="navlink"
      >
        <span v-if="link.path !== links[0].path">| </span>
        <span class="linkName">{{ link.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { routes } from "../router/index.ts";
export default {
  data() {
    return {
      links: routes.splice(1),
    };
  },
};
</script>

<style scoped lang="less">
@transitionTime: 0.15s;
@textShadowBlur: 8px;
div .wrapperNav {
  font-family: RobotoThin;
  margin: 30px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  .logo {
    font-size: 3rem;
    letter-spacing: 3px;
    a {
      color: white;
      text-decoration: none;
      transition: (@transitionTime * 1.5) linear;
      &:hover {
        text-shadow: 0 0 3px white;
        transition: @transitionTime linear;
      }
    }
  }
  .links {
    .navlink {
      @linkColor: white;
      font-size: 1.5rem;
      color: @linkColor;
      text-decoration: none;
      padding: 0px 5px 0px 5px;
      .linkName {
        transition: (@transitionTime * 1.5) linear;
        &:hover {
          text-shadow: 0 0 @textShadowBlur @linkColor;
          transition: @transitionTime linear;
        }
      }
    }
    .active-link {
      .linkName {
        @activeColor: #aaa;
        color: @activeColor;
        &:hover {
          text-shadow: 0 0 @textShadowBlur @activeColor;
          transition: @transitionTime linear;
        }
      }
    }
  }
}
</style>
