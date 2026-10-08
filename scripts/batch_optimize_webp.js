const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'assets');

async function optimizeAll() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
  console.log(`Found ${files.length} webp files to process.`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const inputBuffer = fs.readFileSync(filePath);
    const beforeSize = inputBuffer.length;
    totalBefore += beforeSize;

    const lower = file.toLowerCase();
    let maxWidth = 1200;
    let quality = 80;

    if (lower.includes('leaf') || lower.includes('sprout')) {
      maxWidth = 400;
      quality = 78;
    } else if (lower.includes('logo') || lower.includes('emblem')) {
      maxWidth = 800;
      quality = 82;
    } else if (lower.includes('sphere')) {
      maxWidth = 700;
      quality = 80;
    } else if (lower.includes('dashboard') || lower.includes('cutout') || lower.includes('illustration') || lower.includes('page')) {
      maxWidth = 1000;
      quality = 78;
    } else if (lower.includes('waves') || lower.includes('bg')) {
      maxWidth = 1600;
      quality = 75;
    }

    try {
      const outputBuffer = await sharp(inputBuffer)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toBuffer();

      if (outputBuffer.length < beforeSize) {
        fs.writeFileSync(filePath, outputBuffer);
        totalAfter += outputBuffer.length;
        console.log(`Optimized ${file}: ${(beforeSize / 1024).toFixed(1)} KB -> ${(outputBuffer.length / 1024).toFixed(1)} KB`);
      } else {
        totalAfter += beforeSize;
        console.log(`Kept ${file}: already optimal (${(beforeSize / 1024).toFixed(1)} KB)`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
      totalAfter += beforeSize;
    }
  }

  console.log('\n======================================');
  console.log(`Total Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total After: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Savings: ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
  console.log('======================================');
}

optimizeAll();
