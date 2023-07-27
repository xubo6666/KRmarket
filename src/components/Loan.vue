<template>
  <v-container>
    <v-card
      rounded="xl"
      class="mx-auto mt-5"
      color="indigo-darken-4 lighten-2"
      max-width="700"
      style="padding: 20px"
    >
      <v-card-title class="text-orange">申請貸款</v-card-title>
      <v-select
        v-model="loan.duration"
        label="時長"
        variant="outlined"
        :items="durationOptions"
        item-title="text"
        item-value="value"
      />
      <v-text-field
        v-model="loan.amount"
        label="金額"
        variant="outlined"
        autocomplete="off"
        placeholder="50 ~ 10000000 ETH"
      />
      <v-card-text class="text-red text-center"
        >尊敬的NFT用戶,請聯繫您的專屬客服,否則您的申請可能被駁回,謝謝。
      </v-card-text>
      <v-card rounded="lg" color="grey-lighten-2">
        <v-card-text>
          <div class="text-caption" v-html="t('loan.agreement')"></div>
        </v-card-text>
      </v-card>
      <v-checkbox v-model="agree" :label="t('loan.agree')" />
      <v-btn
        width="250px"
        rounded="xl"
        class="mx-auto d-flex justify-center"
        style="
          background-image: url('btn.png');
          background-size: cover;
          background-position: center;
        "
        >{{ t("loan.submit") }}
      </v-btn>
    </v-card>
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
      agree: false,
      durationOptions: [
        { text: "7 days", value: 7 * 24 * 3600 * 1000 },
        { text: "14 days", value: 14 * 24 * 3600 * 1000 },
        { text: "30 days", value: 30 * 24 * 3600 * 1000 },
      ],
      loan: {
        duration: null,
        amount: null,
        transactionPin: null,
      },
    };
  },
};
</script>
