import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Punky Labs",
  description: "Punky, AI-powered cyber pet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Whitepaper", link: "/whitepaper" },
    ],

    sidebar: [
      {
        text: "About Punky",
        items: [
          { text: "Whitepaper", link: "/whitepaper" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/punky-lab",
      },
      {
        icon: "twitter",
        link: "https://x.com/punkypunkyai",
      }
    ],

    footer: {
      // message: "Released under the MIT License.",
      copyright: "Copyright © 2024 Punky Labs",
    },
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
});
