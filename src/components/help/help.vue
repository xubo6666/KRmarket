<template>
  <div>
    <v-alert color="white" variant="text" style="font-size: 13px">
      <h3 class="text-white mt-5">{{ t("help.title-1") }}</h3>
      <div class="text-white text-left mt-5">
        {{ t("help.text-1") }}
      </div>
      <h3 class="text-white text-left mt-5">
        {{ t("help.title-2") }}
      </h3>
      <div class="text-white text-left mt-5">
        {{ t("help.text-2") }}
      </div>
      <h3 class="text-white mt-5">{{ t("help.title-3") }}</h3>
      <div class="text-white mt-5">
        {{ t("help.text-3") }}
      </div>
      <h3 class="text-white mt-5">{{ t("help.title-4") }}</h3>
      <div class="text-white mt-5">
        {{ t("help.text-4") }}
      </div>
      <h3 class="text-white mt-5">{{ t("help.title-5") }}</h3>
      <div class="text-white mt-5">
        {{ t("help.text-5") }}
      </div>
    </v-alert>
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
};
</script>
