import React from "react";
import PropTypes from "prop-types";

// Styles
import { List, Tag } from "./tags.styles";

const Tags = ({ tags, margin, align }) => {
  return (
    <List margin={margin} align={align}>
      {tags.map(tag => (
        <Tag to={`/tag/${tag.toLowerCase()}`} key={tag}>
          &nbsp;
          {tag}
        </Tag>
      ))}
    </List>
  );
};

Tags.defaultProps = {
  margin: 0,
  align: "flex-start"
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  margin: PropTypes.number,
  align: PropTypes.oneOf(["flex-start", "center", "flex-end"])
};

export default Tags;
