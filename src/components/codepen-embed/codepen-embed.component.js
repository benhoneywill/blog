import React from "react";
import PropTypes from "prop-types";

import { CodepenIframe, Wrapper } from "./codepen-embed.styles";

const CodepenEmbed = ({ src }) => {
  return (
    <Wrapper>
      <CodepenIframe
        height="500"
        scrolling="no"
        src={src}
        frameBorder="no"
        loading="lazy"
        allowtransparency="true"
        allowFullScreen="true"
      />
    </Wrapper>
  );
};

CodepenEmbed.propTypes = {
  src: PropTypes.string.isRequired
};

export default CodepenEmbed;
