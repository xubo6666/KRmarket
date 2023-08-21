import { createRouter, createWebHistory } from "vue-router";
const Home = () => Promise.resolve(import("@/components/Home.vue"));
const Loan = () => import("@/components/Loan.vue");
const Deposit = () => import("@/components/Deposit.vue");
const Withdraw = () => import("@/components/Withdraw.vue");
const DueDate = () => import("@/components/DueDate.vue");
const ProductInfo = () => import("@/components/product/ProductInfo.vue");
const Product = () => import("@/components/product/Product.vue");
const Account = () => import("@/components/Account.vue");
const Level = () => import("@/components/product/Level.vue");
const Login = () => import("@/components/auth/Login.vue");
const Help = () => import("@/components/help/help.vue");
const Community = () => import("@/components/help/community.vue");
const PrivacyPolicy = () => import("@/components/help/PrivacyPolicy.vue");
const TermsofService = () => import("@/components/help/TermsofService.vue");
const OrderRecords = () => import("@/components/records/OrderRecords.vue");
const AssetsRecords = () => import("@/components/records/AssetsRecords.vue");
const LoanRecords = () => import("@/components/records/LoanRecords.vue");
const Settings = () => "@/components/settings/Settings.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/settings",
      component: Settings,
      name: "settings",
    },
    {
      path: "/loan-records",
      component: LoanRecords,
      name: "loan-records",
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
    {
      path: "/deposit",
      component: Deposit,
      name: "deposit",
    },
  ],
});
// router.beforeEach(async (to, from, next) => {
//   if (["login"].includes(to.name) || localStorage.getItem("user")) {
//     next();
//   } else {
//     next({
//       path: "/login",
//     });
//   }
// });
export default router;
