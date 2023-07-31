<template>
  <v-container>
    <v-tabs align-tabs="center">
      <v-tab> 展示中 </v-tab>
      <v-tab> 任務中 </v-tab>
      <v-tab> 已結束 </v-tab>
      <v-tab> 全部 </v-tab>
    </v-tabs>
    <v-window>
      <v-window-item>
        <v-card rounded="lg" class="mb-6 mx-auto" max-width="500">
          <v-img max-height="500" cover src="test.jpg" alt="image">
            <v-chip
              rounded="xl"
              size="x-small"
              class="top-right bg-grey-lighten-2"
            >
              <p style="font-weight: bolder">LV. 1</p>
            </v-chip>
            <v-spacer />

            <v-chip
              variant="outlined"
              color="red"
              size="x-small"
              class="top-left bg-grey-lighten-2"
              >任務中</v-chip
            >
          </v-img>
          <div class="d-flex pa-3">
            <div>
              <b>No.1855</b>
            </div>
            <v-spacer />
            <v-chip
              color="blue"
              size="x-small"
              class="btn-custom-sm font-weight-bold rounded-lg mr-3"
            >
              <v-icon icon="mdi-cursor-default-click" class="mr-2" />
              5566
            </v-chip>

            <v-chip
              color="red"
              size="x-small"
              class="btn-custom-sm font-weight-bold rounded-lg"
            >
              <v-icon icon="mdi-heart" class="mr-2" />
              1234
            </v-chip>
          </div>
          <v-row class="pa-3">
            <v-col col="6">
              <div>商品價格</div>

              0.133 USDT
              <v-spacer />
            </v-col>

            <v-col col="6">
              <div>收益率</div>
              0.013
              <v-spacer />
            </v-col>
          </v-row>
          <v-btn block flat class="btn-custom bg-blue-darken-1">
            <v-icon icon="mdi-alarm" class="mr-2" />
            <div>END</div>
          </v-btn>
        </v-card>
      </v-window-item>
    </v-window>
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
<style>
/* .top-right {
  position: absolute;
  top: 0.8rem;
  left: 17rem;
  opacity: 0.7;
}
.top-left {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  opacity: 0.7;
} */
</style>
