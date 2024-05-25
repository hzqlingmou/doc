import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Esca-Plugin文档",
      description: "逸燧插件文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
