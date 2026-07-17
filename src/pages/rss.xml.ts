import { SITE_DESCRIPTION, SITE_TITLE } from "@/shared/constants";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
    const blog = await getCollection("blog");

    return rss({
        // `<title>` field in output xml
        title: SITE_TITLE,
        // `<description>` field in output xml
        description: SITE_DESCRIPTION,
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site!,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: blog
            .sort((a, b) => (a.data.publishDate > b.data.publishDate ? -1 : 1))
            .map<RSSFeedItem>((post) => ({
                title: post.data.title,
                description: post.data.description,
                link: `/blog/${post.id}`,
                pubDate: post.data.publishDate,
            })),
        // (optional) inject custom xml
        customData: "<language>en-us</language>",
        trailingSlash: false,
    });
}
