import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FashionView from "../views/FashionView.vue";
import FoodView from "../views/FoodView.vue";
import TechView from "../views/TechView.vue";
import TravelView from "../views/TravelView.vue";
import VideosView from "../views/VideosView.vue";
import HealthView from "../views/HealthView.vue";
import SingleView from "../views/SingleView.vue";
import AuthorView from "../views/AuthorView.vue";
import ContactView from "../views/ContactView.vue";
import SiteMapView from "../views/SiteMapView.vue";
import AdvertiseView from "../views/AdvertiseView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/fashion",
      name: "fashion",
      component: FashionView,
    },
    {
      path: "/food",
      name: "food",
      component: FoodView,
    },
    {
      path: "/tech",
      name: "tech",
      component: TechView,
    },
    {
      path: "/travel",
      name: "travel",
      component: TravelView,
    },
    {
      path: "/videos",
      name: "videos",
      component: VideosView,
    },
    {
      path: "/health",
      name: "health",
      component: HealthView,
    },
    {
      path: "/blog",
      name: "blog",
      component: SingleView,
    },
    {
      path: "/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/sitemap",
      name: "sitemap",
      component: SiteMapView,
    },
    {
      path: "/ad",
      name: "ad",
      component: AdvertiseView,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
