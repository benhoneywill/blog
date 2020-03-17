import React from "react";
import PropTypes from "prop-types";

// Contexts
import { useTheme } from "../../contexts/theme";

// Styles
import { List, Tag } from "./tags.styles";

const Tags = ({ tags, margin }) => {
  const { darkMode } = useTheme();

  return (
    <List margin={margin}>
      {tags.map(tag => (
        <Tag to={`/tag/${tag.toLowerCase()}`} darkMode={darkMode}>
          {tag}
        </Tag>
      ))}
    </List>
  );
};

Tags.defaultProps = {
  margin: 0
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  margin: PropTypes.number
};

export default Tags;
