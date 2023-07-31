<template>
  <v-card
    rounded="xl"
    class="mx-auto my-12 card-border"
    max-width="550"
    color="indigo-darken-4 lighten-2"
  >
    <v-tabs v-model="tab">
      <v-tab value="Completed"> 展示中 </v-tab>
      <v-tab value="On display"> 任務中 </v-tab>
      <v-tab value="Assignment"> 已結束 </v-tab>
      <v-tab value="Failed"> 全部 </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="Completed">
        <v-table class="rounded-lg text-caption">
          <tbody>
            <tr>
              <td>
                <v-img src=/test22.jpeg alt="imgae" width="50" height="75" />
              </td>
              <td>100USDT</td>
              <td class="text-grey">07-07 23:59</td>
            </tr>
            <tr>
              <td>
                <v-img src=/test22.jpeg alt="imgae" width="50" height="75" />
              </td>
              <td>100USDT</td>
              <td class="text-grey">07-07 23:59</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item value="On display">
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
      </v-window-item>
    </v-window>
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
      tab: "Completed",
      notCompleted: [],
      completed: [],
    };
  },
};
</script>
