<template>
  <v-card
    color="indigo-darken-4
             lighten-2"
    class="mx-auto mt-5"
    max-width="1000"
    max-higth="800"
    rounded="xl"
  >
    <h4 class="my-6">{{ t("settings.title") }}</h4>

    <v-btn
      v-for="page in settingPages"
      :key="page.component"
      :to="{ name: page.component }"
      block
      elevation="4"
      :prepend-icon="page.icon"
      class="rounded-lg text-body-2 justify-start py-8 my-4"
      >{{ t(page.msg) }}</v-btn
    >
  </v-card>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "Settings",
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
  data() {
    return {
      settingPages: [
        // {
        //   component: "Edit details",
        //   icon: "mdi-pencil-outline",
        //   msg: "settings.edit",
        // },
        // {
        //   component: "changePassword",
        //   icon: "mdi-lock-outline",
        //   msg: "settings.changePassword",
        // },
        // {
        //   component: "Change transaction pin",
        //   icon: "mdi-lock-outline",
        //   msg: "settings.changeTransactionPin",
        // },
        // {
        //   component: "Bank settings",
        //   icon: "mdi-bank-outline",
        // },
        // {
        //   component: "notifications",
        //   icon: "mdi-bell-outline",
        //   msg: "settings.notifications",
        // },
        // {
        //   component: "logout",
        //   icon: "mdi-logout",
        //   msg: "settings.logout",
        // },
      ],
    };
  },
};
</script>

<style lang=""></style>
