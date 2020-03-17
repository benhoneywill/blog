import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Image from "gatsby-image";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  border-top: none;
  padding: 0.8rem 0.25em;
  border-radius: 0 0 3px 3px;
  transition: border-color 0.2s ease-out;
`;

export const PublishedAt = styled.p`
  ${({ theme }) => css`
    color: #777777;
    font-family: ${theme.fonts.sansSerif};
    margin-top: ${theme.baseLineHeight / 2}rem;
    margin-bottom: ${theme.baseLineHeight / 2}rem;
  `}
`;

export const PostTitle = styled.h5`
  ${({ theme }) => css`
    margin-top: 0;
    color: ${theme.colors.primary};
    a {
      color: inherit;
    }
  `}
`;

export const Tagline = styled.p`
  ${({ theme }) => css`
    margin-bottom: 0;
    margin-top: ${theme.baseLineHeight / 2.25}rem;
  `}
`;

export const PostImage = styled(Image)`
  ${({ theme }) => css`
    height: ${theme.baseLineHeight * 5}rem;
    border-radius: 3px;
  `}
`;
