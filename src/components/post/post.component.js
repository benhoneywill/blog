import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// Styles
import { PublishedAt, PostTitle } from "./post.styles";

// Components
import Tags from "../tags";

const Post = ({ post }) => {
  return (
    <div key={post.fields.slug}>
      <PostTitle>
        {post.frontmatter.external_link ? (
          <a href={post.frontmatter.external_link}>{post.frontmatter.title}</a>
        ) : (
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        )}
      </PostTitle>

      <PublishedAt>
        Posted on <time>{post.frontmatter.date}</time>
      </PublishedAt>
      <Tags tags={post.frontmatter.tags} />

      <p>{post.frontmatter.tagline}</p>
    </div>
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
      tagline: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Post;
