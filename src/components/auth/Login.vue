<template>
  <div class="mt-10">
    <v-card class="mx-auto table-border" max-width="650px" color="transparent">
      <h1 class="">{{ t("login.title") }}</h1>

      <v-form>
        <v-responsive class="mx-auto" max-width="600px" width="95%">
          <v-text-field
            v-model="loginForm.username"
            :label="t('login.username') + ' *'"
            variant="outlined"
            hide-details="auto"
            class="mt-5" />

          <v-text-field
            v-model="loginForm.password"
            :label="t('login.password') + ' *'"
            variant="outlined"
            class="mt-5"
            :append-inner-icon="
              showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
            hide-details="auto" />
        </v-responsive>
      </v-form>

      <div class="text-caption ml-5">
        {{ t("login.forgotPassword") }}?
        <a target="_blank" href="https://vuetifyjs.com" @click.stop>{{
          t("login.tapHere")
        }}</a>
      </div>

      <drag-verify
        :width="275"
        class="mt-5 mx-auto rounded-lg"
        progressBarBg="#A191FF"
        :text="t('slideToVerify')"
        :successText="t('register.human')"
        handlerIcon="el-icon-d-arrow-right"
        successIcon="el-icon-circle-check"></drag-verify>
      <div class="d-flex justify-center">
        <v-btn
          max-width="550px"
          width="95%"
          color="black"
          class="rounded-xl mt-5 text-body-1"
          >{{ t("login.login") }}</v-btn
        >
      </div>
      <div class="d-flex justify-center">
        <v-btn
          max-width="550px"
          width="95%"
          color="black"
          class="rounded-xl mt-5 mb-5 text-body-1"
          variant="outlined"
          >{{ t("login.signup") }}</v-btn
        >
      </div>
      <Alert />
    </v-card>
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      account: "",
      password: "",
      showPassword: false,

      // Validate rules
      valid: true,
      usernameRules: [(v) => !!v || this.t("messages.usernameRequired")],
      passwordRules: [(v) => !!v || this.t("messages.passwordRequired")],

      // other
      captchaPassed: false,

      alert: {
        alertText: "",
        alertType: "info",
        show: false,
      },
    };
  },
};
</script>
