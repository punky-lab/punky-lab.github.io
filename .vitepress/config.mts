import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Punky Official Site",
  description: "Punky, AI-powered cyber pet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'About Punky',
        items: [
          { text: 'Introduction', link: '/introduction' },
        ],
      },
      {
        text: 'About our team',
        items: [
          { text: 'Members', link: '/introduction' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/punky-lab' }
    ],
  }
})
