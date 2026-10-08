const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const assetsDir = path.join(__dirname, '..', 'public', 'assets');

// List of all webp files generated
const webpFiles = new Set(
  fs.readdirSync(assetsDir)
    .filter(f => f.endsWith('.webp'))
    .map(f => f.replace('.webp', ''))
);

function walkAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Replace /assets/...png and /assets/...jpg with .webp if the webp exists
      const regex = /\/assets\/([^"'\`\)]+)\.(png|jpg|jpeg)/gi;
      const newContent = content.replace(regex, (match, baseName) => {
        // If webp version exists in assets
        if (webpFiles.has(baseName)) {
          modified = true;
          return `/assets/${baseName}.webp`;
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated image refs in: ${path.relative(srcDir, fullPath)}`);
      }
    }
  }
}

walkAndReplace(srcDir);
console.log('Finished updating image references to WebP!');
