module.exports = {
  resolve: "gatsby-plugin-mdx",
  options: {
    extensions: [".mdx", ".md"],
    plugins: ["gatsby-remark-images"],
    gatsbyRemarkPlugins: [
      {
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 680
        }
      },
      {
        resolve: "gatsby-remark-responsive-iframe",
        options: {
          wrapperStyle: "margin-bottom: 1.6rem"
        }
      },
      {
        resolve: "gatsby-remark-copy-linked-files"
      },
      {
        resolve: "gatsby-remark-smartypants"
      }
    ]
  }
};
