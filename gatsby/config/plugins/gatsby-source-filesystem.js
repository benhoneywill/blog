module.exports = name => ({
  resolve: "gatsby-source-filesystem",
  options: {
    name,
    path: `content/${name}`
  }
});
