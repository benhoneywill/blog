import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Components
import Container from "../components/container";
import SEO from "../components/seo";
import Bio from "../components/bio";
import DarkModeToggle from "../components/dark-mode-toggle";
import Post from "../components/post";

const ToggleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${theme.baseLineHeight}rem;
  `}
`;

const Home = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <>
      <SEO title="Home" />
      <Container>
        <ToggleWrapper>
          <DarkModeToggle />
        </ToggleWrapper>

        <Bio />

        {posts.map(({ node }) => (
          <Post post={node} />
        ))}
      </Container>
    </>
  );
};

Home.propTypes = {
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

export default Home;
