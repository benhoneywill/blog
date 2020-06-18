import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const PostLink = ({ children, post }) =>
  post.frontmatter.external_link ? (
    <a href={post.frontmatter.external_link} rel="noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <Link to={post.fields.slug}>{children}</Link>
  );

PostLink.propTypes = {
  children: PropTypes.node.isRequired,

  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string
    }).isRequired,

    frontmatter: PropTypes.shape({
      external_link: PropTypes.string
    }).isRequired
  }).isRequired
};

export default PostLink;
