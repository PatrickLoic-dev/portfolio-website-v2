/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.kangueloic.me', // Replace with your domain
    generateRobotsTxt: true,              // Generates robots.txt
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin', '/drafts'],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/admin', '/drafts'] },
      ],
    },
  };
      