import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Image from "gatsby-image";

export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    margin: ${theme.baseLineHeight * 2}rem auto;
    padding-bottom: ${theme.baseLineHeight}rem;
    border-bottom: 1px solid ${theme.colors.border};
  `}
`;

export const PublishedAt = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightText};
    font-family: ${theme.fonts.sansSerif};
    margin-bottom: 0;
  `}
`;

export const MarkdownWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.baseLineHeight * 2}rem;
  `}
`;

export const ArticleImage = styled(Image)`
  ${({ theme }) => css`
    height: ${theme.baseLineHeight * 10}rem;
    margin: 0 -1em;
  `}
`;

export const ArticleTagline = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    line-height: ${theme.baseLineHeight / 1.2};
    margin-top: ${theme.baseLineHeight * 0.5}rem;
    transition: border-color 0.2s ease-out;
  `}
`;
