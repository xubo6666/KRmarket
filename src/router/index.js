import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Loan from "@/components/Loan.vue";
import Withdraw from "@/components/Withdraw.vue";
import DueDate from "@/components/DueDate.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import Product from "@/components/product/Product.vue";
import Account from "@/components/Account.vue";
import Level from "@/components/product/Level.vue";
import Login from "@/components/auth/Login.vue";
import Help from "@/components/help/help.vue";
import Community from "@/components/help/community.vue";
import PrivacyPolicy from "@/components/help/PrivacyPolicy.vue";
import TermsofService from "@/components/help/TermsofService.vue";
import OrderRecords from "@/components/records/OrderRecords.vue";
import AssetsRecords from "@/components/records/AssetsRecords.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/assets-records",
      component: AssetsRecords,
      name: "assets-records",
    },
    {
      path: "/order-records",
      component: OrderRecords,
      name: "order-records",
    },
    {
      path: "/product",
      component: Product,
      name: "product",
    },
    {
      path: "/productinfo",
      component: ProductInfo,
      name: "productinfo",
    },
    {
      path: "/duedate",
      component: DueDate,
      name: "duedate",
    },
    {
      path: "/withdraw",
      component: Withdraw,
      name: "withdraw",
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
