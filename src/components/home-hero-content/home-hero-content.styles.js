import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const HomeHeroContentContainer = styled.div`
  text-align: center;
  max-width: 900px;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.baseLineHeight / 4}rem;
  `}
`;

export const Tagline = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    margin-top: ${theme.baseLineHeight / 4}rem;
  `}
`;
