<template>
  <v-container class="d-flex justify-center">
    <v-card variant="text" class="pa-5">
      <v-card
        class="pa-4 mx-auto"
        rounded="xl"
        max-height="mx-auto"
        max-width="500"
      >
        <v-img src="/test22.jpeg" alt="image" max-width="500"></v-img>
        <div class="text-center">
          <v-card-title class="">Nijai Dog #0487</v-card-title>
          <v-card-subtitle class="text-center"
            >作者：RabidDogPackDeployer</v-card-subtitle
          >
          <v-chip
            color="blue"
            size="x-small"
            class="btn-custom-sm font-weight-bold mr-3"
          >
            <v-icon icon="mdi-cursor-default-click" />
            8888
          </v-chip>

          <v-chip
            variant="outlined"
            color="red"
            size="x-small"
            class="btn-custom-sm font-weight-bold rounded-lg"
          >
            <v-icon icon="mdi-heart" />
            7777
          </v-chip>
        </div>
        <div class="article-content justify-center">
          <v-list
            class="overflow-y-auto mt-3 mb-3"
            max-height="150"
            max-width="500"
          >
            <v-list-item style="font-size: 12px"
              >The year was 2060, when dogs took over the world, conquered all
              businesses and destroyed all competitors. None of the gangs around
              the world could stop them. They were so feared that they were
              called Rabid Dog Pack. 5000 Unique dogs generated from 200+
              attributes and 3 breeds. First 5000 is OG, including breed
              counter. 25k more dogs minted, until 5k dogs sold they will
              exsist, after that they will be deleted. But only Bulldog breed
              were added, 2 other breeds stay unchanged. Why not? Price
              generated randomly every 24h. Category PFPs</v-list-item
            >
          </v-list>
          <div class="text-end"></div>
        </div>
        <v-divider class="border-opacity-100 mb-3" color="warning"></v-divider>
        <div class="d-flex justify-space-between mb-2">
          <div class="text-caption">價格</div>
          <div>3000USDT</div>
        </div>
        <div class="d-flex justify-space-between mb-2">
          <div class="text-caption">收益率</div>
          <div>0.88USDT</div>
        </div>
        <div class="mb-2">
          <div class="text-caption">地址</div>
          <div class="text-caption">
            0x19b86299c21505cdf59ce63740b240a9c822b5e4
            <v-icon icon="mdi-view-day-outline" />
          </div>
        </div>
      </v-card>
      <v-btn block color="black" rounded="lg" class="btn-custom mt-6"
        >競標</v-btn
      >
    </v-card>
  </v-container>
</template>
