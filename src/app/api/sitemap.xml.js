export default async function handler(req, res) {
    res.setHeader('Content-Type', 'text/xml');
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
      <url>
        <loc>https://mohammedyazin.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <!-- Add more URLs dynamically here -->
    </urlset>`;
  
    res.write(sitemap);
    res.end();
  }
  