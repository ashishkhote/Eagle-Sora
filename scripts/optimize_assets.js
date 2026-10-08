const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const publicDir = path.join(__dirname, '..', 'public');

async function convertAndOptimize() {
  console.log('--- Starting Ultra-Lightweight Image Optimization ---');
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let convertedCount = 0;

  // 1. Process public/assets
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const srcPath = path.join(assetsDir, file);
      const originalStat = fs.statSync(srcPath);
      totalOriginal += originalStat.size;

      const baseName = path.basename(file, ext);
      const webpFileName = `${baseName}.webp`;
      const destPath = path.join(assetsDir, webpFileName);

      try {
        await sharp(srcPath)
          .webp({
            quality: 85,
            alphaQuality: 90,
            effort: 6,
          })
          .toFile(destPath);

        const newStat = fs.statSync(destPath);
        totalOptimized += newStat.size;
        convertedCount++;

        const savedPct = (((originalStat.size - newStat.size) / originalStat.size) * 100).toFixed(1);
        console.log(`Converted: ${file} (${(originalStat.size/1024).toFixed(0)} KB) -> ${webpFileName} (${(newStat.size/1024).toFixed(0)} KB) [Saved ${savedPct}%]`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }

  // 2. Optimize public/icon.png
  const iconSrc = path.join(publicDir, 'icon.png');
  if (fs.existsSync(iconSrc)) {
    const origIcon = fs.statSync(iconSrc).size;
    const iconTemp = path.join(publicDir, 'icon-opt.png');
    await sharp(iconSrc)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(iconTemp);
    fs.unlinkSync(iconSrc);
    fs.renameSync(iconTemp, iconSrc);
    const newIcon = fs.statSync(iconSrc).size;
    console.log(`Optimized icon.png: ${(origIcon/1024).toFixed(0)} KB -> ${(newIcon/1024).toFixed(0)} KB`);
  }

  console.log('\n--- Optimization Summary ---');
  console.log(`Total files converted: ${convertedCount}`);
  console.log(`Original total: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized WebP total: ${(totalOptimized / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total bandwidth saved: ${((totalOriginal - totalOptimized) / (1024 * 1024)).toFixed(2)} MB (${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}% reduction!)`);
}

convertAndOptimize();
