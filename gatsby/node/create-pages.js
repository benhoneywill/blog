const path = require("path");

const blogPostsQuery = `{
  allMdx(
    filter: {
      frontmatter: { published: { eq: true } }
      fields: { source: { eq: "blog" } }
    },
    sort: { fields: [frontmatter___date], order: DESC },
    limit: 1000
  ) {
    edges {
      node {
        id
        frontmatter {
          tags
          external_link
        }
        fields { slug }
      }
    }
  }
}`;

const tagsQuery = `{
  tagsGroup: allMdx(
    filter: {
      frontmatter: { published: { eq: true } },
      fields: { source: { eq: "blog" } }
    },
    limit: 1000
  ) {
    group(field: frontmatter___tags) {
      fieldValue
    }
  }
}`;

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const [tagsData, postsData] = await Promise.all([
    graphql(tagsQuery),
    graphql(blogPostsQuery)
  ]);

  if (postsData.errors || tagsData.errors) {
    throw postsData.errors || tagsData.errors;
  }

  postsData.data.allMdx.edges.forEach(post => {
    if (!post.node.frontmatter.external_link) {
      createPage({
        path: post.node.fields.slug,
        component: path.resolve("src/templates/blog-post.js"),
        context: {
          slug: post.node.fields.slug
        }
      });
    }
  });

  tagsData.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `tag/${tag.fieldValue.toLowerCase()}`,
      component: path.resolve("src/templates/tag.js"),
      context: {
        slug: tag.fieldValue
      }
    });
  });
};
