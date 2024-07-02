import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({

  lang: "zh-CN",
  title: "Esca-Plugin文档",
  description: "「我思故我在,一念定乾坤」",

  theme: hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "逸燧EscapedSpark",
    url: "https://escaped.icu",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://pi.escaped.icu/1.png",

  repo: "hzqlingmou/esca-plugin",

  docsDir: "src",

  navbar: [
  {
    text: "首页",
    icon: "laptop-code",
    link: "/",
    activeMatch: "^/$",
  },
  {
    text: "文档",
    icon: "book",
    link: "/guide",
    activeMatch: "^/$"
  },
  ],
  sidebar: [
  {
    text: "首页",
    icon: "laptop-code",
    link: "/",
    activeMatch: "^/$",
  },
  {
    text: "文档",
    icon: "book",
    link: "/guide",
    activeMatch: "^/$"
  },
  ],

  // 页脚
  footer: "「梦在前方,路在脚下」",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "高中在校生，独立开发者",
    intro: "https://escaped.icu",
    medias: {
      QQ: "https://qm.qq.com/q/JDf3REVSMM",
      Gitee: "https://gitee.com/escaped-spark",
      GitHub: "https://github.com/hzqlingmou",
    },
  },
  
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  
  plugins: {
    blog: true,
    comment: {
       provider: "Waline",
       serverURL: "https://pinglun.botqsign.icu",
    },

    components: {
      components: ["Badge", "VPCard"],
    },
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
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
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
}),
});
