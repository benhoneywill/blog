import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import Container from "../container";

export const Header = styled.header`
  ${({ isHomePage }) => css`
    display: flex;
    justify-content: ${isHomePage ? "flex-end" : "space-between"};
    width: 100%;
  `}
`;

export const FixedHeader = styled(Container)`
  position: fixed;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 2;

  @media (max-width: 1020px) {
    position: absolute;
  }

  button,
  a {
    pointer-events: initial;
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
