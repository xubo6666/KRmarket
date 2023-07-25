import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nVitePlugin({
      // eslint-disable-next-line no-undef
      include: [path.resolve(__dirname, "./src/locales/*")],
    }),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://nbtest.lxxq.cc",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "api"),
  //     },
  //   },
  // },
  base: "/",
  optimizeDeps: {
    include: ["pinia", "dayjs", "@vueuse/core"],
  },
});
