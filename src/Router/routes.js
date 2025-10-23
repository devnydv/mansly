import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/home.vue";
import Category from "../components/Home/category.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home},
    {path: "/category", component: Category}
  ]
});

export default router;
