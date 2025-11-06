const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [192, 512];
const inputFile = path.join(
  __dirname,
  "src",
  "assets",
  "brand-logo",
  "logo.png"
);
const outputDir = path.join(__dirname, "public");

async function generateIcons() {
  console.log("Generating PWA icons...");

  for (const size of sizes) {
    const outputFile = path.join(outputDir, `pwa-${size}x${size}.png`);

    try {
      await sharp(inputFile)
        .resize(size, size, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .png()
        .toFile(outputFile);

      console.log(`✓ Generated ${size}x${size} icon`);
    } catch (error) {
      console.error(`✗ Error generating ${size}x${size} icon:`, error);
    }
  }

  console.log("PWA icons generation complete!");
}

generateIcons();
