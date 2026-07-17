/**
 * Creates a uri from the entered text.
 *
 * @param text - Text to convert.
 * @returns
 */
export function createUri(text: string): string {
    return kebaberize(text.replace(/#/g, "sharp"));
}

/**
 * Returns the entered text in kebab-case format.
 *
 * @param text - Text to convert.
 * @returns Text in kebab-case.
 */
function kebaberize(text: string): Lowercase<string> {
    // Remove diacritics from the text.
    text = removeDiacritics(text);
    // Replace all characters that are not letters, numbers, or spaces with a space.
    text = text.replace(/[^a-zA-Z0-9\s]/g, " ");
    // Remove spaces at the beginning or end of the text.
    text = text.trim();
    // Replace multiple spaces with a single space.
    text = text.replace(/\s+/g, " ");
    // Insert a hyphen between lowercase and uppercase.
    text = text.replace(/(?<=\w)(?=[A-Z])/g, "-");
    // Replace all spaces with hyphens.
    text = text.replace(/\s/g, "-");
    // Make all characters lowercase.
    text = text.toLowerCase();
    return text as Lowercase<string>;
}

/**
 * Removes diacritics from a text.
 *
 * @param text - Text to clean.
 * @returns Text without diacritics.
 */
function removeDiacritics(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
