import { defineCollection, z } from 'astro:content';

export const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    featured: z.boolean().default(true),
  }),
});

export const collections = {
  projects,
};
