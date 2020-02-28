import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

// Components
import SEO from "../components/seo";
import Container from "../components/container";
import Article from "../components/article";
import PageHeader from "../components/page-header";

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Container>
        <PageHeader />
        <Article post={post} />
      </Container>
    </>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export const blogPostQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        tags
        date(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
      body
    }
  }
`;

export default BlogPostTemplate;
