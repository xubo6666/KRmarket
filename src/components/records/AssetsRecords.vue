<template>
  <v-card
    rounded="xl"
    class="mx-auto my-12 card-border"
    max-width="550"
    color="indigo-darken-4 lighten-2"
    style="width: 95%"
  >
    <v-tabs v-model="tab">
      <v-tab value="Withdraw"> {{ t("assets-records.withdrawal") }} </v-tab>
      <v-tab value="Deposit"> {{ t("assets-records.deposit") }} </v-tab>
      <v-tab value="Order"> {{ t("assets-records.orderRecord") }} </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="Withdraw">
        <v-table class="rounded-lg text-caption">
          <tbody>
            <tr>
              <td>USDT</td>
              <td>151</td>
              <td class="text-grey">07-07 23:59</td>
              <td class="text-green">{{ t("assets-records.success") }}</td>
            </tr>
          </tbody>
        </v-table></v-window-item
      >

      <v-window-item value="Deposit">
        <v-table class="rounded-lg text-caption">
          <tbody>
            <tr>
              <td>USDT</td>
              <td>151</td>
              <td class="text-grey">07-07 23:59</td>
              <td class="text-green">{{ t("assets-records.success") }}</td>
            </tr>
          </tbody>
        </v-table></v-window-item
      >
      <v-window-item value="Order">
        <v-table class="rounded-lg text-caption">
          <tbody>
            <tr>
              <td>
                <v-img src=/test.jpg alt="imgae" width="50" height="75" />
              </td>
              <td>100USDT</td>
              <td class="text-grey">07-07 23:59</td>
            </tr>
            <tr>
              <td>
                <v-img src=/test.jpg alt="imgae" width="50" height="75" />
              </td>
              <td>100USDT</td>
              <td class="text-grey">07-07 23:59</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item></v-window
    >
  </v-card>
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
      tab: "Withdraw",
      notCompleted: [],
      completed: [],
    };
  },
};
</script>
