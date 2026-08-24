// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://mjadiaz.github.io',
  integrations: [mdx(), sitemap()],
  // Old Hugo URLs that people may already have linked or subscribed to.
  redirects: {
    '/blog/eucaif': '/blog/eucaif-flash-talk',
  },
  markdown: {
    // KaTeX runs at build time, so posts ship as plain HTML + the KaTeX stylesheet.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { output: 'html' }]],
    }),
    shikiConfig: { theme: 'github-dark-default', wrap: true },
  },
});
