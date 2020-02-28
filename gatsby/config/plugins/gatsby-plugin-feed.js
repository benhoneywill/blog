const siteMetadataQuery = `{
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
}`;

const blogPostQuery = `{
  allMdx(
    limit: 1000,
    sort: { order: DESC, fields: [frontmatter___date] },
  ) {
    edges {
      node {
        body
        fields { slug }
        frontmatter {
          title
          tagline
          date
        }
      }
    }
  }
}`;

const serialize = ({ query }) => {
  const { site, allMdx } = query;

  return allMdx.edges.map(({ node }) => ({
    description: node.frontmatter.tagline,
    data: node.frontmatter.date,
    url: site.siteMetadata.siteUrl + node.fields.slug,
    guid: site.siteMetadata.siteUrl + node.fields.slug,
    custom_elements: [{ "content:encoded": node.body }]
  }));
};

module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: siteMetadataQuery,
    feeds: [
      {
        output: "/rss.xml",
        title: "Ben Honeywill RSS",
        query: blogPostQuery,
        serialize
      }
    ]
  }
};
