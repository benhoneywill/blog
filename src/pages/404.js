import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Components
import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SectionHeading from "../components/section-heading";
import Posts from "../components/posts";

const NotFound = ({ location, data }) => {
  return (
    <Layout title="404 Not Found" location={location}>
      <Hero title="Page not found" />
      <Container maxWidth="1250px">
        <SectionHeading>Looking for a blog post?</SectionHeading>
        <Posts posts={data.posts.edges} />
      </Container>
    </Layout>
  );
};

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,

  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({ node: PropTypes.object.isRequired })
      ).isRequired
    }).isRequired
  }).isRequired
};

export const fourOhFourQuery = graphql`
  query {
    posts: allMdx(
      filter: {
        fields: { source: { eq: "blog" } }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }

          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            tags
            external_link
            tagline
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default NotFound;
