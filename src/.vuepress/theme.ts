import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://escaped.icu",

  author: {
    name: "逸燧",
    url: "http://escaped.icu",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "http://pi.escaped.icu/1.png",

  repo: "hzqlingmou/doc",

  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "「梦在前方,路在脚下」",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
    //  "/example.html": ["1234"],
    },
  },

  plugins: {
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      hint: true,	       // 提示容器
      figure: true,      // 启用 figure 图片描述
      imgLazyload: true, // 启用图片懒加载
      imgMark: true,     // 启用图片标记
      imgSize: true,     // 启用图片大小
      codetabs: true,    // 多行代码块
      mark: true,        //标记        
      align: true,    // 自定义对齐
      tasklist: true, // 任务列表
      attrs: true,    // 属性支持
      demo: true,     // 代码演示
      include: true,  // 导入文件
      footnote: true, // 启用脚注
      alert: true,    //启用GFM警告容器
      playground: {
        presets: ["ts", "vue"],
      },
          
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      stylize: [
      // 样式化
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
            };
          },
        },
      ],
    },
  },
});

