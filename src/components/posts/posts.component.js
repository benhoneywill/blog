import React from "react";
import PropTypes from "prop-types";

// Components
import Post from "../post";

// Styles
import { Wrapper, PostItem } from "./posts.styles";

const Posts = ({ posts, marginTop }) => {
  return (
    <Wrapper marginTop={marginTop}>
      {posts.map(({ node }) => (
        <PostItem key={node.fields.slug}>
          <Post post={node} />
        </PostItem>
      ))}
    </Wrapper>
  );
};

Posts.defaultProps = {
  marginTop: 0
};

Posts.propTypes = {
  marginTop: PropTypes.number,
  posts: PropTypes.arrayOf(
    PropTypes.shape({ node: PropTypes.object.isRequired })
  ).isRequired
};

export default Posts;
