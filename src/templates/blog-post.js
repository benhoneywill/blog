import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

// Components
import Article from "../components/article";
import Layout from "../components/layout";
import Hero from "../components/hero";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx;

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.tagline}
      keywords={post.frontmatter.tags}
      location={location}
      image={post.frontmatter.image.childImageSharp.fluid.src}
    >
      <Hero title={post.frontmatter.title} />
      <Article post={post} />
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        tagline: PropTypes.string.isRequired,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.object.isRequired
          }).isRequired
        }).isRequired
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
        tagline
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
      body
    }
  }
`;

export default BlogPostTemplate;
