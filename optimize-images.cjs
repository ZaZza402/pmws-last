const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeHeroImage() {
  const inputPath = './src/assets/brand-posters/young-family-enjoying-trips-_2_.webp';
  const outputPath = './src/assets/brand-posters/young-family-hero-optimized.webp';
  
  console.log('🖼️  Optimizing hero image...');
  console.log(`📂 Input: ${inputPath}`);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`📐 Original size: ${metadata.width}x${metadata.height}`);
    
    const inputStats = fs.statSync(inputPath);
    console.log(`💾 Original file size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
    
    // Optimize for desktop (1920px width)
    await sharp(inputPath)
      .resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    console.log(`✅ Optimized file size: ${(outputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📉 Reduction: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%`);
    console.log(`✨ Saved to: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

optimizeHeroImage();
