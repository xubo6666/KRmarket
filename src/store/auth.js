import { defineStore } from "pinia";
import { ref } from "vue";

const loginStatus = localStorage.getItem("user") ? true : false;
export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      loggedIn: ref(loginStatus),
    };
  },
  actions: {
    changeLoginState(payload) {
      this.loggedIn = payload;
    },
  },
});
