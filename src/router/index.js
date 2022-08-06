import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ShowAndHidePassword from "../views/ShowAndHidePassword.vue";
// import ConvertTitleToSlug from "../views/ConvertTitleToSlug.vue";
import ChangColor from "../views/ChangColor.vue";
// import ShowAndHidePassword from "../views/ShowAndHidePassword.vue";
// import ShowAndHidePassword from "../views/ShowAndHidePassword.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: ShowAndHidePassword,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: ConvertTitleToSlug,
  // },
  {
    path: "/about",
    name: "about",
    component: ChangColor,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
