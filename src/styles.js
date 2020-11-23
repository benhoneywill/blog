import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";

export const appTheme = {
  baseFontSize: 20,
  baseFontSizeMobile: 18,
  baseLineHeight: 1.6,
  headingLineHeight: 1.2,
  serif: `"Lora", Georgia, serif`,
  sansSerif: `"lato", ‘Helvetica Neue’, Helvetica, Arial, sans-serif`,
  monospace: `"Fira Code", monospace`,
  normalFontWeight: 400,
  boldFontWeight: 700,

  colors: {
    light: {
      backgroundColor: "#fefefe",
      lightColor: "#f1f1f1",
      textColor: "#333333",
      lightTextColor: "#666666",
      headingColor: "#111111",
      primaryColor: "#1E90FF",
      borderColor: "rgba(0, 0, 0, 0.1)",
      codeBackgroundColor: "#f5f5f5",
      codeForegroundColor: "#A159C7",
      buttonColor: "#f5f5f5",
      buttonHoverColor: "#efefef",
      heroColor: "#f3f3f3",
      toggleColor: "#f9f9f9",
      toggleSliderColor: "#c7c7c7"
    },

    dark: {
      backgroundColor: "#191b1f",
      lightColor: "#08090a",
      textColor: "#C4C6C7",
      lightTextColor: "#888888",
      headingColor: "#fefefe",
      primaryColor: "#00aced",
      borderColor: "rgba(255, 255, 255, 0.1)",
      codeBackgroundColor: "#212329",
      codeForegroundColor: "#ffca8b",
      buttonColor: "#212329",
      buttonHoverColor: "#313339",
      heroColor: "#151515",
      toggleColor: "#000000",
      toggleSliderColor: "#333333"
    }
  }
};

const GlobalStyle = ({ theme }) => (
  <Global
    styles={css`
      /* Add all of the color theme variables as CSS variables */
      ${Object.keys(appTheme.colors).map(
        themeKey =>
          css`
            body.${themeKey} {
              ${Object.keys(appTheme.colors[themeKey]).map(
                color =>
                  css`
                    --${color}: ${appTheme.colors[themeKey][color]};
                  `
              )}
            }
          `
      )}

      *,
      *:before,
      *:after {
        box-sizing: border-box;
        flex: 0 1 auto;
      }
      html {
        font-size: 100%;
        font-size: ${theme.baseFontSize}px;
        font-weight: ${theme.normalFontWeight};
        line-height: ${theme.baseLineHeight};
        @media (max-width: 750px) {
          font-size: ${theme.baseFontSize - 2}px;
        }
      }
      body {
        color: ${theme.textColor};
        color: var(--textColor);
        font-family: ${theme.serif};
        overflow-x: hidden;
        background: ${theme.backgroundColor};
        background: var(--backgroundColor);
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
        font-weight: ${theme.boldFontWeight};
        color: ${theme.headingColor};
        color: var(--headingColor);
        line-height: ${theme.headingLineHeight};
        margin-top: ${theme.baseLineHeight * 2}rem;
        margin-bottom: 0;
        font-family: ${theme.sansSerif};
      }
      ${["h1", "h2", "h3", "h4", "h5", "h6"]
        .map((hx, index, headings) =>
          headings.map(hy => `${hx} + ${hy}`).join(",")
        )
        .join(",")} {
        margin-top: ${theme.baseLineHeight * 1.5}rem;
      }
      h1 {
        font-size: ${(theme.baseLineHeight * 3) / theme.headingLineHeight}rem;
        @media (max-width: 600px) {
          font-size: ${(theme.baseLineHeight * 2) / theme.headingLineHeight}rem;
        }
      }
      h2 {
        font-size: ${(theme.baseLineHeight * 2) / theme.headingLineHeight}rem;
      }
      h3 {
        font-size: ${(theme.baseLineHeight * 1.5) / theme.headingLineHeight}rem;
      }
      h4 {
        font-size: ${(theme.baseLineHeight * 1.25) /
          theme.headingLineHeight}rem;
      }
      h5 {
        font-size: ${theme.baseLineHeight / theme.headingLineHeight}rem;
      }
      h6 {
        font-size: 1rem;
        line-height: ${theme.baseLineHeight};
      }
      button {
        font-size: ${theme.baseFontSize}px;
        line-height: ${theme.baseLineHeight};
      }
      blockquote {
        color: ${theme.lightTextColor};
        color: var(--lightTextColor);
        margin: ${theme.baseLineHeight * 2}rem 0;
        padding-left: ${theme.baseLineHeight}rem;
        margin-left: ${theme.baseLineHeight / 2}rem;
        font-size: 1.2rem;
        line-height: ${theme.baseLineHeight / 1.2};
        border-left: 0.25em solid ${theme.borderColor};
        border-left: 0.25em solid var(--borderColor);
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
        border-bottom: 1px solid ${theme.borderColor};
        border-bottom: 1px solid var(--borderColor);
        margin: ${theme.baseLineHeight}rem 0;
        padding: 0;
      }
      pre,
      code,
      kbd,
      samp {
        color: ${theme.codeForegroundColor};
        color: var(--codeForegroundColor);
        background-color: ${theme.codeBackgroundColor};
        background-color: var(--codeBackgroundColor);
        font-family: ${theme.monospace};
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
        font-weight: ${theme.boldFontWeight};
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
        color: ${theme.primaryColor};
        color: var(--primaryColor);
      }
    `}
  />
);

GlobalStyle.propTypes = {
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number.isRequired,
    baseLineHeight: PropTypes.number.isRequired,
    headingLineHeight: PropTypes.number.isRequired,

    serif: PropTypes.string.isRequired,
    sansSerif: PropTypes.string.isRequired,
    monospace: PropTypes.string.isRequired,

    normalFontWeight: PropTypes.number.isRequired,
    boldFontWeight: PropTypes.number.isRequired,

    primaryColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    lightColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    lightTextColor: PropTypes.string.isRequired,
    headingColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    codeBackgroundColor: PropTypes.string.isRequired,
    codeForegroundColor: PropTypes.string.isRequired
  }).isRequired
};

export default withTheme(GlobalStyle);
