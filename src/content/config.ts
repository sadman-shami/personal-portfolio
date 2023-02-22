import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.enum(["Sadman Shami"]),
    date: z.date(),
    draft: z.boolean(),
    desc: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
