import { defineConfig } from 'astro/config';
import addClasses from 'rehype-add-classes';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://sadman-shami.vercel.app/",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[addClasses, {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      img: 'img',
      p: 'p',
      ul: 'ul',
      li: 'li',
      code: 'code',
      kbd: 'code',
      table: 'table',
      blockquote: 'blockquote'
    }]]
  },
  integrations: [sitemap(), prefetch({
    selector: "a[href^='/post']",
    throttle: 5
  }), mdx()]
});