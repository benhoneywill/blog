import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    margin: ${theme.baseLineHeight * 2}rem auto;
    padding-bottom: ${theme.baseLineHeight}rem;
    border-bottom: 1px solid ${theme.colors.border};
  `}
`;

export const PublishedAt = styled.p`
  ${({ theme }) => css`
    color: #777;
    font-family: ${theme.fonts.sansSerif};
    margin-bottom: 0;
  `}
`;

export const MarkdownWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.baseLineHeight * 2}rem;
  `}
`;
