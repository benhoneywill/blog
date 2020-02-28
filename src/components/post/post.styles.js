import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const PublishedAt = styled.p`
  ${({ theme }) => css`
    color: #777777;
    font-family: "Lato", sans-serif;
    margin-top: ${theme.baseLineHeight / 2}rem;
  `}
`;

export const PostTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    a {
      color: inherit;
    }
  `}
`;
