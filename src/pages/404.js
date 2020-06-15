import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// Components
import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Emoji from "../components/emoji";
import SectionHeading from "../components/section-heading";
import Posts from "../components/posts";

const NotFound = ({ location, data }) => {
  return (
    <Layout title="404 Not Found" location={location}>
      <Hero
        title={
          <>
            <Emoji emoji="💥" label="Explode" /> 404 Not Found
          </>
        }
      />
      <Container maxWidth="1250px">
        <SectionHeading>Blog Posts</SectionHeading>
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
    posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
