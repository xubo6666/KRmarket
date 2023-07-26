<template>
  <v-container>
    <v-card
      color="indigo-darken-4
             lighten-2"
      class="mx-auto"
      max-width="500"
      max-height="mx-auto"
      rounded="xl"
    >
      <v-row class="text-center mt-3 mb-3">
        <v-col cols="6">
          <v-card-subtitle>拍賣中</v-card-subtitle>
          <div>123</div>
        </v-col>
        <v-col cols="6">
          <v-card-subtitle>今日收益</v-card-subtitle>
          <div>567</div>
        </v-col>
        <v-col cols="6">
          <v-card-subtitle>競標可用餘額</v-card-subtitle>
          <div>789</div>
        </v-col>
        <v-col cols="6">
          <v-card-subtitle>可用餘額</v-card-subtitle>
          <div>0123</div>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      v-for="(level, index) in levelData"
      :key="level.id"
      variant="outlined"
      class="mx-auto gradient-0 gradient-1 gradient-2 gradient-3 gradient-4"
      max-width="500"
      max-height="mx-auto"
      :style="{
        margin: '50px auto',
        border: '2px solid ' + getCardColor(index),
        backgroundImage: `linear-gradient(to bottom right, ${getGradientColors(
          index
        )})`,
        cursor: 'pointer',
      }"
    >
      <v-img
        :src="level.icon"
        width="50"
        height="50"
        :aspect-ratio="1"
        class="mt-5 mr-5 position-absolute"
        style="top: -15px; right: -15px"
      />
      <v-row>
        <v-col cols="5">
          <v-img
            :src="level.image"
            :alt="level.title"
            contain
            :aspect-ratio="1"
            class="mx-auto"
            max-width="200px"
            max-height="200px"
          ></v-img>
        </v-col>
        <v-col cols="7" class="text-white">
          <div class="pt-3">{{ level.title }}</div>
          <div class="text-white mt-5" style="font-size: 14px">
            1.0~2.0 USDT
          </div>
          <div style="white-space: nowrap">
            點擊進入<v-icon size="12" color="#B6B6B6">mdi-chevron-right</v-icon>
            <v-icon size="12" color="#B6B6B6">mdi-chevron-right</v-icon>
            <v-icon size="12" color="#B6B6B6">mdi-chevron-right</v-icon>
          </div>
        </v-col>
      </v-row>
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
  data: () => ({
    levelData: [
      {
        id: 1,
        title: "Level 1",
        description: "Beginner",
        amount: 0.1,
        image: "./test1.jpeg",
        icon: "./icon.png",
      },
      {
        id: 2,
        title: "Level 2",
        description: "Intermediate",
        amount: 0.2,
        image: "./test1.jpeg",
      },
      {
        id: 3,
        title: "Level 3",
        description: "Expert",
        amount: 0.3,
        image: "./test1.jpeg",
      },
      {
        id: 4,
        title: "Level 4",
        description: "Master",
        amount: 0.4,
        image: "./test1.jpeg",
      },
      {
        id: 5,
        title: "Level 5",
        description: "Legend",
        amount: 0.5,
        image: "./test1.jpeg",
      },
    ],
    getCardColor(index) {
      switch (index) {
        case 0:
          return "#1e5f74";
        case 1:
          return "#23316d";
        case 2:
          return "#2a2f4f";
        case 3:
          return "#ffa000";
        case 4:
          return "#9e9e9e";
        default:
          return "#bdc3c7";
      }
    },
    getGradientColors(index) {
      switch (index) {
        case 0:
          return "#0d2147, #1e5f74";
        case 1:
          return "#02081f, #23316d";
        case 2:
          return "#03030c, #2a2f4f";
        case 3:
          return "#46091e, #821e3a";
        case 4:
          return "#601b40, #b83b5e";
        default:
          return "#bdc3c7";
      }
    },
  }),
};
</script>
<style></style>
