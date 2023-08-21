import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import vuetify from "@/plugins/vuetify";
import messages from "@intlify/unplugin-vue-i18n/messages";
import "@/assets/style.scss";
// import Alert from "@/components/Alert.vue";

const pinia = createPinia();
const app = createApp(App);
const defaultLanguage = window.navigator.language;
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("locale") || defaultLanguage,
  fallbackLocale: "en",
  messages: {
    en: messages.en,
    kr: messages.kr,
    jp: messages.jp,
  },
});

app.use(vuetify);
app.use(store);
app.use(router);
app.use(pinia);
app.use(i18n);
// app.component("Alert", Alert);

app.mount("#app");
