import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

export const List = styled.div`
  ${({ margin, theme, align }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${align};
    padding: ${margin * theme.baseLineHeight}rem 0;
    margin-bottom: -0.5rem;
  `}
`;

export const Tag = styled(Link)`
  ${({ theme, darkMode }) => css`
    text-decoration: none;
    background-color: ${darkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)"};
    color: ${theme.colors.text};
    display: inline-flex;
    align-items: center;
    padding: 0 15px;
    height: ${theme.baseLineHeight}rem;
    border-radius: 4px;
    font-size: 0.75rem;
    margin: 0 0.5rem 0.5rem 0;
    font-family: ${theme.fonts.sansSerif};
    font-weight: bold;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  `}
`;
