import React from "react";
import PropTypes from "prop-types";

// Config
import { EMOJIS } from "./emoji.config";

// Styles
import { Wrapper, EmojiImg } from "./emoji.styles";

const Emoji = ({ label, emoji }) => {
  const imgSrc = EMOJIS[emoji];

  if (!imgSrc) {
    return (
      <span role="img" aria-label={label}>
        {emoji}
      </span>
    );
  }

  return (
    <Wrapper>
      <EmojiImg src={imgSrc} alt={label} />
    </Wrapper>
  );
};

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
};

export default Emoji;
