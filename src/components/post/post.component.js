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
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </PostTitle>
      <PublishedAt>
        Posted on <time>{post.frontmatter.date}</time>
      </PublishedAt>

      <Tags tags={post.frontmatter.tags} />
      <p>{post.excerpt}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired,
    frontmatter: PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Post;
