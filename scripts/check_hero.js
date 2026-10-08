const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const heroIdx = data.indexOf('id="hero"');
    if (heroIdx !== -1) {
      console.log('--- HERO SSR SNIPPET ---');
      console.log(data.substring(heroIdx, heroIdx + 1500));
    } else {
      console.log('hero not found in HTML');
    }
  });
}).on('error', (e) => {
  console.error('Error connecting to dev server:', e.message);
});
