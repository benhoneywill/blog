import React from "react";
import PropTypes from "prop-types";

// Contexts
import { useTheme } from "../../contexts/theme";

// Styles
import { List, Tag } from "./tags.styles";

const Tags = ({ tags }) => {
  const { darkMode } = useTheme();

  return (
    <List>
      {tags.map(tag => (
        <Tag to={`/tag/${tag.toLowerCase()}`} darkMode={darkMode}>
          {tag}
        </Tag>
      ))}
    </List>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tags;
