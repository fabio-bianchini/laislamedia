import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PortfolioPage from "../components/PortfolioPage.vue";
import ServicesPage from "../components/ServicesPage.vue";
import AboutPage from "../components/AboutPage.vue";
import ContactPage from "../components/ContactPage.vue";

export const routes = [
  { path: "/", name: "inicio", component: HomePage },
  { path: "/portfolio", name: "portfolio", component: PortfolioPage },
  { path: "/services", name: "servicios", component: ServicesPage },
  { path: "/about", name: "sobre nosotros", component: AboutPage },
  { path: "/contact", name: "contacto", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
});

export default router;
