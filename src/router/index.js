import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/register.vue";

import path from "path";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/register",
      component: Register,
      name: "register",
    },
  ],
});
export default router;
