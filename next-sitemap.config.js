/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.brvteck.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.9,
      lastmod: new Date().toISOString(),
    };
  },
};

