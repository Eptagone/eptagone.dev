import type Schema from "schema-dts";
import type { WithContext } from "schema-dts";

/** Defines the base properties of a layout. */
export interface LayoutProps {
    /** The title of the page */
    title: string;
    /** The description of the page */
    description: string;
    /** Optional. The image to be used as the preview of the page */
    imageUrl?: string | null;

    /** Optional. Specifies the type of the current page. */
    type?: "website" | "article";

    /**
     * Optional. Specifies the schema of the current page.
     *
     * @see https://schema.org/
     */
    schema?: WithContext<Exclude<Schema.Thing, string>>;
}
