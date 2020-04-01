import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Components
import Posts from "../components/posts";
import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SectionHeading from "../components/section-heading";

const TagTemplate = ({ data, pageContext, location }) => {
  return (
    <Layout title={pageContext.slug} location={location}>
      <Hero title={pageContext.slug} />

      <Container maxWidth="1250px">
        <SectionHeading>{pageContext.slug} Posts</SectionHeading>
        <Posts posts={data.allMdx.edges} />
      </Container>
    </Layout>
  );
};

TagTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
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

export default TagTemplate;
