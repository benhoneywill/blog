import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";

import GlobalStyles from "./styles";
import { ThemeProvider } from "./contexts/theme";
import Code from "./components/code";

const MDXComponents = {
  pre: props => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  }
};

const App = ({ element }) => (
  <ThemeProvider>
    <GlobalStyles />
    <MDXProvider components={MDXComponents}>{element}</MDXProvider>
  </ThemeProvider>
);

App.propTypes = {
  element: PropTypes.node.isRequired
};

export default App;
