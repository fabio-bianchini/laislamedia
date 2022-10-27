<template>
  <SectionImage :src="this.sectionImage.src" title="Portfolio" />
  <section class="portfolioWrapper">
    <div class="filters">
      <button class="filterLink" @click="filterBy('all')">Todos</button>
      <button class="filterLink" @click="filterBy('fiction')">Ficción</button>
      <button class="filterLink" @click="filterBy('clip')">Videoclips</button>
    </div>
    <div class="projects">
      <div
        class="project"
        v-for="work in portfolio"
        :key="work"
        :class="work.type"
      >
        <img class="bg_img" :src="'src/assets/projects_images/' + work.image" />
        <span class="title">{{ work.title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import SectionImage from "./SectionImage.vue";
import { sectionImages, portfolio } from "../data.json";
export default {
  components: { SectionImage },
  data() {
    return {
      sectionImage: sectionImages[1],
      portfolio: portfolio,
    };
  },
  methods: {
    filterBy(type) {
      const TYPES = ["all", "fiction", "clip"];
      if (!TYPES.includes(type)) type = "all";
      const projects = document.querySelectorAll(".projects .project");
      if (type === "all") {
        projects.forEach((project) => {
          project.classList.remove("hidden");
        });
      } else {
        projects.forEach((project) => {
          project.classList.contains(type)
            ? project.classList.remove("hidden")
            : project.classList.add("hidden");
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.hidden {
  display: none;
  transition: 1s;
}
.portfolioWrapper {
  text-align: center;
  transition: 1s;
  .filters {
    cursor: default;
    display: flex;
    justify-content: space-around;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 30%;
    color: white;
    .filterLink {
      &:hover {
        color: #aaa;
      }
    }
  }
  .projects {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    color: white;
    text-align: center;
    margin: 10px;
    .project {
      aspect-ratio: 1.618;
      overflow: hidden;
      &:hover {
        .bg_img {
          opacity: 0.15;
          transform: scale(1.02);
          transition: 0.15s;
        }
        .title {
          display: block;
        }
      }
      .bg_img {
        position: relative;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        transition: 0.2s;
      }
      .title {
        display: none;
        font-size: 2vw;
        position: absolute;
        color: white;
        z-index: 1;
        margin: -3vw 0 0 1vw;
        text-shadow: 0 0 3px white;
      }
    }
  }
}
</style>
