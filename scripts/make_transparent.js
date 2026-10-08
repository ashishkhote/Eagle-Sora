const path = require('path');
const sharp = require(path.join(__dirname, '../node_modules/sharp'));

async function processImage() {
  const inputPath = path.join(__dirname, '../public/assets/services-team-illustration.jpg');
  const outputPath = path.join(__dirname, '../public/assets/services-team-cutout.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Dimensions: ${width}x${height}, channels: ${channels}`);

  // In about-team-illustration.jpg, the background outside the organic shape is very light mint/white:
  // e.g. r > 220, g > 235, b > 220, and low saturation.
  // Let's do a flood-fill BFS from the 4 corners/borders so we only remove the outer background!
  
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackground(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // Outer background is light mint / off-white: r > 215, g > 230, b > 215, or generally very high brightness with light green tint
    const brightness = (r + g + b) / 3;
    const isVeryLight = brightness > 225 && g >= r && g >= b;
    const isWhite = r > 235 && g > 235 && b > 235;
    return isVeryLight || isWhite;
  }

  // Push all outer border pixels that match background
  for (let x = 0; x < width; x++) {
    if (isBackground(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
    if (isBackground(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isBackground(0, y) && !visited[y * width + 0]) { queue.push(0, y); visited[y * width + 0] = 1; }
    if (isBackground(width - 1, y) && !visited[y * width + (width - 1)]) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    // Make this pixel transparent
    const idx = (cy * width + cx) * channels;
    data[idx + 3] = 0; // Alpha = 0

    // Check 4 neighbors
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const npos = ny * width + nx;
        if (!visited[npos] && isBackground(nx, ny)) {
          visited[npos] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  console.log(`Flooded ${queue.length / 2} outer background pixels.`);

  // Save as transparent PNG
  await sharp(data, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile(outputPath);

  console.log(`Saved transparent cutout to ${outputPath}`);
}

processImage().catch(console.error);
