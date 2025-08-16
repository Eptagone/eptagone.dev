import sharp from "sharp";
import { cropImage } from "./shared";

if (process.argv.length < 2 || process.argv.length > 3) {
    console.error("Error: Invalid number of arguments.");
    console.log("Usage: cropImage <imagePath> <width> <height> [outputPath]");
    process.exit(1);
}

const imagePath = process.argv[2]!;
const outputPath = process.argv.at(3);

const metadata = await sharp(imagePath).metadata();

const width = metadata.width;
const height = Math.round(width / 16 * 9);

await cropImage(imagePath, width, height, outputPath);

console.log("Done!");
