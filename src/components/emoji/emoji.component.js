import React from "react";
import PropTypes from "prop-types";

// Queries
import { useEmojiQuery } from "./emoji.queries";

// Styles
import { Wrapper, EmojiImg } from "./emoji.styles";

const Emoji = ({ label, emoji }) => {
  const emojiData = useEmojiQuery(emoji);

  if (!emojiData) {
    return (
      <span role="img" aria-label={label}>
        {emoji}
      </span>
    );
  }

  return (
    <Wrapper>
      <EmojiImg Tag="span" fluid={emojiData.fluid} alt={label} />
    </Wrapper>
  );
};

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
};

export default Emoji;
