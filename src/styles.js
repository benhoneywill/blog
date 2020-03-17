import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";

const makeStyles = theme => css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    overflow-y: scroll;
    font-size: ${theme.baseFontSize}px;
    line-height: ${theme.baseLineHeight};

    @media (max-width: 750px) {
      font-size: ${theme.baseFontSize - 2}px;
    }

    @media (max-width: 430px) {
      font-size: ${theme.baseFontSize - 3}px;
    }
  }

  body {
    color: ${theme.colors.text};
    font-family: ${theme.fonts.serif};
    overflow-x: hidden;
    background: ${theme.colors.background};
    transition: background 0.2s ease-out, color 0.2s ease-out;
  }

  p {
    margin: ${theme.baseLineHeight}rem 0;
  }

  img {
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    color: ${theme.colors.heading};
    line-height: ${theme.headerLineHeight};
    margin-top: ${theme.baseLineHeight * 2}rem;
    margin-bottom: 0;
    font-family: ${theme.fonts.sansSerif};
  }

  h1 {
    font-size: ${(theme.baseLineHeight * 3) / theme.headerLineHeight}rem;

    @media (max-width: 600px) {
      font-size: ${(theme.baseLineHeight * 2) / theme.headerLineHeight}rem;
    }
  }

  h2 {
    font-size: ${(theme.baseLineHeight * 2) / theme.headerLineHeight}rem;
  }

  h3 {
    font-size: ${(theme.baseLineHeight * 1.5) / theme.headerLineHeight}rem;
  }

  h4 {
    font-size: ${(theme.baseLineHeight * 1.25) / theme.headerLineHeight}rem;
  }

  h5 {
    font-size: ${theme.baseLineHeight / theme.headerLineHeight}rem;
  }

  h6 {
    font-size: 1rem;
    line-height: ${theme.baseLineHeight};
  }

  blockquote {
    color: ${theme.colors.lightText};
    margin: ${theme.baseLineHeight * 2}rem 0;
    padding-left: ${theme.baseLineHeight}rem;
    margin-left: ${theme.baseLineHeight}rem;
    font-size: 1.2rem;
    line-height: ${theme.baseLineHeight / 1.2};
    border-left: 0.25em solid ${theme.colors.border};
  }

  blockquote cite {
    font-style: italic;
    display: block;
  }

  hr {
    display: block;
    border: 0;
    border-bottom: 1px solid ${theme.colors.border};
    margin: ${theme.baseLineHeight}rem 0;
    padding: 0;
  }

  pre,
  code,
  kbd,
  samp {
    color: ${theme.colors.text};
    background-color: ${theme.colors.code};
    font-family: monospace;
    padding: 0 3px;
    border-radius: 2px;
  }

  pre {
    padding: ${theme.baseLineHeight}rem;
    border-radius: 3px;
    margin: ${theme.baseLineHeight}rem -1rem ${theme.baseLineHeight * 2}rem -1rem;
    overflow-x: auto;
  }

  b,
  strong {
    font-weight: bold;
  }

  ul,
  ol {
    margin: ${theme.baseLineHeight}rem 0 ${theme.baseLineHeight * 1.5}rem 0;
    padding: 0 0 0 2rem;
  }

  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin: 0;
    margin-top: ${theme.baseLineHeight / 2}rem;
    padding: 0 0 0 1em;
  }

  li {
    margin-bottom: ${theme.baseLineHeight / 2}rem;
  }

  li p:last-child {
    margin: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    vertical-align: top;
  }

  a {
    color: ${theme.colors.primary};
  }
`;

const GlobalStyle = ({ theme }) => <Global styles={makeStyles(theme)} />;

GlobalStyle.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(GlobalStyle);
