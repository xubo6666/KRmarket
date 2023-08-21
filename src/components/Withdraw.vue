<template>
  <v-container class="mt-5">
    <v-card
      class="mx-auto"
      color="indigo-darken-4 lighten-2"
      max-width="700"
      style="padding: 20px"
      rounded="xl"
    >
      <v-card-subtitle class="mt-5">
        {{ t("withdraw.usdtBalance") }}
      </v-card-subtitle>
      <div class="d-flex align-center mt-5">
        <div class="d-flex align-center">
          <v-img src="./usdt.png" width="20" height="20" />
          <div class="ml-3">0.00000123 USDT</div>
        </div>
      </div>
    </v-card>
    <div class="text-center text-white mt-5 mb-5" style="font-size: 16px">
      {{ t("withdraw.handlingFee") }}1.00%
    </div>
    <v-card
      class="mx-auto"
      color="indigo-darken-4 lighten-2"
      max-width="700"
      style="padding: 20px"
      rounded="xl"
    >
      <v-card-subtitle> {{ t("withdraw.usdtEnter") }} </v-card-subtitle>
      <v-text-field v-model="amount" prepend-inner class="mt-5 pl-10 pr-10">
        <template v-slot:prepend-inner>
          <v-img src="./usdt.png" width="20" height="20" />
        </template>
      </v-text-field>
      <div class="d-flex justify-end">
        <v-btn
          @click="setMaxMoney"
          color="red"
          style="
            padding: -10;
            background-image: url('btn.png');
            background-size: cover;
            background-position: center;
          "
          >{{ t("withdraw.usdtAll") }}</v-btn
        >
      </div>
    </v-card>
    <v-img
      src="./movie.png"
      max-width="25"
      max-height="auto"
      class="d-flex align-center justify-center mx-auto mt-5"
    ></v-img>
    <v-btn
      width="250px"
      color="red"
      rounded
      class="mx-auto my-5 d-flex justify-center"
      style="
        padding: -10;
        background-image: url('btn.png');
        background-size: cover;
        background-position: center;
      "
    >
      {{ t("withdraw.confirm") }}
    </v-btn>
  </v-container>
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
      amount: 0,
      maxAmount: 0,
    };
  },
};
</script>
