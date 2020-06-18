import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import Container from "../container";

export const Wrapper = styled.div`
  ${({ isHomePage }) => css`
    display: flex;
    justify-content: ${isHomePage ? "flex-end" : "space-between"};
    width: 100%;
  `}
`;

export const Header = styled(Container)`
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 2;

  button,
  a {
    pointer-events: initial;
  }
`;

Header.defaultProps = {
  as: "header"
};

export const DarkModeToggleWrapper = styled.div`
  position: fixed;
  right: 1em;

  @media (max-width: 1020px) {
    position: absolute;
  }
`;

export const BackLink = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.baseLineHeight / theme.headerLineHeight}rem;
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.baseLineHeight};
    margin: 0;
    line-height: 1;
    font-family: ${theme.fonts.sansSerif};
    text-decoration: none;
  `}
`;
