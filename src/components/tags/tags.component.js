import React from "react";
import PropTypes from "prop-types";

// Helpers
import { getTagEmoji } from "./tags.helpers";

// Contexts
import { useTheme } from "../../contexts/theme";

// Components
import Emoji from "../emoji";

// Styles
import { List, Tag } from "./tags.styles";

const Tags = ({ tags, margin, align }) => {
  const { darkMode } = useTheme();

  return (
    <List margin={margin} align={align}>
      {tags.map(tag => (
        <Tag to={`/tag/${tag.toLowerCase()}`} darkMode={darkMode} key={tag}>
          <Emoji emoji={getTagEmoji(tag)} label={tag} />
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
