import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";

const GlobalStyle = ({ theme }) => (
  <Global
    styles={css`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
        flex: 0 1 auto;
      }

      html {
        font-size: 100%;
        font-size: ${theme.baseFontSize}px;
        font-weight: ${theme.fontWeights.normal};
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
        font-weight: 70 ${theme.fontWeights.bold}0;
        color: ${theme.colors.heading};
        line-height: ${theme.headerLineHeight};
        margin-top: ${theme.baseLineHeight * 2}rem;
        margin-bottom: 0;
        font-family: ${theme.fonts.sansSerif};
      }

      ${["h1", "h2", "h3", "h4", "h5", "h6"]
        .map((hx, index, headings) =>
          headings.map(hy => `${hx} + ${hy}`).join(",")
        )
        .join(",")} {
        margin-top: ${theme.baseLineHeight * 1.5}rem;
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
        margin-left: ${theme.baseLineHeight / 2}rem;
        font-size: 1.2rem;
        line-height: ${theme.baseLineHeight / 1.2};
        border-left: 0.25em solid ${theme.colors.border};
      }

      blockquote cite {
        font-style: italic;
        display: block;
        font-size: 1rem;
        line-height: ${theme.baseLineHeight};
        padding-top: ${theme.baseLineHeight / 2}rem;
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
        color: ${theme.colors.codeForeground};
        background-color: ${theme.colors.codeBackground};
        font-family: monospace;
        padding: 0 3px;
        border-radius: 2px;
        transition: background 0.2s ease-out, color 0.2s ease-out;
      }

      pre {
        padding: ${theme.baseLineHeight}rem;
        border-radius: 3px;
        margin: ${theme.baseLineHeight}rem -1rem;
        overflow-x: auto;
      }

      pre code {
        display: block;
        padding: 0;
      }

      b,
      strong {
        font-weight: ${theme.fontWeights.bold};
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
    `}
  />
);

GlobalStyle.propTypes = {
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number.isRequired,
    baseLineHeight: PropTypes.number.isRequired,
    headerLineHeight: PropTypes.number.isRequired,

    fonts: PropTypes.shape({
      serif: PropTypes.string.isRequired,
      sansSerif: PropTypes.string.isRequired
    }).isRequired,

    fontWeights: PropTypes.shape({
      normal: PropTypes.number.isRequired,
      bold: PropTypes.number.isRequired
    }).isRequired,

    colors: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      light: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      lightText: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      border: PropTypes.string.isRequired,
      codeBackground: PropTypes.string.isRequired,
      codeForeground: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withTheme(GlobalStyle);
