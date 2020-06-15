import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  PublishedAt,
  PostTitle,
  Wrapper,
  ContentWrapper,
  Tagline,
  PostImage
} from "./post.styles";

// Components
import Tags from "../tags";
import PostLink from "./post.link";

const Post = ({ post }) => {
  return (
    <Wrapper>
      <PostLink post={post}>
        <PostImage
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
      </PostLink>

      <ContentWrapper>
        <PostTitle>
          <PostLink post={post}>{post.frontmatter.title}</PostLink>
        </PostTitle>

        <PublishedAt>
          Posted on <time>{post.frontmatter.date}</time>
        </PublishedAt>
        <Tags tags={post.frontmatter.tags} />

        <Tagline>{post.frontmatter.tagline}</Tagline>
      </ContentWrapper>
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,

    frontmatter: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      external_link: PropTypes.string,
      tagline: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.object.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Post;
