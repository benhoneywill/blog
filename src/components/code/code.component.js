import PropTypes from "prop-types";
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

// Contexts
import { useTheme } from "../../contexts/theme";

// Themes
import { getCodeTheme } from "./code.config";

const Code = ({ codeString, language }) => {
  const { darkMode, theme } = useTheme();
  const codeTheme = getCodeTheme({ theme, darkMode });

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};

export default Code;
