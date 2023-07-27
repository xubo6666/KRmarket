import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Loan from "@/components/Loan.vue";
import Account from "@/components/Account.vue";
import Level from "@/components/product/Level.vue";
import Login from "@/components/auth/Login.vue";
import Help from "@/components/help/help.vue";
import Community from "@/components/help/community.vue";
import PrivacyPolicy from "@/components/help/PrivacyPolicy.vue";
import TermsofService from "@/components/help/TermsofService.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/account",
      component: Account,
      name: "account",
    },
    {
      path: "/level",
      component: Level,
      name: "level",
    },
    {
      path: "/loan",
      component: Loan,
      name: "loan",
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
      component: PrivacyPolicy,
      name: "privacyPolicy",
    },
    {
      path: "/termsofService",
      component: TermsofService,
      name: "termsofService",
    },
  ],
});
export default router;
