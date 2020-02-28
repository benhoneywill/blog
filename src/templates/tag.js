import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Components
import Post from "../components/post";
import Container from "../components/container";
import SEO from "../components/seo";
import PageHeader from "../components/page-header";

const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;

  return (
    <>
      <SEO title={pageContext.slug} />

      <Container>
        <PageHeader />
        <h1>{pageContext.slug}</h1>
        {posts.map(({ node }) => (
          <Post post={node} />
        ))}
      </Container>
    </>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
    }).isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
};

export const tagQuery = graphql`
  query($slug: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$slug] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tagline
            tags
          }
        }
      }
    }
  }
`;

export default TagTemplate;
