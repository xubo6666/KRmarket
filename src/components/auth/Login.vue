<template>
  <div class="text-center login-component">
    <div class="login-content"></div>
    <MyWeb3ModalButton class="btn rounded-xl" id="my-button">
      登入
    </MyWeb3ModalButton>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import MyWeb3ModalButton from "./MyWeb3ModalButton.vue";
export default {
  components: {
    MyWeb3ModalButton,
  },
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
};
</script>
<style scoped lang="scss">
.login-component {
  /* 設置背景圖片 */
  background-size: cover;
  background-position: top left;
  background-image: url("login.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.btn {
  width: 200px;
  height: 50px;
  background-image: url("btn.png");
  background-size: cover;
  background-position: center;
}
</style>
