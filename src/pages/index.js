import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

// Components
import Container from "../components/container";
import Bio from "../components/bio";
import Posts from "../components/posts";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SectionHeading from "../components/section-heading";

const Home = ({ data, location }) => {
  return (
    <Layout title="Home" location={location}>
      <Hero>
        <Bio />
      </Hero>

      <Container maxWidth="1250px">
        <SectionHeading>All Posts</SectionHeading>
        <Posts posts={data.allMdx.edges} />
      </Container>
    </Layout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({ node: PropTypes.object.isRequired })
      ).isRequired
    }).isRequired
  }).isRequired
};

export const homeQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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

export default Home;
