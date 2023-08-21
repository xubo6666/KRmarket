<template>
  <v-container>
    <v-card
      class="mx-auto mt-5"
      max-width="375"
      min-height="100"
      rounded="xl"
      style="
        padding: -10;
        background-image: url('b2.png');
        background-size: cover;
        background-position: center;
      "
    >
      <v-row class="text-center mt-3 mb-3">
        <v-col cols="12">
          <div class="text-red">Premium Member</div>
        </v-col>
        <v-col cols="12" class="text-white"> 信用分數： </v-col>
      </v-row>
    </v-card>
    <v-card
      v-for="(card, index) in cardData"
      :key="index"
      color="indigo-darken-4 lighten-2"
      class="mx-auto mt-5"
      max-width="375"
      min-height="125"
      rounded="xl"
    >
      <v-card-title class="text-orange">{{ card.title }}</v-card-title>
      <v-row class="text-center min-font">
        <v-col cols="4">
          {{ card.label1 }}
          <div>{{ card.value1 }}</div>
        </v-col>
        <v-col cols="4">
          {{ card.label2 }}
          <div>{{ card.value2 }}</div>
        </v-col>
        <v-col cols="4">
          {{ card.label3 }}
          <div>{{ card.value3 }}</div>
        </v-col>
      </v-row>
    </v-card>
    <!-- Bank card -->
    <!-- <v-card

      color="indigo-darken-4 lighten-2"
      class="mx-auto mt-5"
      max-width="375"
      min-height="125"
      rounded="xl"
    >
      <v-card-title class="text-orange">銀行卡</v-card-title>

    </v-card> -->

    <v-card
      color="purple-darken-4
             lighten-2"
      class="mx-auto mt-5 mb-5 min-font"
      max-width="550"
      min-height="200"
      rounded="xl"
    >
      <v-row class="text-center">
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large" :to="{ name: 'withdraw' }">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  icon="mdi-exit-to-app"
                  style="color: orange; font-size: 25px; position: absolute"
                />
                <div class="btns" style="margin-top: 20px">
                  {{ t("account.withdraw") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large" :to="{ name: 'duedate' }">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  icon="mdi-cash-clock"
                  style="color: orange; font-size: 25px; position: absolute"
                />
                <div class="btns" style="margin-top: 20px">
                  {{ t("account.duedate") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large" :to="{ name: 'loan' }">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px; white-space: pre-line"
              >
                <v-icon
                  icon="mdi-hand-coin-outline"
                  style="color: orange; font-size: 25px; position: absolute"
                />
                <div class="btns" style="margin-top: 20px">
                  {{ t("account.loan") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large" :to="{ name: 'order-records' }"
              ><div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  class="mb-7"
                  icon="mdi-text-box-search"
                  style="color: orange; font-size: 25px; position: absolute"
                />
                <div style="margin-top: 20px" class="responsive-text">
                  {{ t("account.orderRecords") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large" :to="{ name: 'loan-records' }">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  icon="mdi-format-list-bulleted"
                  class="mb-7"
                  style="color: orange; font-size: 24px; position: absolute"
                />
                <div style="margin-top: 20px" class="responsive-text">
                  {{ t("account.loanRecords") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large" :to="{ name: 'assets-records' }">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  class="mb-7"
                  icon="mdi-file-document"
                  style="color: orange; font-size: 24px; position: absolute"
                />
                <div style="margin-top: 20px" class="responsive-text">
                  {{ t("account.assetsRecords") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mb-5">
            <v-btn variant="text" size="large" :to="{ name: 'deposit' }">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  icon="mdi-handshake-outline"
                  style="color: orange; font-size: 25px; position: absolute"
                />
                <div class="btns" style="margin-top: 20px">
                  {{ t("account.deposit") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="d-flex flex-column mx-auto mt-3">
            <v-btn variant="text" size="large">
              <div
                class="d-flex align-center justify-center"
                style="font-size: 10px"
              >
                <v-icon
                  class="mb-7"
                  icon="mdi-face-agent"
                  style="color: orange; font-size: 25px; position: absolute"
                />
                <div class="responsive-text" style="margin-top: 20px">
                  {{ t("account.customerService") }}
                </div>
              </div>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { useI18n } from "vue-i18n";

export default {
  computed: {
    cardData() {
      return [
        {
          title: this.$t("account.walletUsdt"),
          label1: this.$t("account.available"),
          value1: "123",
          label2: this.$t("account.auction"),
          value2: "123",
          label3: this.$t("account.bidBalance"),
          value3: "123",
        },
        {
          title: this.$t("account.platformUsdt"),
          label1: this.$t("account.bidBalance"),
          value1: "123",
          label2: this.$t("account.totalLoan"),
          value2: "123",
          label3: this.$t("account.usdtBalance"),
          value3: "123",
        },
        {
          title: this.$t("account.profit"),
          label1: this.$t("account.cumulativeProfits"),
          value1: "123",
          label2: this.$t("account.profitToday"),
          value2: "123",
          label3: this.$t("account.usdtWithdraw"),
          value3: "123",
        },
      ];
    },
  },
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },

  data() {
    return {};
  },
};
</script>
<style>
.btns {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 讓文字和圖示置中 */

  overflow: hidden;
  overflow-wrap: anywhere;
  display: flex;
  font-weight: bold;
  justify-content: center;
}
@media (max-width: 600px) {
  /* 600px僅為示例，您可以根據需求調整 */
  .responsive-text {
    white-space: normal !important;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2.2em;
    line-height: 1.1em;
  }

  .min-font {
    font-size: smaller !important;
    font-weight: bolder;
  }
}
</style>
