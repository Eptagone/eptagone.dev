/**
 * Add an event listener to the document that will call the callback when the user clicks outside of
 * the element or presses the escape key.
 *
 * @param element - The element to listen.
 * @param callback - The callback to call when the user clicks outside of the element or presses the
 *   escape key.
 * @param options - The options to pass to the event listeners.
 * @returns The element that was passed in.
 */
export function attachExitListener<T extends HTMLElement>(
    element: T,
    callback: (event: MouseEvent | KeyboardEvent) => unknown,
    options?: AddEventListenerOptions,
): T {
    document.addEventListener(
        "click",
        (event) => {
            if (!element.contains(event.target as Node)) {
                callback(event);
            }
        },
        options,
    );
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                callback(event);
            }
        },
        options,
    );

    return element;
}
