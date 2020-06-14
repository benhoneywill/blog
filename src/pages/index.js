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
import Tags from "../components/tags";

const Home = ({ data, location }) => {
  return (
    <Layout title="Home" location={location}>
      <Hero>
        <Bio />
      </Hero>

      <Container maxWidth="1250px">
        <Tags
          align="center"
          tags={data.tags.group.map(tag => tag.fieldValue)}
        />

        <SectionHeading>Blog Posts</SectionHeading>
        <Posts posts={data.posts.edges} />
      </Container>
    </Layout>
  );
};

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,

  data: PropTypes.shape({
    tags: PropTypes.shape({
      group: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,

    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({ node: PropTypes.object.isRequired })
      ).isRequired
    }).isRequired
  }).isRequired
};

export const homeQuery = graphql`
  query {
    tags: allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }

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

export default Home;
