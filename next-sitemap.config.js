/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_HOSTING_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/404", "/ja/404", "/en/404", "/server-sitemap.xml"],
};
