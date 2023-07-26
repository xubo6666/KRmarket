import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/auth/Login.vue";
import Help from "@/components/help/help.vue";
import Community from "@/components/help/community.vue";
import privacyPolicy from "@/components/help/privacyPolicy.vue";
import termsofService from "@/components/help/TermsofService.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/help",
      component: Help,
      name: "help",
    },
    {
      path: "/community",
      component: Community,
      name: "community",
    },
    {
      path: "/privacyPolicy",
      component: privacyPolicy,
      name: "privacyPolicy",
    },
    {
      path: "/termsofService",
      component: termsofService,
      name: "termsofService",
    },
  ],
});
export default router;
