import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/creations",
    name: "creations",
    // route level code-splitting
    // this generates a separate chunk (creations.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "creations" */ "../views/creations.vue"),
  },
  {
    path: "/commander",
    name: "commander",

    component: () =>
      import(/* webpackChunkName: "creations" */ "../views/commander.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
