const path = require("path");

const blogPostsQuery = `{
  allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
    edges {
      node {
        id
        frontmatter { tags }
        fields { slug }
      }
    }
  }
}`;

const tagsQuery = `{
  tagsGroup: allMdx(limit: 1000) {
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
    createPage({
      path: post.node.fields.slug,
      component: path.resolve("src/templates/blog-post.js"),
      context: {
        slug: post.node.fields.slug
      }
    });
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
