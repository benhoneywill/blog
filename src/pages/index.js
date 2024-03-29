import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

// Components
import Container from "../components/container";
import Posts from "../components/posts";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SectionHeading from "../components/section-heading";
import Tags from "../components/tags";
import HomeHeroContent from "../components/home-hero-content";

const Home = ({ data, location }) => {
  return (
    <Layout title="Home" location={location}>
      <Hero>
        <HomeHeroContent />
      </Hero>

      <Container maxWidth="1250px">
        <SectionHeading>My Projects</SectionHeading>
        <Projects projects={data.projects.edges} />

        <SectionHeading>Blog Posts</SectionHeading>
        <Tags tags={data.tags.group.map(tag => tag.fieldValue)} />
        <Posts posts={data.posts.edges} marginTop={3 / 2} />
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
      group: PropTypes.arrayOf(
        PropTypes.shape({ fieldValue: PropTypes.string.isRequired })
      ).isRequired
    }).isRequired,

    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({ node: PropTypes.object.isRequired }) // eslint-disable-line
      ).isRequired
    }).isRequired,

    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({ node: PropTypes.object.isRequired }) // eslint-disable-line
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

    projects: allMdx(
      filter: { fields: { source: { eq: "projects" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            link
            description
            github
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

export default Home;
