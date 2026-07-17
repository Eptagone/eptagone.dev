import sharp from "sharp";

/**
 * Crop the given image to the given size.
 *
 * @param inputPath - Image path.
 * @param width - New width.
 * @param height - New height.
 * @param outputPath - Output path.
 */
export async function cropImage(
    inputPath: string,
    width: number,
    height: number,
    outputPath?: string | null,
) {
    if (!outputPath) {
        const parts = inputPath.split(".");
        const extension = parts.pop();
        outputPath = parts.join(".") + `_${width}x${height}.${extension}`;
    }

    await sharp(inputPath).resize(width, height, { fit: "cover" }).toFile(outputPath);
}
