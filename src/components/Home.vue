<template>
  <v-container class="mt-4">
    <div
      v-for="(imgGroup, index) in productImg"
      :key="index"
      style="overflow: hidden"
    >
      <div
        class="d-flex justify-space-around py-2"
        :class="`img-group-${index}`"
      >
        <img
          v-for="imgUrl in imgGroup"
          :key="imgUrl"
          :src="imgUrl"
          alt="nft-product"
          class="nft-product"
          width="75"
          height="75"
        />
      </div>
      <v-card
        v-if="index === 1"
        rounded="lg"
        color="grey-darken-4"
        class="d-flex align-end justify-space-between font-italic px-4 pb-2 my-2"
        style="font-size: 14px"
      >
        <div>
          <div>test</div>
          <div class="total-size">{{ t("home.totalRevenue") }}</div>
        </div>
        <div class="mt-2">
          <div>321321</div>
          <div class="total-size">{{ t("home.userRevenue") }}</div>
        </div>
        <div class="mt-2">
          <div>123123</div>
          <div class="total-size">{{ t("home.participant") }}</div>
        </div>
      </v-card>
    </div>
    <div>
      <div v-for="(item, index) in items" :key="index" class="text-black">
        <h3 class="text-center mt-5">{{ $t(item.title) }}</h3>
        <div class="text-center mb-5">
          {{ $t(item.description) }}
        </div>
        <div class="d-flex justify-center">
          <v-img
            :src="item.image"
            width="100%"
            max-height="mx-auto"
            max-width="600px"
            rounded="xl"
          />
        </div>
      </div>
      <h2 class="text-black text-center mt-5">{{ $t("home.title-4") }}</h2>
    </div>
    <v-container class="d-flex justify-center mt-5">
      <v-card min-width="500" class="mx-auto rounded-sm">
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows="hover"
          color="grey-lighten-2"
          delimiter-icon="mdi-circle-medium"
          height="auto"
          style="min-height: 500px"
        >
          <!-- custom arrows left -->
          <template v-slot:prev="{ props }">
            <v-btn
              color="grey-lighten-3"
              variant="text"
              icon="mdi-arrow-left-drop-circle-outline"
              @click="props.onClick"
            />
          </template>

          <!-- custom arrows right -->
          <template v-slot:next="{ props }">
            <v-btn
              color="grey-lighten-3"
              variant="text"
              icon="mdi-arrow-right-drop-circle-outline"
              @click="props.onClick"
            />
          </template>

          <!-- Carousel Item -->
          <v-carousel-item
            v-for="product in productCarousel"
            :key="product.img_url"
          >
            <v-img cover max-height="500" :src="product.img_url" width="100%" />
            <div
              class="text-center font-weight-bold pa-1 mb-8"
              style="opacity: 0.6"
            >
              <div style="font-size: 12px">{{ product?.title }}</div>
              <div style="font-size: 10px">{{ product?.author }}</div>
              <div style="font-size: 8px" class="text-grey mb-6">
                {{ product?.description }}
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>
    <!--  -->
    <div class="d-flex justify-center">
      <!-- user 4 help -->
      <v-card
        class="display:flex flex-direction: column justify-content:center mt-10 mb-10"
        color="transparent"
        max-height="mx-auto"
        max-width="500"
      >
        <v-row>
          <v-col>
            <v-divider color="block"></v-divider>
            <v-card-title class="text-black text-center">
              {{ t("home.home-title-1") }}</v-card-title
            >
            <v-img
              src="/wallet.png"
              class="d-flex mx-auto"
              height="50"
              width="50"
            >
            </v-img>
            <br />
            <div class="d-flex align-center flex-column">
              <div class="text-black font-weight-bold">
                {{ t("home.home-title-2") }}
              </div>
              <v-card-text class="text-black text-center">
                {{ t("home.home-text-1") }}</v-card-text
              >
            </div>
            <br />
            <v-img
              src="/time.png"
              class="d-flex mx-auto"
              height="50"
              width="50"
            >
            </v-img>
            <br />
            <div class="d-flex align-center flex-column">
              <div class="text-black font-weight-bold">
                {{ t("home.home-title-3") }}
              </div>
              <v-card-text class="text-black text-center"
                >{{ t("home.home-text-2") }}
              </v-card-text>
            </div>
            <v-img
              src="/find.png"
              class="d-flex mx-auto"
              height="50"
              width="50"
            >
            </v-img>
            <br />
            <div class="d-flex align-center flex-column">
              <div class="text-black font-weight-bold">
                {{ t("home.home-title-4") }}
              </div>
              <v-card-text class="text-black text-center"
                >{{ t("home.home-text-3") }}
              </v-card-text>
            </div>
            <v-img
              src="/note.png"
              class="d-flex mx-auto"
              height="50"
              width="50"
            >
            </v-img>
            <br />
            <div class="d-flex align-center flex-column">
              <div class="text-black font-weight-bold">
                {{ t("home.home-title-5") }}
              </div>
              <v-card-text class="text-black text-center">
                {{ t("home.home-text-4") }}
              </v-card-text>
            </div>
            <v-divider color="block"></v-divider>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div>
      <v-divider color="block"></v-divider>
      <br />
      <router-link to="/help">
        <v-btn variant="text" class="d-flex mx-auto text-white text-h6"
          >{{ t("home.button-title-1") }}
        </v-btn>
      </router-link>
      <br />
      <router-link to="/community">
        <v-btn variant="text" class="d-flex mx-auto text-white text-h6"
          >{{ t("home.button-title-2") }}
        </v-btn>
      </router-link>
      <br />
      <router-link to="/termsofservice">
        <v-btn variant="text" class="d-flex mx-auto text-white text-h6"
          >{{ t("home.button-title-3") }}
        </v-btn>
      </router-link>
      <br />
      <router-link to="/privacypolicy">
        <v-btn variant="text" class="d-flex mx-auto text-white text-h6 mb-5"
          >{{ t("home.button-title-4") }}
        </v-btn>
        <v-divider></v-divider>
      </router-link>
    </div>

    <div cols="12" class="text-center text-white mb-3">&copy; 2022 NFT-BID</div>
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
      productCarousel: [
        {
          img_url: "test1.jpg",
          title: "Product Title 1",
          author: "Author 1",
          description: "Description for Product 1",
        },
        {
          img_url: "test2.jpeg",
          title: "Product Title 2",
          author: "Author 2",
          description: "Description for Product 2",
        },
        {
          img_url: "test3.png",
          title: "Product Title 3",
          author: "Author 3",
          description: "Description for Product 3",
        },
      ],

      productImg: [
        [
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
        ],
        [
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/2.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
          "NFT/1.jpeg",
          "NFT/2-1.jpeg",
          "NFT/2-2.jpeg",
          "NFT/2-3.jpeg",
        ],
        [
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/3.jpeg",
          "NFT/3-1.jpeg",
          "NFT/3-2.jpeg",
          "NFT/3-3.jpeg",
        ],
        [
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
          "NFT/4.jpeg",
          "NFT/4-1.jpeg",
          "NFT/4-2.jpeg",
          "NFT/4-3.jpeg",
          "NFT/1-1.jpeg",
          "NFT/1-2.jpeg",
          "NFT/1-3.jpeg",
          "NFT/1-4.jpeg",
        ],
      ],
      items: [
        {
          title: "home.title-1",
          description: "home.text-1",
          image: "./home-1.gif",
        },
        {
          title: "home.title-2",
          description: "home.text-2",
          image: "./home-2.gif",
        },
        {
          title: "home.title-3",
          description: "home.text-3",
          image: "./home-3.gif",
        },
      ],
    };
  },
};
</script>
<style scoped lang="sass">
.nft-product
  margin: 0 3px
  max-height: 5vmax
  border-radius: 6px

.total-size
  font: size 12px


.img-group-0
  animation: traveling 80s linear infinite

.img-group-1
  animation: traveling 40s linear infinite

.img-group-2
  animation: traveling 50s linear reverse infinite

.img-group-3
  animation: traveling 70s linear reverse infinite
  // ANIME
@keyframes traveling
  from
    transform: translateX(0px)
  to
    transform: translateX(2000px)
</style>
