import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Escaped-Docs",
      description: "EscapedSpark's docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "逸燧文档",
      description: "逸燧撒嘛の文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
