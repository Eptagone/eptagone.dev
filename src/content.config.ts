import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({ base: "./src/data/blog", pattern: "**/*.md" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.date(),
            tags: z.array(z.string()),
            image: image(),
        }),
});

const projects = defineCollection({
    loader: glob({ base: "./src/data/projects", pattern: "**/*.json" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog, projects };
