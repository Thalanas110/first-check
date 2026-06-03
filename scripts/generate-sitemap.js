const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://annah-claire-1.netlify.app';

function extractPoemIds() {
  const servicePath = path.join(__dirname, '..', 'src', 'app', 'poems.service.ts');
  const content = fs.readFileSync(servicePath, 'utf8');
  const idMatches = content.match(/id:\s*(\d+)/g);
  
  if (!idMatches) {
    throw new Error('No poem IDs found in poems.service.ts');
  }
  
  return idMatches.map(match => parseInt(match.match(/\d+/)[0], 10));
}

function generateSitemap(poemIds) {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: `${BASE_URL}/`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '1.0'
    },
    ...poemIds.map(id => ({
      loc: `${BASE_URL}/poem/${id}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

function main() {
  try {
    const poemIds = extractPoemIds();
    console.log(`Found ${poemIds.length} poems: ${poemIds.join(', ')}`);
    
    const sitemap = generateSitemap(poemIds);
    
    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    
    console.log(`Sitemap generated at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
