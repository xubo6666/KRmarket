<template>
  <v-container>
    <v-card
      rounded="xl"
      class="mx-auto mt-5"
      color="indigo-darken-4 lighten-2"
      max-width="700"
      style="padding: 20px"
    >
      <v-card-title class="text-orange">
        {{ t("dueDate.userLoan") }}
      </v-card-title>

      <v-windows class="mx-auto">
        <v-table>
          <td>
            <div class="text-red ml-3">{{ t("dueDate.loanMoney") }}</div>
            <div class="ml-3">5000USDT</div>
          </td>
          <td>
            <div class="text-red">{{ t("dueDate.loanIssueDate") }}</div>
            <div>07-07</div>
          </td>
          <td>
            <div class="text-red">{{ t("dueDate.dueDate") }}</div>
            <div>07-07</div>
          </td>
          <td>
            <div class="text-red">{{ t("dueDate.reviewStatus") }}</div>
            <div>{{ t("dueDate.passed") }}</div>
          </td>
        </v-table>
      </v-windows>
      <v-btn
        max-width="250px"
        color="red"
        rounded
        class="mx-auto mt-10 d-flex justify-center"
        href="https://fc5b0bc231862.meiqiacloud.com/dist/standalone.html?eid=4dd08bdd638f658e9e9c7689656530f3&amp;language=en"
        target="_blank"
        style="
          padding: -10;
          background-image: url('btn.png');
          background-size: cover;
          background-position: center;
        "
      >
        {{ t("dueDate.repayment") }}
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
};
</script>
