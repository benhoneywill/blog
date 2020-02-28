const siteMetadata = require("./gatsby/config/site-metadata");
const gatsbySourceFilesystem = require("./gatsby/config/plugins/gatsby-source-filesystem");
const gatsbyPluginMDX = require("./gatsby/config/plugins/gatsby-plugin-mdx");
const gatsbyPluginReactSVG = require("./gatsby/config/plugins/gatsby-plugin-react-svg");
const gatsbyPluginFeed = require("./gatsby/config/plugins/gatsby-plugin-feed");
const gatsbyPluginManifest = require("./gatsby/config/plugins/gatsby-plugin-manifest");

module.exports = {
  siteMetadata,
  plugins: [
    gatsbySourceFilesystem("blog"),
    gatsbySourceFilesystem("assets"),
    gatsbyPluginMDX,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    gatsbyPluginReactSVG,
    gatsbyPluginFeed,
    gatsbyPluginManifest,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
};
