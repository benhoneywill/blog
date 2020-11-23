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
  ${({ theme }) => css`
    text-decoration: none;
    background-color: ${theme.borderColor};
    background-color: var(--borderColor);
    color: ${theme.textColor};
    color: var(--textColor);
    display: inline-flex;
    align-items: center;
    padding: 0 15px;
    height: ${theme.baseLineHeight}rem;
    border-radius: 4px;
    font-size: 0.75rem;
    margin: 0 0.5rem 0.5rem 0;
    font-family: ${theme.sansSerif};
    font-weight: ${theme.boldFontWeight};
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &:last-child {
      margin-right: 0;
    }
  `}
`;
