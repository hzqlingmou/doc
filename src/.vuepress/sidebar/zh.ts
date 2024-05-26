import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "主页",
    {
      text: "文档",
      icon: "book",
      prefix: "/guide/",
      children: "structure",
    },
  ],
});
