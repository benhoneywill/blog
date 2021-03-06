const siteMetadata = require("./gatsby/config/site-metadata");
const gatsbySourceFilesystem = require("./gatsby/config/plugins/gatsby-source-filesystem");
const gatsbyPluginMDX = require("./gatsby/config/plugins/gatsby-plugin-mdx");
const gatsbyPluginReactSVG = require("./gatsby/config/plugins/gatsby-plugin-react-svg");
const gatsbyPluginManifest = require("./gatsby/config/plugins/gatsby-plugin-manifest");
const gatsbyPluginCanonicalUrls = require("./gatsby/config/plugins/gatsby-plugin-canonical-urls");

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-mdx-source-name`,
    gatsbySourceFilesystem("blog"),
    gatsbySourceFilesystem("projects"),
    gatsbySourceFilesystem("assets"),
    gatsbyPluginMDX,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    gatsbyPluginReactSVG,
    gatsbyPluginManifest,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    gatsbyPluginCanonicalUrls
  ]
};
