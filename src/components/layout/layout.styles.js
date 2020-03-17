import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

export const Header = styled.header`
  ${({ isHomePage }) => css`
    display: flex;
    justify-content: ${isHomePage ? "flex-end" : "space-between"};
    width: 100%;
  `}
`;

export const BackLink = styled(Link)`
  ${({ theme }) => css`
    font-size: ${(theme.baseLineHeight * 1.25) / theme.headerLineHeight}rem;
    font-weight: bold;
    line-height: ${theme.baseLineHeight};
    margin: 0;
    font-family: ${theme.fonts.sansSerif};
    text-decoration: none;
  `}
`;
