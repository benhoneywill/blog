import React from "react";
import PropTypes from "prop-types";

// Components
import Post from "../post";

// Styles
import { Wrapper, PostItem } from "./posts.styles";

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map(({ node }) => (
        <PostItem>
          <Post post={node} />
        </PostItem>
      ))}
    </Wrapper>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({ node: PropTypes.object.isRequired })
  ).isRequired
};

export default Posts;
