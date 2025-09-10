/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tonia-kaparelioti.gr',
  generateRobotsTxt: false,     // we're hand-writing robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  outDir: 'public',
  trailingSlash: true,
  exclude: [
    '/admin',
    '/admin/*',
    '/client',
    '/client/*',
    '/api/*',
    '/thank-you',
    '/login',
    '/set-password'
  ],
  // Optional: explicitly include your key public routes if some are dynamic or App Router-only
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about-us/'),
    await config.transform(config, '/blog/'),
    await config.transform(config, '/contact/'),
    await config.transform(config, '/office/'),
    await config.transform(config, '/services/'),
  ],
};