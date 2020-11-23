import PropTypes from "prop-types";
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkModeTheme from "prism-react-renderer/themes/nightOwl";
import lightModeTheme from "prism-react-renderer/themes/nightOwlLight";

// Contexts
import { useTheme } from "../../contexts/theme";

// Styles
import { Token, Pre } from "./code.styles";

const Code = ({ codeString, language }) => {
  const { darkMode } = useTheme();

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={darkMode ? darkModeTheme : lightModeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <Token
                    loaded={darkMode !== null}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </code>
        </Pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

export default Code;
