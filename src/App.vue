<template>
  <v-app id="v-app">
    <v-app-bar flat color="indigo-darken-4">
      <v-btn style="height: 30px" @click="$router.go(-1)">
        <v-icon size="15">mdi-arrow-left-circle-outline t</v-icon>
      </v-btn>

      <div class="flex-grow-1 text-center text-caption">
        {{ $route.name ? t(`routes.${$route.name}`) : "" }}
        {{ $route.params.number }}
      </div>

      <!-- Dropdown menu -->
      <!-- <template v-slot:append>
        <v-btn id="menu-activator" color="blue-grey-lighten-4">
          <v-icon size="20">mdi-dots-vertical</v-icon>
        </v-btn>

        <v-menu v-model="dropdown" activator="#menu-activator">
          <v-list class="bg-main">
            <v-list-item>
              <v-btn
                variant="text"
                class="text-black text-caption"
                prepend-icon="mdi-cog-outline"
                :to="{ name: 'settings' }">
                {{ t("dropdown.settings") }}
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                variant="text"
                class="text-black text-caption"
                prepend-icon="mdi-web"
                @click.stop="dialogLan = true">
                {{ t("dropdown.language") }}
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                variant="text"
                class="text-caption"
                prepend-icon="mdi-contacts"
                href="https://fc5b0bc231862.meiqiacloud.com/dist/standalone.html?eid=4dd08bdd638f658e9e9c7689656530f3&language=en"
                target="_blank">
                {{ t("dropdown.contact") }}
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                v-if="loggedIn"
                variant="text"
                class="text-caption text-red-darken-3"
                prepend-icon="mdi-logout"
                @click.stop="handleLogout()">
                {{ t("dropdown.logout") }}
              </v-btn>

              <v-btn
                v-else
                variant="text"
                class="text-caption text-green-darken-2"
                prepend-icon="mdi-login"
                :to="{ name: 'login' }">
                Login
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </template> -->

      <!-- Language dialog -->
      <!-- <v-dialog v-model="dialogLan" scroll-strategy="none" max-width="400">
        <v-card>
          <v-card-title class="text-h6">
            {{ t("dropdown.language") }}
          </v-card-title>
          <v-select
            v-model="locale"
            label="Language"
            variant="solo"
            append-inner-icon="mdi-web"
            :items="localeOptions"
            item-title="text"
            item-value="value"
            class="mx-6"
            @update:modelValue="
              dialogLan = false;
              dropdown = false;
            " />
        </v-card>
      </v-dialog> -->
    </v-app-bar>
    <v-main class="background"
      ><router-view class="mx-auto px-6 pt-4 pb-15" />
    </v-main>

    <v-footer
      app
      fixed
      color="indigo-darken-4"
      class="flex justify-space-around"
    >
      <v-btn variant="text" class="text-caption" :to="{ name: 'home' }">
        <v-icon icon="mdi-home-outline" color="blue-grey-lighten-4" />
        {{ t("footerPanel.home") }}
      </v-btn>

      <v-btn variant="text" class="text-caption" :to="{ name: 'level' }"
        ><v-icon icon="mdi-magnify" color="blue-grey-lighten-4" />
        {{ t("footerPanel.explore") }}
      </v-btn>

      <v-btn variant="text" class="text-caption" :to="{ name: 'account' }"
        ><v-icon icon="mdi-account-outline" color="blue-grey-lighten-4" />
        {{ t("footerPanel.account") }}
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import { watch } from "vue";

import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();

    watch(locale, newLocale => {
      localStorage.setItem("locale", newLocale);
    });

    return {
      t,
      locale,
    };
  },
  data() {
    return {
      localeOptions: [
        { text: "English", value: "en" },
        { text: "Chinese", value: "zh" },
      ],
      dropdown: false,
      dialogLan: false,
      dialogAnnounce: false,
      dialogEntryPic: false,
      dialogEntryPic2: false,
      accessToken: "",
      websiteDialogTitle: "123",
      websiteDialogInfo: "",
      websiteIntroHtml: null,
      timeoutInMs: 2 * 60 * 60 * 1000,
      videoOut: false,
      welcomeOut: false,
      windowWidth: window.innerWidth,
    };
  },
};
</script>
<style>
.background {
  background-image: linear-gradient(rgb(135, 206, 250), rgb(25, 25, 112));
  background-size: cover;
  background-position: center;
}
.footer-background {
  background-color: rgb(70, 30, 103);
}

.v-list-item {
  min-height: 0px;
}

.btn-close-welcome {
  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  z-index: 9999999;
  opacity: 0.6;
}

.welcome-pic-wrap {
  position: absolute;
  z-index: 9999999;
  top: 0;
  left: 0;
}
.welcome-pic {
  position: absolute;
  top: 0;
}
</style>
