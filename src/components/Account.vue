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
      <v-row class="text-center">
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
      class="mx-auto mt-5 mb-5"
      max-width="550"
      min-height="200"
      rounded="xl"
    >
      <v-row class="text-center">
        <v-col cols="4">
          <v-btn variant="text" size="large"
            ><v-icon
              icon="mdi-swap-horizontal"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">兌換</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large"
            ><v-icon
              icon="mdi-swap-horizontal"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">兌換</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large" :to="{ name: 'withdraw' }"
            ><v-icon
              icon="mdi-exit-to-app"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">提款</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large" :to="{ name: 'duedate' }"
            ><v-icon
              icon="mdi-cash-clock"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">到期日</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large" :to="{ name: 'loan' }"
            ><v-icon
              icon="mdi-hand-coin-outline"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">貸款</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large"
            ><v-icon
              icon="mdi-handshake-outline"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">充值</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large"
            ><v-icon
              icon="mdi-face-agent"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">客服中心</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large" :to="{ name: 'assets-records' }"
            ><v-icon
              icon="mdi-file-document"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">資產紀錄</div>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn variant="text" size="large" :to="{ name: 'order-records' }"
            ><v-icon
              icon="mdi-text-box-search"
              style="color: orange; font-size: 25px; position: absolute"
            />
            <div class="btns" style="margin-top: 20px">訂單記錄</div>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      cardData: [
        {
          title: "錢包 USDT餘額",
          label1: "可用數量",
          value1: "123",
          label2: "拍賣中",
          value2: "123",
          label3: "競標餘額",
          value3: "123",
        },
        {
          title: "平臺USDT餘額",
          label1: "競標餘額",
          value1: "123",
          label2: "貸款總金額",
          value2: "123",
          label3: "USDT餘額",
          value3: "123",
        },
        {
          title: "獲利",
          label1: "累積獲利",
          value1: "123",
          label2: "今日獲利",
          value2: "123",
          label3: "已提領USDT",
          value3: "123",
        },
      ],
    };
  },
};
</script>
<style>
.btns {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 讓文字和圖示置中 */
  font-size: 12px;
  overflow: hidden;
  overflow-wrap: anywhere;
  display: flex;
  font-weight: bold;
  justify-content: center;
}
</style>
