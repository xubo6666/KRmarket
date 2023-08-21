<template>
  <v-container>
    <v-card
      rounded="xl"
      class="rounded-card mx-auto mt-5"
      color="indigo-darken-4 lighten-2"
      max-width="700"
      style="padding: 16px"
    >
      <v-tabs v-model="tab" class="mb-5">
        <v-tab class="text-body-2" value="loan">
          {{ t("account.loan") }}
        </v-tab>
      </v-tabs>

      <v-window v-model="tab" class="table-border">
        <!-- Withdraw -->
        <v-window-item value="loan">
          <v-table v-if="loans.length !== 0" class="text-caption rounded-lg">
            <tbody>
              <tr v-for="records in loans" :key="records.id">
                <td>
                  <div>{{ records.amount?.toLocaleString("en-US") }} THB</div>
                </td>
                <td style="font-size: 8px" class="text-grey-darken-1">
                  <div>
                    {{ records.created_at?.substring(5, 10) }}
                  </div>
                  <div>
                    {{ records.created_at?.substring(11, 16) }}
                  </div>
                </td>
                <td
                  :class="`${
                    records.accept_status === 0
                      ? 'text-grey'
                      : records.accept_status === 1
                      ? 'text-green'
                      : 'text-red'
                  }`"
                >
                  {{
                    records.accept_status === 0
                      ? t("messages.proccess")
                      : records.accept_status === 1
                      ? t("messages.success")
                      : t("messages.failed")
                  }}
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-card v-else rounded="lg" class="text-center">
            <v-card-text> {{ t("messages.noData") }} </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>

    <!-- <v-card
        rounded="xl"
        class="rounded-card mx-auto mt-5"
        color="indigo-darken-4 lighten-2"
        max-width="700"
        style="padding: 16px"
      >
        <v-card-subtitle class="mt-3 pl-2 ml-5"> 當前ETH餘額 </v-card-subtitle>
        <div>123</div>
      </v-card> -->
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
      tab: "",
    };
  },
};
</script>
