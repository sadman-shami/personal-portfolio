import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blogPosts = await getCollection("blog", ({ data }) => {
    return !data.draft;
  });
  return rss({
    title: 'Sadman Shami Personal Portfolio',
    description: 'My personal minimal portfilo',
    site: context.site,
    items: blogPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.desc,
      link: `/post/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}